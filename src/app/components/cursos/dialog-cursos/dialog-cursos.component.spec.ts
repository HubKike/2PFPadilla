import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCursosComponent } from './dialog-cursos.component';

describe('DialogCursosComponent', () => {
  let component: DialogCursosComponent;
  let fixture: ComponentFixture<DialogCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
