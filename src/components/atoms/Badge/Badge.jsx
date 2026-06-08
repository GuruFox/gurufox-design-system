import React from 'react';
import styled from 'styled-components';
import { colors, typography, spacing, borderRadius } from '../../../tokens';

const variantStyles = {
  default: { background: colors.neutral[700], color: colors.neutral[200] },
  success: { background: colors.success.light, color: colors.success.text },
  warning: { background: colors.warning.light, color: colors.warning.text },
  error: { background: colors.error.light, color: colors.error.text },
  info: { background: colors.info.light, color: colors.info.text },
};

const StyledBadge = styled.span`
  display: inline-flex; align-items: center; gap: ${spacing[1]};
  padding: ${({ $size }) => $size === 'sm' ? `2px ${spacing[2]}` : `${spacing[1]} ${spacing[2]}`};
  font-family: ${typography.fontFamily.sans};
  font-size: ${({ $size }) => $size === 'sm' ? typography.fontSize.xs : typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium}; border-radius: ${borderRadius.full};
  background: ${({ $variant }) => variantStyles[$variant]?.background || variantStyles.default.background};
  color: ${({ $variant }) => variantStyles[$variant]?.color || variantStyles.default.color};
  white-space: nowrap;
`;

const Dot = styled.span`width: 6px; height: 6px; border-radius: 50%; background: currentColor;`;

const Badge = ({ children, variant = 'default', size = 'md', showDot = false, ...props }) => (
  <StyledBadge $variant={variant} $size={size} {...props}>
    {showDot && <Dot />}{children}
  </StyledBadge>
);

export default Badge;
