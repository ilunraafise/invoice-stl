interface InvoiceHeaderProps {
  invoiceNumber: string;
  onInvoiceNumberChange: (value: string) => void;
}

export function InvoiceHeader({ invoiceNumber, onInvoiceNumberChange }: InvoiceHeaderProps) {
  return (
    <div className="border-b-4 border-primary m-0 p-0">
      {/* Header Image */}
      <img
        src="/header-invoice.png"
        alt="Invoice Header"
        className="w-full object-contain block m-0 p-0"
      />

      {/* Invoice Number */}
      <div className="flex items-center gap-3 mt-1 mb-2">
        <h2 className="text-4xl font-extrabold text-gray-300 tracking-wider leading-none">
          INVOICE
        </h2>

        <input
          type="text"
          value={invoiceNumber}
          onChange={(e) => onInvoiceNumberChange(e.target.value)}
          className="text-base font-semibold text-primary border-b-2 border-dashed outline-none bg-transparent py-0 px-2 w-56 leading-none"
        />
      </div>
    </div>
  );
}
