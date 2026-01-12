import { Plus, Trash2 } from 'lucide-react';
import { formatRupiah } from '@/lib/formatRupiah';

export interface InvoiceItem {
  id: string;
  platNumber: string;
  gudang: string;
  ptTujuan: string;
  suratJalan: string;
  satuan: number;   // harga satuan
  harga: number;    // total = satuan * qty
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
      <table className="w-full border-collapse text-[13px]">

        {/* HEADER */}
        <thead>
          <tr className="bg-[#e8ecf2] font-semibold">
            <th className="border p-2 w-10 text-center">No.</th>
            <th className="border p-2 text-left">Uraian</th>
            <th className="border p-2 w-32 text-center">Satuan</th>
            <th className="border p-2 w-32 text-center">Harga</th>
            <th className="border w-10 no-print"></th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">{index + 1}</td>

              {/* URAIAN */}
              {/* URAIAN */}
              <td className="border p-1 align-top">
                <div className="leading-[11px] flex flex-col gap-[1px]">

                  {/* BARIS 1 — PLAT */}
                  <input
                    className="input-invoice w-24"
                    value={item.platNumber}
                    onChange={(e) =>
                      onItemChange(item.id, "platNumber", e.target.value)
                    }
                  />

                  {/* BARIS 2 — GD + PT */}
                  <div className="flex items-center gap-[2px]">
                    <input
                      className="input-invoice flex-grow min-w-[28px] max-w-[80px]"
                      value={item.gudang}
                      onChange={(e) => {
                        let val = e.target.value;

                        // pastikan selalu diawali "GD "
                        if (!val.startsWith("GD ")) {
                          val = "GD " + val.replace(/^GD\s*/i, "");
                        }

                        onItemChange(item.id, "gudang", val);
                      }}
                    />

                    <span className="text-[10px] leading-[11px]">–</span>
                    <input
                      className="input-invoice flex-1"
                      value={item.ptTujuan}
                      onChange={(e) =>
                        onItemChange(item.id, "ptTujuan", e.target.value)
                      }
                    />
                  </div>

                  {/* BARIS 3 — SURAT JALAN */}
                  <div className="flex items-center gap-[1px]">
                    <input
                      className="input-invoice w-350"
                      value={item.suratJalan}
                      onChange={(e) => {
                        let val = e.target.value;

                        // buang tanda kurung jika user ngetik manual
                        val = val.replace(/[()]/g, "");

                        // bungkus ulang
                        val = val ? `(${val})` : "";

                        onItemChange(item.id, "suratJalan", val);
                      }}
                    />

                  </div>

                </div>
              </td>


              {/* SATUAN */}
              <td className="border p-2 text-right">
                <input
                  className="input-invoice w-full text-right"
                  value={item.satuan ? formatRupiah(item.satuan) : ""}
                  onChange={(e) => {
                    const number = parseInt(e.target.value.replace(/[^\d]/g, "")) || 0;
                    onItemChange(item.id, "satuan", number);
                    onItemChange(item.id, "harga", number);
                  }}
                />
              </td>

              {/* HARGA */}
              <td className="border p-2 text-right font-semibold">
                {formatRupiah(item.harga)}
              </td>

              <td className="border p-2 text-center no-print">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1 text-destructive hover:bg-destructive/10 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        {/* FOOTER */}
        <tfoot>
          <tr>
            <td colSpan={4} className="p-2 no-print">
              <button
                onClick={onAddItem}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80"
              >
                <Plus className="w-4 h-4" />
                Tambah Baris
              </button>
            </td>
          </tr>

          {/* TOTAL */}
          <tr>
            <td colSpan={2} className="border p-2 text-right font-bold bg-[#e8ecf2]">
              Total
            </td>
            <td className="border p-2 text-right font-bold bg-[#e8ecf2]">
              {formatRupiah(total)}
            </td>
            <td className="border bg-[#e8ecf2]"></td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
