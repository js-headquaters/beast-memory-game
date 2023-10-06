import "./value-selector.css";

type Props = {
  value: string | number;
  className?: string;
  decrease: () => void;
  increase: () => void;
};

export function ValueSelectorComponent({
  className,
  value,
  increase,
  decrease,
}: Props) {
  const classString = className
    ? `value-selector ${className}`
    : "value-selector";

  return (
    <div class={classString}>
      <button className="value-selector__button" onClick={decrease}>
        -
      </button>
      <span>{value}</span>
      <button className="value-selector__button" onClick={increase}>
        +
      </button>
    </div>
  );
}
