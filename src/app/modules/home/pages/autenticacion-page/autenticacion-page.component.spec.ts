import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionPageComponent } from './autenticacion-page.component';

describe('AutenticacionPageComponent', () => {
  let component: AutenticacionPageComponent;
  let fixture: ComponentFixture<AutenticacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticacionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
