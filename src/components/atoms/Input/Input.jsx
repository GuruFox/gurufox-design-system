import React from 'react';
import styled, { css } from 'styled-components';
import { colors, typography, spacing, borderRadius, transitions } from '../../../tokens';

const Wrapper = styled.div`display: flex; flex-direction: column; gap: ${spacing[1]}; width: 100%;`;
const Label = styled.label`font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.sm}; font-weight: ${typography.fontWeight.medium}; color: ${colors.neutral[300]};`;
const InputWrapper = styled.div`position: relative; display: flex; align-items: center;`;

const StyledInput = styled.input`
  width: 100%; font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.base};
  color: ${colors.neutral[100]}; background: ${colors.neutral[800]}; border: 1px solid ${colors.neutral[700]};
  border-radius: ${borderRadius.base}; transition: all ${transitions.base}; outline: none;
  ${({ $size }) => $size === 'sm' && css`padding: ${spacing[2]} ${spacing[3]}; font-size: ${typography.fontSize.sm}; height: 32px;`}
  ${({ $size }) => (!$size || $size === 'md') && css`padding: ${spacing[2]} ${spacing[4]}; height: 40px;`}
  ${({ $size }) => $size === 'lg' && css`padding: ${spacing[3]} ${spacing[4]}; font-size: ${typography.fontSize.lg}; height: 48px;`}
  ${({ $hasLeftIcon }) => $hasLeftIcon && css`padding-left: ${spacing[10]};`}
  ${({ $hasRightIcon }) => $hasRightIcon && css`padding-right: ${spacing[10]};`}
  &::placeholder { color: ${colors.neutral[500]}; }
  &:hover:not(:disabled) { border-color: ${colors.neutral[600]}; }
  &:focus { border-color: ${colors.brand.primary}; background: ${colors.neutral[900]}; box-shadow: 0 0 0 3px rgba(124,92,252,0.15); }
  ${({ $hasError }) => $hasError && css`border-color: ${colors.error.base}; &:focus { border-color: ${colors.error.base}; box-shadow: 0 0 0 3px rgba(239,68,68,0.15); }`}
  &:disabled { opacity: 0.4; cursor: not-allowed; background: ${colors.neutral[900]}; }
`;

const IconWrapper = styled.span`
  position: absolute; display: flex; align-items: center; color: ${colors.neutral[500]};
  ${({ $position }) => $position === 'left' ? css`left: ${spacing[3]};` : css`right: ${spacing[3]};`}
`;

const HelperText = styled.span`
  font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.xs};
  color: ${({ $hasError }) => $hasError ? colors.error.text : colors.neutral[500]};
`;

const Input = ({ label, placeholder, value, onChange, size = 'md', disabled = false, error, helperText, leftIcon, rightIcon, type = 'text', id, name, ...props }) => {
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <Wrapper>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <InputWrapper>
        {leftIcon && <IconWrapper $position="left">{leftIcon}</IconWrapper>}
        <StyledInput id={inputId} name={name || inputId} type={type} placeholder={placeholder} value={value} onChange={onChange} $size={size} disabled={disabled} $hasError={!!error} $hasLeftIcon={!!leftIcon} $hasRightIcon={!!rightIcon} aria-describedby={error || helperText ? `${inputId}-helper` : undefined} aria-invalid={!!error} {...props} />
        {rightIcon && <IconWrapper $position="right">{rightIcon}</IconWrapper>}
      </InputWrapper>
      {(error || helperText) && <HelperText id={`${inputId}-helper`} $hasError={!!error}>{error || helperText}</HelperText>}
    </Wrapper>
  );
};

export default Input;
