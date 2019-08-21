const number = 123456.789;
console.log(
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(number)
);
// 123.456,79 €
console.log(
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR'
  }).format(number)
);
// €123,456.79
console.log(
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
);
// 123.456,79 $
console.log(
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
);
// $123,456.79
console.log(
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 5
  }).format(number)
);
// 123.460 €
console.log(
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 5
  }).format(number)
);
// 123.456,78900 €
