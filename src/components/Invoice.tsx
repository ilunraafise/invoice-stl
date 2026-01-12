import { useState } from 'react';
import { Printer } from 'lucide-react';
import { InvoiceHeader } from './InvoiceHeader';
import { RecipientInfo } from './RecipientInfo';
import { InvoiceTable, InvoiceItem } from './InvoiceTable';
import { TerbilangSection } from './TerbilangSection';
import { InvoiceFooter } from './InvoiceFooter';

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function Invoice() {
  const [invoiceNumber, setInvoiceNumber] = useState('027/STL/I/2026');
  const [recipientName, setRecipientName] = useState('PT DUNIA TRANS LOGISTIK');
  const [city, setCity] = useState('Depok');
  const [date, setDate] = useState('02 Januari 2026');
  const [signerName, setSignerName] = useState('SRIYATUN');
  
  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: generateId(),
      platNumber: 'B 9576 UXS',
      gudang: 'WIRA',
      ptTujuan: 'PT DAEDONG INTERNATIONAL',
      suratJalan: 'SI2512.0074',
      harga: 1250000,
    },
    {
      id: generateId(),
      platNumber: 'F 8790 KQ',
      gudang: 'PESAKA',
      ptTujuan: 'PT LESTARI BUSANA ANGGUN',
      suratJalan: 'SI2512.0062',
      harga: 950000,
    },
  ]);

  const handleItemChange = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleAddItem = () => {
    setItems(prev => [...prev, {
      id: generateId(),
      platNumber: '',
      gudang: '',
      ptTujuan: '',
      suratJalan: '',
      harga: 0,
    }]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length > 1) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const total = items.reduce((sum, item) => sum + item.harga, 0);

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Print Button */}
      <div className="max-w-4xl mx-auto mb-4 no-print">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg"
        >
          <Printer className="w-5 h-5" />
          Print Invoice
        </button>
      </div>

      {/* Invoice Container */}
      <div className="invoice-container max-w-4xl mx-auto p-10 rounded-lg bg-card">
        <InvoiceHeader 
          invoiceNumber={invoiceNumber}
          onInvoiceNumberChange={setInvoiceNumber}
        />
        
        <RecipientInfo 
          recipientName={recipientName}
          onRecipientNameChange={setRecipientName}
        />
        
        <InvoiceTable
          items={items}
          onItemChange={handleItemChange}
          onAddItem={handleAddItem}
          onRemoveItem={handleRemoveItem}
        />
        
        <TerbilangSection total={total} />
        
        <InvoiceFooter
          city={city}
          date={date}
          signerName={signerName}
          onCityChange={setCity}
          onDateChange={setDate}
          onSignerNameChange={setSignerName}
        />
      </div>
    </div>
  );
}
