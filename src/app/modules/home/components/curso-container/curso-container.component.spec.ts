import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoContainerComponent } from './curso-container.component';

describe('CursoContainerComponent', () => {
  let component: CursoContainerComponent;
  let fixture: ComponentFixture<CursoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
