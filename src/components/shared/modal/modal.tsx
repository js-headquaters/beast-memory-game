import type { ComponentChildren } from "preact";
import "./modal.css";

type Props = {
  title: string;
  className?: string;
  children: ComponentChildren;
};

export function ModalComponent({ title, children, className }: Props) {
  const classString = className ? `modal ${className}` : "modal";
  return (
    <div class={classString}>
      <div class="modal__title">{title}</div>
      <div class="modal__content">{children}</div>
    </div>
  );
}
