import { TariffType } from '@electricity-tariffs/electricity-tariffs-types';

export const calculateTariffAnnualCost = (
  tariff: TariffType,
  annualC: number
): number => {
  if (tariff.includedKwh && annualC <= tariff.includedKwh) return tariff.baseCost;
  if (tariff.includedKwh && annualC > tariff.includedKwh) {
    const additionalConsumption = annualC - tariff.includedKwh;
    return tariff.baseCost + (additionalConsumption * tariff.additionalKwhCost / 100);
  }

  return (tariff.baseCost * 12) + (annualC * tariff.additionalKwhCost / 100);
};
