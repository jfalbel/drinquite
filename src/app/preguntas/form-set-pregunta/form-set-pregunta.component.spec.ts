import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSetPreguntaComponent } from './form-set-pregunta.component';

describe('FormSetPreguntaComponent', () => {
  let component: FormSetPreguntaComponent;
  let fixture: ComponentFixture<FormSetPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSetPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSetPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
