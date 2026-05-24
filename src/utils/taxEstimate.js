/** Simplified FY 2024-25 new regime estimate (illustrative only) */
export function estimateTax(annualIncome, regime = 'new') {
  const income = Math.max(0, Number(annualIncome) || 0)
  if (income === 0) return { tax: 0, effectiveRate: 0, slab: '—' }

  if (regime === 'old') {
    let taxable = Math.max(0, income - 50000) // standard deduction approx
    let tax = 0
    const slabs = [
      [250000, 0],
      [500000, 0.05],
      [1000000, 0.2],
      [Infinity, 0.3],
    ]
    let prev = 0
    for (const [limit, rate] of slabs) {
      const chunk = Math.min(taxable, limit - prev) - Math.max(0, prev - taxable)
      if (taxable > prev) tax += Math.min(taxable - prev, limit - prev) * rate
      prev = limit
      if (taxable <= limit) break
    }
    tax *= 1.04 // cess approx
    return {
      tax: Math.round(tax),
      effectiveRate: income ? ((tax / income) * 100).toFixed(1) : 0,
      slab: 'Old Regime',
    }
  }

  // New regime FY 24-25 simplified slabs
  let tax = 0
  const remaining = income
  const brackets = [
    [300000, 0],
    [700000, 0.05],
    [1000000, 0.1],
    [1200000, 0.15],
    [1500000, 0.2],
    [Infinity, 0.3],
  ]
  let prev = 0
  for (const [limit, rate] of brackets) {
    if (remaining > prev) {
      tax += (Math.min(remaining, limit) - prev) * rate
    }
    prev = limit
  }
  tax *= 1.04

  return {
    tax: Math.round(tax),
    effectiveRate: income ? ((tax / income) * 100).toFixed(1) : 0,
    slab: 'New Regime',
  }
}
