export class Isa {

    public undefined(value) {
      return typeof value === 'undefined';
    }
    public defined(value) {
      return typeof value !== 'undefined';
    }
    public object(value) { 
      return value !== null && typeof value === 'object'; 
    }
    public blankObject(value) { 
      return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value);
    }
    public string(value) {
      return typeof value === 'string';
    }
    public number(value) {
      return typeof value === 'number';
    }
    public date(value) { 
      return toString.call(value) === '[object Date]'; 
    }
    public array = Array.isArray;
    public function(value) {
      return typeof value === 'function';
    }
    public regExp(value) { 
      return toString.call(value) === '[object RegExp]'; 
    }
    public window(obj) { 
      return obj && obj.window === obj; 
    }
    public file(obj) { 
      return toString.call(obj) === '[object File]'; 
    }
    public formData(obj) { 
      return toString.call(obj) === '[object FormData]'; 
    }
    public blob(obj) { 
      return toString.call(obj) === '[object Blob]'; 
    }
    public boolean(value) { 
      return typeof value === 'boolean'; 
    }
    public promiseLike(obj) { 
      return obj && this.function(obj.then); 
    }

    private TYPED_ARRAY_REGEXP = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/;
    typedArray(value) {
      return this.TYPED_ARRAY_REGEXP.test(toString.call(value));
    }

    public arrayLike(obj) {
      if (obj == null || this.window(obj)) {
        return false;
      }

      // Support: iOS 8.2 (not reproducible in simulator)
      // "length" in obj used to prevent JIT error (gh-11508)
      var length = "length" in Object(obj) && obj.length;

      if (obj.nodeType === 1 && length) {
        return true;
      }

      return this.string(obj) || this.array(obj) || length === 0 ||
             typeof length === 'number' && length > 0 && (length - 1) in obj;
    }
}