import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoProfesoresComponent } from './dialogo-profesores.component';

describe('DialogoProfesoresComponent', () => {
  let component: DialogoProfesoresComponent;
  let fixture: ComponentFixture<DialogoProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
