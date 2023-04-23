import { calculateTariffAnnualCost } from './calculate-tariff-annual-cost';

describe('calculateTariffAnnualCost', () => {
  it('basic calculation 3500', () => {
    expect(calculateTariffAnnualCost({
      name: 'Product A',
      type: 1,
      baseCost: 5,
      additionalKwhCost: 22,
    }, 3500)).toEqual(830);
  });
  it('basic calculation 4500', () => {
    expect(calculateTariffAnnualCost({
      name: 'Product A',
      type: 1,
      baseCost: 5,
      additionalKwhCost: 22,
    }, 4500)).toEqual(1050);
  });
  it('package calculation 3500', () => {
    expect(calculateTariffAnnualCost({
      name: 'Product B',
      type: 2,
      baseCost: 800,
      additionalKwhCost: 30,
      includedKwh: 4000,
    }, 3500)).toEqual(800);
  });
  it('package calculation 4500', () => {
    expect(calculateTariffAnnualCost({
      name: 'Product B',
      type: 2,
      baseCost: 800,
      additionalKwhCost: 30,
      includedKwh: 4000,
    }, 4500)).toEqual(950);
  });
});
