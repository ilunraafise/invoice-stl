import { Plus, Trash2 } from 'lucide-react';
import { formatRupiah } from '@/lib/formatRupiah';

export interface InvoiceItem {
  id: string;
  platNumber: string;
  gudang: string;
  ptTujuan: string;
  suratJalan: string;
  harga: number;
}

interface InvoiceTableProps {
  items: InvoiceItem[];
  onItemChange: (id: string, field: keyof InvoiceItem, value: string | number) => void;
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
}

export function InvoiceTable({ items, onItemChange, onAddItem, onRemoveItem }: InvoiceTableProps) {
  const total = items.reduce((sum, item) => sum + item.harga, 0);

  return (
    <div className="mb-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="border border-primary p-3 text-center w-12 text-sm font-semibold">No.</th>
            <th className="border border-primary p-3 text-left text-sm font-semibold">Uraian</th>
            <th className="border border-primary p-3 text-right w-40 text-sm font-semibold">Harga</th>
            <th className="border border-primary p-3 w-12 no-print"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id} className={index % 2 === 1 ? 'bg-muted/30' : 'bg-card'}>
              <td className="border border-border p-3 text-center font-medium">{index + 1}</td>
              <td className="border border-border p-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <input
                    type="text"
                    value={item.platNumber}
                    onChange={(e) => onItemChange(item.id, 'platNumber', e.target.value)}
                    placeholder="B 9576 UXS"
                    className="px-2 py-1 border border-dashed border-muted rounded text-sm bg-transparent focus:border-primary outline-none w-28 print:border-transparent"
                  />
                  <span className="text-muted-foreground">GD</span>
                  <input
                    type="text"
                    value={item.gudang}
                    onChange={(e) => onItemChange(item.id, 'gudang', e.target.value)}
                    placeholder="WIRA"
                    className="px-2 py-1 border border-dashed border-muted rounded text-sm bg-transparent focus:border-primary outline-none w-24 print:border-transparent"
                  />
                  <span className="text-muted-foreground">–</span>
                  <input
                    type="text"
                    value={item.ptTujuan}
                    onChange={(e) => onItemChange(item.id, 'ptTujuan', e.target.value)}
                    placeholder="PT DAEDONG INTERNATIONAL"
                    className="px-2 py-1 border border-dashed border-muted rounded text-sm bg-transparent focus:border-primary outline-none flex-1 min-w-32 print:border-transparent"
                  />
                  <span className="text-muted-foreground">(</span>
                  <input
                    type="text"
                    value={item.suratJalan}
                    onChange={(e) => onItemChange(item.id, 'suratJalan', e.target.value)}
                    placeholder="SI2512.0074"
                    className="px-2 py-1 border border-dashed border-muted rounded text-sm bg-transparent focus:border-primary outline-none w-28 print:border-transparent"
                  />
                  <span className="text-muted-foreground">)</span>
                </div>
              </td>
              <td className="border border-border p-2 text-right">
                <input
                  type="text"
                  value={item.harga ? formatRupiah(item.harga) : ''}
                  onChange={(e) => {
                    const numericValue = parseInt(e.target.value.replace(/[^\d]/g, ''), 10) || 0;
                    onItemChange(item.id, 'harga', numericValue);
                  }}
                  placeholder="Rp 0"
                  className="px-2 py-1 border border-dashed border-muted rounded text-sm bg-transparent focus:border-primary outline-none w-full text-right font-medium print:border-transparent"
                />
              </td>
              <td className="border border-border p-2 no-print">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1 text-destructive hover:bg-destructive/10 rounded transition-colors"
                  title="Hapus baris"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="p-2 no-print">
              <button
                onClick={onAddItem}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <Plus className="w-4 h-4" />
                Tambah Baris
              </button>
            </td>
          </tr>
          <tr className="bg-primary text-primary-foreground font-bold">
            <td colSpan={2} className="border border-primary p-3 text-right text-sm">Total:</td>
            <td className="border border-primary p-3 text-right text-lg">{formatRupiah(total)}</td>
            <td className="border border-primary no-print"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
