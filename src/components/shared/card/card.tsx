import type { ComponentChildren } from "preact";
import "./card.css";

type Props = {
  title: string;
  children: ComponentChildren;
};

export function CardComponent({ title, children }: Props) {
  return (
    <div class="card">
      <div class="card__title">{title}</div>
      <div class="card__content">{children}</div>
    </div>
  );
}
