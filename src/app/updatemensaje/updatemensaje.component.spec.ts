import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemensajeComponent } from './updatemensaje.component';

describe('UpdatemensajeComponent', () => {
  let component: UpdatemensajeComponent;
  let fixture: ComponentFixture<UpdatemensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
