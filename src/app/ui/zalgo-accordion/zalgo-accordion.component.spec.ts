import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalgoAccordionComponent } from './zalgo-accordion.component';

describe('ZalgoAccordionComponent', () => {
  let component: ZalgoAccordionComponent;
  let fixture: ComponentFixture<ZalgoAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalgoAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
