import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioMaritimoComponent } from './envio-maritimo.component';

describe('EnvioMaritimoComponent', () => {
  let component: EnvioMaritimoComponent;
  let fixture: ComponentFixture<EnvioMaritimoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvioMaritimoComponent]
    });
    fixture = TestBed.createComponent(EnvioMaritimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
