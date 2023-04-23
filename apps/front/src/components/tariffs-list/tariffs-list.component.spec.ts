import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffsListComponent } from './tariffs-list.component';

describe('TariffsListComponent', () => {
  let component: TariffsListComponent;
  let fixture: ComponentFixture<TariffsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
