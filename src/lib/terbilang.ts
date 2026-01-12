const satuan = ['', 'SATU', 'DUA', 'TIGA', 'EMPAT', 'LIMA', 'ENAM', 'TUJUH', 'DELAPAN', 'SEMBILAN', 'SEPULUH', 'SEBELAS'];

function terbilangHelper(n: number): string {
  if (n < 12) {
    return satuan[n];
  } else if (n < 20) {
    return satuan[n - 10] + ' BELAS';
  } else if (n < 100) {
    return satuan[Math.floor(n / 10)] + ' PULUH ' + satuan[n % 10];
  } else if (n < 200) {
    return 'SERATUS ' + terbilangHelper(n - 100);
  } else if (n < 1000) {
    return satuan[Math.floor(n / 100)] + ' RATUS ' + terbilangHelper(n % 100);
  } else if (n < 2000) {
    return 'SERIBU ' + terbilangHelper(n - 1000);
  } else if (n < 1000000) {
    return terbilangHelper(Math.floor(n / 1000)) + ' RIBU ' + terbilangHelper(n % 1000);
  } else if (n < 1000000000) {
    return terbilangHelper(Math.floor(n / 1000000)) + ' JUTA ' + terbilangHelper(n % 1000000);
  } else if (n < 1000000000000) {
    return terbilangHelper(Math.floor(n / 1000000000)) + ' MILIAR ' + terbilangHelper(n % 1000000000);
  } else if (n < 1000000000000000) {
    return terbilangHelper(Math.floor(n / 1000000000000)) + ' TRILIUN ' + terbilangHelper(n % 1000000000000);
  }
  return '';
}

export function terbilang(n: number): string {
  if (n === 0) return 'NOL RUPIAH';
  const result = terbilangHelper(n).replace(/\s+/g, ' ').trim();
  return result + ' RUPIAH';
}
