import { Plus, Trash2 } from 'lucide-react';
import { formatRupiah } from '@/lib/formatRupiah';

export interface InvoiceItem {
  id: string;
  platNumber: string;
  gudang: string;
  ptTujuan: string;
  suratJalan: string;
  satuan: number;
  harga: number;
}

interface InvoiceTableProps {
  items: InvoiceItem[];
  onItemChange: (id: string, field: keyof InvoiceItem, value: string | number) => void;
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
}

export function InvoiceTable({
  items,
  onItemChange,
  onAddItem,
  onRemoveItem,
}: InvoiceTableProps) {
  const total = items.reduce((sum, item) => sum + item.harga, 0);

  return (
    <div className="mb-4">
      <table className="w-full border-collapse text-[11px] leading-[11px]">

        {/* HEADER */}
        <thead>
          <tr className="bg-[#e8ecf2] font-semibold">
            <th className="border px-1 py-[2px] w-8 text-center">No</th>
            <th className="border px-1 py-[2px] text-center">Uraian</th>
            <th className="border px-1 py-[2px] w-28 text-center">Satuan</th>
            <th className="border px-1 py-[2px] w-28 text-center">Harga</th>
            <th className="border w-8 no-print"></th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>

              {/* NO */}
              <td className="border px-1 py-[2px] text-center">
                {index + 1}
              </td>

              {/* URAIAN */}
              <td className="border px-1 py-[2px] align-top">
                <div className="flex flex-col gap-[1px] leading-[10px]">

                  <input
                    className="input-invoice w-24 h-[14px]"
                    value={item.platNumber}
                    onChange={(e) =>
                      onItemChange(item.id, 'platNumber', e.target.value)
                    }
                  />

                  <div className="flex items-center gap-[2px]">
                    <input
                      className="input-invoice h-[14px] min-w-[32px] max-w-[70px]"
                      value={item.gudang}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (!val.startsWith('GD ')) {
                          val = 'GD ' + val.replace(/^GD\s*/i, '');
                        }
                        onItemChange(item.id, 'gudang', val);
                      }}
                    />
                    <span className="text-[10px]">–</span>
                    <input
                      className="input-invoice h-[14px] flex-1"
                      value={item.ptTujuan}
                      onChange={(e) =>
                        onItemChange(item.id, 'ptTujuan', e.target.value)
                      }
                    />
                  </div>

                  <input
                    className="input-invoice h-[14px] w-full"
                    value={item.suratJalan}
                    onChange={(e) => {
                      let val = e.target.value.replace(/[()]/g, '');
                      val = val ? `(${val})` : '';
                      onItemChange(item.id, 'suratJalan', val);
                    }}
                  />
                </div>
              </td>

              {/* SATUAN */}
              <td className="border px-1 py-[2px] align-middle text-center">
                <input
                  className="input-invoice h-[14px] w-full text-center"
                  value={item.satuan ? formatRupiah(item.satuan) : ''}
                  onChange={(e) => {
                    const number =
                      parseInt(e.target.value.replace(/[^\d]/g, '')) || 0;
                    onItemChange(item.id, 'satuan', number);
                    onItemChange(item.id, 'harga', number);
                  }}
                />
              </td>

              {/* HARGA */}
              <td className="border px-1 py-[2px] align-middle text-center">
                <div className="input-invoice h-[14px] w-full text-center pointer-events-none">
                  {formatRupiah(item.harga)}
                </div>
              </td>

              {/* ACTION */}
              <td className="border px-1 py-[2px] text-center no-print">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-0.5 text-destructive"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </td>

            </tr>
          ))}
        </tbody>

        {/* FOOTER */}
        <tfoot>
          <tr className="no-print">
            <td colSpan={4} className="px-1 py-1">
              <button
                onClick={onAddItem}
                className="flex items-center gap-1 text-[11px] text-primary"
              >
                <Plus className="w-3 h-3" />
                Tambah Baris
              </button>
            </td>
            <td />
          </tr>

          <tr>
            <td colSpan={3}></td>
            <td className="border px-1 py-[2px] font-bold text-center">
              {formatRupiah(total)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
