import type { ComponentChildren } from "preact";
import "./modal.css";

type Props = {
  title: string;
  className?: string;
  children: ComponentChildren;
  onTitleClick?: () => void;
};

export function ModalComponent({
  title,
  children,
  className,
  onTitleClick,
}: Props) {
  const classString = className ? `modal ${className}` : "modal";
  return (
    <div class={classString}>
      <div class="modal__title" onClick={onTitleClick}>
        {title}
      </div>
      <div class="modal__content">{children}</div>
    </div>
  );
}
