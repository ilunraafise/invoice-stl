interface InvoiceFooterProps {
  city: string;
  date: string;
  signerName: string;
  onCityChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onSignerNameChange: (value: string) => void;
}

export function InvoiceFooter({
  city,
  signerName,
  onCityChange,
  onDateChange,
  onSignerNameChange,
}: InvoiceFooterProps) {
  return (
    <div className="flex justify-end mt-20 print:mt-20"> {/* Tambah margin-top besar */}
      <div className="text-center">
        {/* Baris tanggal */}
        <div className="flex justify-center gap-2 mb-2">
          <input
            type="text"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            placeholder="Depok,"
            className="bg-transparent py-1 px-2 text-sm text-center w-20 text-black outline-none"
          />
          <input
            type="text"
            onChange={(e) => onDateChange(e.target.value)}
            placeholder="Januari 2026"
            className="bg-transparent py-1 px-2 text-sm text-center w-36 text-black outline-none"
          />
        </div>

        {/* Hormat kami */}
        <p className="text-sm font-normal mb-20 text-black">Hormat kami,</p>

        {/* Nama penanda tangan */}
        <input
          type="text"
          value={signerName}
          onChange={(e) => onSignerNameChange(e.target.value)}
          placeholder="SRIYATUN"
          className="bg-transparent py-1 text-sm font-bold text-center w-40 text-black outline-none"
        />
      </div>
    </div>
  );
}


