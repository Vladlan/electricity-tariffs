import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { APP_TITLE } from '../../constants';
import { TariffsListComponent } from '../../components/tariffs-list/tariffs-list.component';
import { AnnualTariffType } from '@electricity-tariffs/electricity-tariffs-types';
import { Observable, catchError, finalize, map, of } from 'rxjs';
import { ElectricityTariffsService } from '../../services/electricity-tariffs.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    SearchComponent,
    TariffsListComponent,
  ],
  providers: [ElectricityTariffsService],
  selector: 'electricity-tariffs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  appTitle = APP_TITLE;
  annualTariffs$: Observable<AnnualTariffType[] | null> | null = null;
  fetchingTariffs = false;

  constructor(public electricityTariffsService: ElectricityTariffsService) {}

  fetchElectricityTariffs(yearConsumption: number) {
    this.fetchingTariffs = true;
    this.annualTariffs$ = this.electricityTariffsService
      .getElectricityTariffsByConsumption(yearConsumption)
      .pipe(
        catchError(() => of(null)),
        finalize(() => (this.fetchingTariffs = false))
      );
  }

  clearFormAndResults() {
    this.annualTariffs$ = null;
  }
}
