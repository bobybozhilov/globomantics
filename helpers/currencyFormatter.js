const currencyFormatter = Intl.NumberFormat("bg-BG", {
  style: "currency",
  currency: "BGN",
  maximumFractionDigits: 2
});

export default currencyFormatter;