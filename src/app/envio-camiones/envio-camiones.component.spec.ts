import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioCamionesComponent } from './envio-camiones.component';

describe('EnvioCamionesComponent', () => {
  let component: EnvioCamionesComponent;
  let fixture: ComponentFixture<EnvioCamionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvioCamionesComponent]
    });
    fixture = TestBed.createComponent(EnvioCamionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
