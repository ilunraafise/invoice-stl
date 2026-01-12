interface RecipientInfoProps {
  recipientName: string;
  onRecipientNameChange: (value: string) => void;
}

export function RecipientInfo({ recipientName, onRecipientNameChange }: RecipientInfoProps) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-muted-foreground mb-1">Kepada Yth</p>
      <input
        type="text"
        value={recipientName}
        onChange={(e) => onRecipientNameChange(e.target.value)}
        placeholder="PT DUNIA TRANS LOGISTIK"
        className="text-base font-bold text-foreground border-b-2 border-dashed border-muted focus:border-primary outline-none bg-transparent py-1 w-full max-w-md no-print:border-muted print:border-transparent"
      />
    </div>
  );
}
