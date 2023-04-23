import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AnnualTariffsQP } from '../../query-params';
import { CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('Electricity Tariffs')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(CacheInterceptor)
  @Get('annual-tariffs')
  @ApiQuery({ name: 'annualConsumption', type: Number })
  getAnnualTariffs(@Query() { annualConsumption }: AnnualTariffsQP) {
    return this.appService.getAnnualTariffs(annualConsumption);
  }
}
