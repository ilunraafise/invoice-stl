import { terbilang } from '@/lib/terbilang';

interface TerbilangSectionProps {
  total: number;
}

export function TerbilangSection({ total }: TerbilangSectionProps) {
  return (
    <div className="mb-8 text-left">
      <div
        className="inline-block px-4 py-2 rounded border border-border"
        style={{
          background: "linear-gradient(90deg, #b6a6d9 0%, #c7b6e3 100%)",
        }}
      >
        <p className="leading-tight">
          <span
            style={{
              fontFamily: "Calibri, Arial",
              fontSize: "13px",
            }}
          >
            Terbilang :
          </span>{" "}
          <span
            className="font-bold italic"
            style={{
              fontFamily: "Calibri, Arial",
              fontSize: "18px",
            }}
          >
            {terbilang(total).toUpperCase()} RUPIAH
          </span>
        </p>
      </div>

      {/* Tambahan tulisan di bawah */}
      <p
        className="mt-3"
        style={{
          fontFamily: "Calibri, Arial",
          fontSize: "14px",
        }}
      >
        Transfer ke Rek BNI 2034156794 a.n. Sriyatun
      </p>
    </div>
  );
}
