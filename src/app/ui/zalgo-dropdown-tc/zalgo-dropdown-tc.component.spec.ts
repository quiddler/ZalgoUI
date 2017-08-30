import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalgoDropdownTcComponent } from './zalgo-dropdown-tc.component';

describe('ZalgoDropdownTcComponent', () => {
  let component: ZalgoDropdownTcComponent;
  let fixture: ComponentFixture<ZalgoDropdownTcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalgoDropdownTcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoDropdownTcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
