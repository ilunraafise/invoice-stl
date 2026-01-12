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
      <div className="flex items-baseline gap-3 mt-1 mb-2">
        <h2 className="text-[40px] font-bold text-gray-300 tracking-wider leading-none">
          INVOICE
        </h2>

        <input
          type="text"
          value={invoiceNumber}
          onChange={(e) => onInvoiceNumberChange(e.target.value)}
          className="
      bg-transparent
      text-base
      font-semibold
      text-black
      italic
      outline-none
      border-none
      p-0
      w-56
      leading-none
    "
        />
      </div>

    </div>
  );
}

