import React from 'react';
import styled, { css } from 'styled-components';
import { colors, typography, spacing, borderRadius, transitions, shadows } from '../../../tokens';

const sizeStyles = {
  sm: css`padding: ${spacing[2]} ${spacing[3]}; font-size: ${typography.fontSize.sm}; height: 32px;`,
  md: css`padding: ${spacing[2]} ${spacing[4]}; font-size: ${typography.fontSize.base}; height: 40px;`,
  lg: css`padding: ${spacing[3]} ${spacing[6]}; font-size: ${typography.fontSize.lg}; height: 48px;`,
};

const variantStyles = {
  primary: css`background: ${colors.brand.primary}; color: ${colors.neutral[0]}; border: 1px solid transparent; box-shadow: ${shadows.glow}; &:hover:not(:disabled) { background: ${colors.brand.primaryHover}; } &:active:not(:disabled) { background: ${colors.brand.primaryActive}; }`,
  secondary: css`background: transparent; color: ${colors.brand.primary}; border: 1px solid ${colors.brand.primary}; &:hover:not(:disabled) { background: rgba(124,92,252,0.1); }`,
  ghost: css`background: transparent; color: ${colors.neutral[300]}; border: 1px solid ${colors.neutral[700]}; &:hover:not(:disabled) { background: ${colors.neutral[800]}; color: ${colors.neutral[0]}; border-color: ${colors.neutral[600]}; }`,
  danger: css`background: ${colors.error.base}; color: ${colors.neutral[0]}; border: 1px solid transparent; &:hover:not(:disabled) { background: #DC2626; }`,
};

const StyledButton = styled.button`
  display: inline-flex; align-items: center; justify-content: center;
  gap: ${spacing[2]}; font-family: ${typography.fontFamily.sans};
  font-weight: ${typography.fontWeight.medium}; border-radius: ${borderRadius.base};
  cursor: pointer; transition: all ${transitions.base}; white-space: nowrap;
  position: relative; outline: none;
  ${({ $size }) => sizeStyles[$size] || sizeStyles.md}
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary}
  &:disabled { opacity: 0.4; cursor: not-allowed; }
  &:focus-visible { outline: 2px solid ${colors.brand.primary}; outline-offset: 2px; }
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
  ${({ $isLoading }) => $isLoading && css`color: transparent; pointer-events: none; &::after { content: ''; position: absolute; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.6s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }`}
`;

const Button = ({ children, variant = 'primary', size = 'md', disabled = false, isLoading = false, fullWidth = false, onClick, type = 'button', ...props }) => (
  <StyledButton $variant={variant} $size={size} disabled={disabled || isLoading} $isLoading={isLoading} $fullWidth={fullWidth} onClick={onClick} type={type} {...props}>
    {children}
  </StyledButton>
);

export default Button;
