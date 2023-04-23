import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AnnualTariffType } from '@electricity-tariffs/electricity-tariffs-types';
import { Observable } from 'rxjs';
import { ANNUAL_TARIFFS_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ElectricityTariffsService {
  constructor(private httpService: HttpClient) {}

  getElectricityTariffsByConsumption(
    annualConsumption: number
  ): Observable<AnnualTariffType[] | null> {
    return this.httpService
      .get<AnnualTariffType[] | null>(ANNUAL_TARIFFS_URL(annualConsumption));
  }
}
