import type { ComponentChildren } from "preact";
import "./key-value-list.css";

type Props = {
  children: ComponentChildren;
};

export function KeyValueListComponent({ children }: Props) {
  return <div class="key-value-list">{children}</div>;
}
