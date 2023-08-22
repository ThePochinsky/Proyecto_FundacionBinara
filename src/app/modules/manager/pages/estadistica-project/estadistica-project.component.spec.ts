import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaProjectComponent } from './estadistica-project.component';

describe('EstadisticaProjectComponent', () => {
  let component: EstadisticaProjectComponent;
  let fixture: ComponentFixture<EstadisticaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
