import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflowY = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflowY = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={handleBackDropClick}
      className={css.backdrop}
      role='dialog'
      aria-modal='true'
    >
      <div className={css.modal}>
        <h2>Modal Title</h2>
        <p>This is some content inside modal...</p>
        <button
          onClick={onClose}
          className={css.closeButton}
          aria-label='Close modal'
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
}
