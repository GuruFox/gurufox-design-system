import React from 'react';
import styled, { css } from 'styled-components';
import { colors, spacing, borderRadius, shadows, transitions } from '../../../tokens';

const variantStyles = {
  default: css`background: ${colors.neutral[800]}; border: 1px solid ${colors.neutral[700]};`,
  elevated: css`background: ${colors.neutral[800]}; border: 1px solid ${colors.neutral[700]}; box-shadow: ${shadows.md};`,
  outlined: css`background: transparent; border: 1px solid ${colors.neutral[700]};`,
  interactive: css`background: ${colors.neutral[800]}; border: 1px solid ${colors.neutral[700]}; cursor: pointer; transition: all ${transitions.base}; &:hover { border-color: ${colors.brand.primary}; box-shadow: ${shadows.glow}; transform: translateY(-2px); } &:active { transform: translateY(0); }`,
};

const StyledCard = styled.div`border-radius: ${borderRadius.lg}; overflow: hidden; ${({ $variant }) => variantStyles[$variant] || variantStyles.default}`;
const CardHeader = styled.div`padding: ${spacing[4]} ${spacing[6]}; border-bottom: 1px solid ${colors.neutral[700]}; display: flex; align-items: center; justify-content: space-between; gap: ${spacing[4]};`;
const CardBody = styled.div`padding: ${spacing[6]};`;
const CardFooter = styled.div`padding: ${spacing[4]} ${spacing[6]}; border-top: 1px solid ${colors.neutral[700]}; display: flex; align-items: center; justify-content: flex-end; gap: ${spacing[3]};`;

const Card = ({ children, variant = 'default', onClick, ...props }) => (
  <StyledCard $variant={variant} onClick={onClick} {...props}>{children}</StyledCard>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
