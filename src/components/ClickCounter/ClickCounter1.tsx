interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export default function ClickCounter1({ value, onUpdate }: ClickCounterProps) {
  return <button onClick={onUpdate}>Clicked: {value}</button>;
}
