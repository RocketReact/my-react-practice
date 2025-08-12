import css from './ModalChildrenUses.module.css';
import { createPortal } from 'react-dom';
import React from 'react';

interface ModalProps {
  onClose?: () => void;
  // Додаємо пропс children і типізуємо його
  children?: React.ReactNode;
}

export default function ModalChildrenUses({ children }: ModalProps) {
  /* Решта коду */
  return createPortal(
    <div className={css.backdrop} role='dialog' aria-modal='true'>
      <div className={css.modal}>
        <button className={css.closeButton} aria-label='Close modal'>
          &times;
        </button>
        {/* Тут рендериться переданий вміст із пропса children */}
        {children}
      </div>
    </div>,
    document.body
  );
}
