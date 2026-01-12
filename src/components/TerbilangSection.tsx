import { terbilang } from '@/lib/terbilang';

interface TerbilangSectionProps {
  total: number;
}

export function TerbilangSection({ total }: TerbilangSectionProps) {
  return (
    <div className="mb-8 p-4 bg-muted/50 rounded-lg border border-border">
      <p className="text-sm">
        <span className="font-medium text-muted-foreground">Terbilang: </span>
        <span className="font-semibold text-foreground italic">{terbilang(total)}</span>
      </p>
    </div>
  );
}
