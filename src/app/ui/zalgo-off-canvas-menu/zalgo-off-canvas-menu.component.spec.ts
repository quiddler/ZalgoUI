import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalgoOffCanvasMenuComponent } from './zalgo-off-canvas-menu.component';

describe('ZalgoOffCanvasMenuComponent', () => {
  let component: ZalgoOffCanvasMenuComponent;
  let fixture: ComponentFixture<ZalgoOffCanvasMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalgoOffCanvasMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoOffCanvasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
