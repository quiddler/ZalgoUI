import { Isa } from "./isa";
import { forEach } from "./forEach";

var isa = new Isa();

function setHashKey(obj, h) {
  if (h) {
    obj._hashKey = h;
  } else {
    delete obj._hashKey;
  }
}

export function copy(source, destination, stackSource?, stackDest?) {
  if (isa.window(source)) {
    throw new Error("cpws: Can't copy! Making copies of Window or Scope instances is not supported.");
  }
  if (isa.typedArray(destination)) {
    throw new Error("cpta: Can't copy! TypedArray destination cannot be mutated.");
  }

  if (!destination) {
    destination = source;
    if (isa.object(source)) {
      var index;
      if (stackSource && (index = stackSource.indexOf(source)) !== -1) {
        return stackDest[index];
      }

      // TypedArray, Date and RegExp have specific copy functionality and must be
      // pushed onto the stack before returning.
      // Array and other objects create the base object and recurse to copy child
      // objects. The array/object will be pushed onto the stack when recursed.
      if (isa.array(source)) {
        return copy(source, [], stackSource, stackDest);
      } else if (isa.typedArray(source)) {
        destination = new source.constructor(source);
      } else if (isa.date(source)) {
        destination = new Date(source.getTime());
      } else if (isa.regExp(source)) {
        destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
        destination.lastIndex = source.lastIndex;
      } else if (isa.function(source.cloneNode)) {
          destination = source.cloneNode(true);
      } else {
        var emptyObject = Object.create(Object.getPrototypeOf(source));
        return copy(source, emptyObject, stackSource, stackDest);
      }

      if (stackDest) {
        stackSource.push(source);
        stackDest.push(destination);
      }
    }
  } else {
    if (source === destination) throw new Error("cpi: Can't copy! Source and destination are identical.");

    stackSource = stackSource || [];
    stackDest = stackDest || [];

    if (isa.object(source)) {
      stackSource.push(source);
      stackDest.push(destination);
    }

    var result, key;
    if (isa.array(source)) {
      destination.length = 0;
      for (var i = 0; i < source.length; i++) {
        destination.push(copy(source[i], null, stackSource, stackDest));
      }
    } else {
      var h = destination._hashKey;
      if (isa.array(destination)) {
        destination.length = 0;
      } else {
        forEach(destination, function(value, key) {
          delete destination[key];
        });
      }
      if (isa.blankObject(source)) {
        // createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
        for (key in source) {
          destination[key] = copy(source[key], null, stackSource, stackDest);
        }
      } else if (source && typeof source.hasOwnProperty === 'function') {
        // Slow path, which must rely on hasOwnProperty
        for (key in source) {
          if (source.hasOwnProperty(key)) {
            destination[key] = copy(source[key], null, stackSource, stackDest);
          }
        }
      } else {
        // Slowest path --- hasOwnProperty can't be called as a method
        for (key in source) {
          if (Object.hasOwnProperty.call(source, key)) {
            destination[key] = copy(source[key], null, stackSource, stackDest);
          }
        }
      }
      setHashKey(destination,h);
    }
  }
  return destination;
}