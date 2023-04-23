import { Type } from "class-transformer";
import { IsInt, Min, IsNotEmpty } from "class-validator";

export class AnnualTariffsQP {
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  @Type(() => Number)
  annualConsumption: number;
}
