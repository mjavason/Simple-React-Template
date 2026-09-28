export function formatAmount(amount: number): string {
  if (!amount) {
    return 'N/a';
  }

  if (typeof amount === 'number') {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
    }).format(amount);
  } else if (typeof amount === 'string') {
    const amountNum = parseFloat(amount);
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
    }).format(amountNum);
  } else {
    return '--';
  }
}
