import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalgoTableComponent } from './zalgo-table.component';

describe('ZalgoTableComponent', () => {
  let component: ZalgoTableComponent;
  let fixture: ComponentFixture<ZalgoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalgoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
