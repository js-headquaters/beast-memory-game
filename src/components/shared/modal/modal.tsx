import type { ComponentChildren } from "preact";
import "./modal.css";

type Props = {
  title: string;
  className?: string;
  children: ComponentChildren;
  onTitleClick?: () => void;
};

// TODO: <ДушнилаМод>is that okay name for the component? It is not a modal, it is a page or state or something
// https://en.wikipedia.org/wiki/Modal_window
// </ДушнилаМод>
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
