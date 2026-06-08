import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, typography, spacing, borderRadius } from '../../../tokens';

const variantStyles = {
  success: { background: colors.success.light, border: colors.success.base, color: colors.success.text, icon: '✓' },
  warning: { background: colors.warning.light, border: colors.warning.base, color: colors.warning.text, icon: '⚠' },
  error: { background: colors.error.light, border: colors.error.base, color: colors.error.text, icon: '✕' },
  info: { background: colors.info.light, border: colors.info.base, color: colors.info.text, icon: 'ℹ' },
};

const StyledAlert = styled.div`
  display: flex; align-items: flex-start; gap: ${spacing[3]}; padding: ${spacing[4]};
  border-radius: ${borderRadius.base};
  border: 1px solid ${({ $variant }) => variantStyles[$variant]?.border};
  background: ${({ $variant }) => variantStyles[$variant]?.background};
  color: ${({ $variant }) => variantStyles[$variant]?.color};
`;

const IconWrapper = styled.span`font-size: ${typography.fontSize.base}; flex-shrink: 0; margin-top: 1px;`;
const Content = styled.div`flex: 1; display: flex; flex-direction: column; gap: ${spacing[1]};`;
const Title = styled.p`font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.sm}; font-weight: ${typography.fontWeight.semibold}; margin: 0;`;
const Description = styled.p`font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.sm}; opacity: 0.8; margin: 0;`;
const CloseButton = styled.button`background: none; border: none; cursor: pointer; color: inherit; opacity: 0.6; padding: 0; font-size: ${typography.fontSize.base}; flex-shrink: 0; &:hover { opacity: 1; }`;

const Alert = ({ variant = 'info', title, description, dismissible = false, onDismiss, ...props }) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  const handleDismiss = () => { setVisible(false); onDismiss?.(); };
  return (
    <StyledAlert $variant={variant} {...props}>
      <IconWrapper>{variantStyles[variant]?.icon}</IconWrapper>
      <Content>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Content>
      {dismissible && <CloseButton onClick={handleDismiss} aria-label="Dismiss">✕</CloseButton>}
    </StyledAlert>
  );
};

export default Alert;
