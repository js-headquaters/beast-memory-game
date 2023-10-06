import { Fragment } from "preact/jsx-runtime";
import "./setting.css";

type Props = {
  name: string;
  value: string | number;
  degrees: () => void;
  increase: () => void;
};

export function SettingComponent({ name, value, increase, degrees }: Props) {
  return (
    <Fragment>
      <div class="setting__name">{name}</div>
      <div class="setting__value">
        <button className="setting__button" onClick={degrees}>
          -
        </button>
        <span>{value}</span>
        <button className="setting__button" onClick={increase}>
          +
        </button>
      </div>
    </Fragment>
  );
}
