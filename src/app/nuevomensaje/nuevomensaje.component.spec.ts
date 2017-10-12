import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevomensajeComponent } from './nuevomensaje.component';

describe('NuevomensajeComponent', () => {
  let component: NuevomensajeComponent;
  let fixture: ComponentFixture<NuevomensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevomensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevomensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
