import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetailPageComponent } from './curso-detail-page.component';

describe('CursoDetailPageComponent', () => {
  let component: CursoDetailPageComponent;
  let fixture: ComponentFixture<CursoDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
