import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import {
  TariffType,
  AnnualTariffType,
} from '@electricity-tariffs/electricity-tariffs-types';
import { calculateTariffAnnualCost } from '@electricity-tariffs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getTariffs(): Promise<TariffType[]> {
    const tariffs = await lastValueFrom(
      this.httpService.get(process.env.ELECTRICITY_TARIFFS_API)
    );
    return Array.isArray(tariffs?.data) ? tariffs.data : [];
  }

  async getAnnualTariffs(
    annualConsumption: number
  ): Promise<AnnualTariffType[]> {
    const tariffs = await this.getTariffs();
    return tariffs.map((tariff) => {
      const annualCost = calculateTariffAnnualCost(tariff, annualConsumption);
      return {
        name: tariff.name,
        annualCost,
      };
    });
  }
}
