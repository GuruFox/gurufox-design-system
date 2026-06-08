import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors, typography, spacing, borderRadius, shadows, zIndex, transitions } from '../../../tokens';

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); }`;

const Overlay = styled.div`
  position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; padding: ${spacing[4]};
  z-index: ${zIndex.modal}; animation: ${fadeIn} ${transitions.base} ease;
`;

const sizeStyles = {
  sm: css`max-width: 400px;`,
  md: css`max-width: 560px;`,
  lg: css`max-width: 800px;`,
  fullscreen: css`max-width: 100%; margin: ${spacing[4]};`,
};

const ModalContainer = styled.div`
  width: 100%; background: ${colors.neutral[800]}; border: 1px solid ${colors.neutral[700]};
  border-radius: ${borderRadius.xl}; box-shadow: ${shadows.lg};
  animation: ${slideUp} ${transitions.base} ease;
  ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
`;

const ModalHeader = styled.div`display: flex; align-items: center; justify-content: space-between; padding: ${spacing[5]} ${spacing[6]}; border-bottom: 1px solid ${colors.neutral[700]};`;
const ModalTitle = styled.h2`font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.lg}; font-weight: ${typography.fontWeight.semibold}; color: ${colors.neutral[50]}; margin: 0;`;
const CloseButton = styled.button`background: none; border: none; cursor: pointer; color: ${colors.neutral[400]}; font-size: ${typography.fontSize.lg}; padding: ${spacing[1]}; border-radius: ${borderRadius.base}; display: flex; align-items: center; justify-content: center; transition: all ${transitions.fast}; &:hover { color: ${colors.neutral[100]}; background: ${colors.neutral[700]}; }`;
const ModalBody = styled.div`padding: ${spacing[6]}; color: ${colors.neutral[300]}; font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.base}; line-height: ${typography.lineHeight.relaxed};`;
const ModalFooter = styled.div`display: flex; align-items: center; justify-content: flex-end; gap: ${spacing[3]}; padding: ${spacing[4]} ${spacing[6]}; border-top: 1px solid ${colors.neutral[700]};`;

const Modal = ({ isOpen, onClose, title, children, footer, size = 'md', closeOnOverlay = true, ...props }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose?.(); };
    if (isOpen) document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={closeOnOverlay ? onClose : undefined}>
      <ModalContainer $size={size} onClick={(e) => e.stopPropagation()} {...props}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal">✕</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
