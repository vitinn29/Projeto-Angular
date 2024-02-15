import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueCamisasComponent } from './estoque-camisas.component';

describe('EstoqueCamisasComponent', () => {
  let component: EstoqueCamisasComponent;
  let fixture: ComponentFixture<EstoqueCamisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueCamisasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoqueCamisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
