import type { ComponentChildren } from "preact";
import "./block.css";

type Props = {
  title: string;
  children: ComponentChildren;
};

export function BlockComponent({ title, children }: Props) {
  return (
    <div class="block">
      <div class="block__title">{title}</div>
      <div class="block__content">{children}</div>
    </div>
  );
}
