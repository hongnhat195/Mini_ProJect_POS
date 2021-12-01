function formatMoney(x) {
  return x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}

export const utils = {
  formatMoney,
};
