import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoesDetalheComponent } from './dragoes-detalhe.component';

describe('DragoesDetalheComponent', () => {
  let component: DragoesDetalheComponent;
  let fixture: ComponentFixture<DragoesDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragoesDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
