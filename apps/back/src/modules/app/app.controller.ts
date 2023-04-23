import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AnnualTariffsQP } from '../../query-params';

@ApiTags('Electricity Tariffs')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('annual-tariffs')
  @ApiQuery({ name: 'annualConsumption', type: Number })
  getAnnualTariffs(@Query() { annualConsumption }: AnnualTariffsQP) {
    return this.appService.getAnnualTariffs(annualConsumption);
  }
}
