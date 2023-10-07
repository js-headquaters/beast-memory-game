import type { ComponentChildren } from "preact";
import "./panel.css";

type Props = {
  title: string;
  children: ComponentChildren;
};

export function PanelComponent({ title, children }: Props) {
  return (
    <div class="panel">
      <div class="panel__title">{title}</div>
      <div class="panel__content">{children}</div>
    </div>
  );
}
