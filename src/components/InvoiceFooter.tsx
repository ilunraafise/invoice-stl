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
  date,
  signerName,
  onCityChange,
  onDateChange,
  onSignerNameChange,
}: InvoiceFooterProps) {
  return (
    <div className="flex justify-end">
      <div className="text-center">
        <div className="flex items-center gap-2 mb-8">
          <input
            type="text"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            placeholder="Depok"
            className="border-b border-dashed border-muted focus:border-primary outline-none bg-transparent py-1 text-sm w-20 text-center print:border-transparent"
          />
          <span>,</span>
          <input
            type="text"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            placeholder="02 Januari 2026"
            className="border-b border-dashed border-muted focus:border-primary outline-none bg-transparent py-1 text-sm w-36 text-center print:border-transparent"
          />
        </div>
        <p className="text-sm text-muted-foreground mb-16">Hormat kami,</p>
        <div className="border-b-2 border-foreground w-40 mx-auto"></div>
        <input
          type="text"
          value={signerName}
          onChange={(e) => onSignerNameChange(e.target.value)}
          placeholder="SRIYATUN"
          className="mt-2 border-b border-dashed border-muted focus:border-primary outline-none bg-transparent py-1 text-sm font-bold text-center w-40 print:border-transparent"
        />
      </div>
    </div>
  );
}
