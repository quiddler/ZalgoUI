import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalgoRevealComponent } from './zalgo-reveal.component';

describe('ZalgoRevealComponent', () => {
  let component: ZalgoRevealComponent;
  let fixture: ComponentFixture<ZalgoRevealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalgoRevealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalgoRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
