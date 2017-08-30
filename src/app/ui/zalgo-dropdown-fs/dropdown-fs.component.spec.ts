import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalgoDropdownComponent } from './dropdown.component';

describe('ZalgoDropdownComponent', () => {
  let component: ZalgoDropDownClickComponent;
  let fixture: ComponentFixture<ZalgoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalgoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
