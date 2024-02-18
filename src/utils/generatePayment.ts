export function GenerateBill(netReadingM3: string) {
  const currentWaterCharges = parseFloat(netReadingM3) * 13.86;
  const swerageCharges = currentWaterCharges * 0.3;
  const totalPayable = Math.round(currentWaterCharges + swerageCharges);

  return { currentWaterCharges, swerageCharges, totalPayable };
}
