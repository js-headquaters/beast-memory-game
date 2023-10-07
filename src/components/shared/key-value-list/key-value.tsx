import { Fragment } from "preact/jsx-runtime";
import './key-value.css';

type Props = {
  name: string;
  value: string | number;
};

export function KeyValueComponent({ name, value }: Props) {
  return (
    <Fragment>
      <div class="name">{name}</div>
      <div class="value">{value ? value : "N/A"}</div>
    </Fragment>
  );
}
