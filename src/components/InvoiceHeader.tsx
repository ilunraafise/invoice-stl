interface InvoiceHeaderProps {
  invoiceNumber: string;
  onInvoiceNumberChange: (value: string) => void;
}

export function InvoiceHeader({ invoiceNumber, onInvoiceNumberChange }: InvoiceHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-8 pb-6 border-b-4 border-primary">
      {/* Left side - Company Info */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xl">STL</span>
        </div>
        <div>
          <h1 className="text-xl font-bold text-primary tracking-wide">
            SAHABAT TRANS LOGISTIK
          </h1>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            Jalan Kramat Benda Raya RT. 06/028,<br />
            Sugutamu, Bhaktijaya, Sukmajaya Depok
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Tlp. 082311607603
          </p>
        </div>
      </div>

      {/* Right side - Invoice Title */}
      <div className="text-right">
        <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg mb-2">
          <h2 className="text-2xl font-bold tracking-widest">INVOICE</h2>
        </div>
        <input
          type="text"
          value={invoiceNumber}
          onChange={(e) => onInvoiceNumberChange(e.target.value)}
          placeholder="027/STL/I/2026"
          className="text-right text-sm font-medium text-primary border-b-2 border-dashed border-muted focus:border-primary outline-none bg-transparent py-1 px-2 w-48 no-print:border-muted print:border-transparent"
        />
      </div>
    </div>
  );
}
