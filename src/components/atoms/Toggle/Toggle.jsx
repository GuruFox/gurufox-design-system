import React from 'react';
import styled from 'styled-components';
import { colors, spacing, borderRadius, transitions } from '../../../tokens';

const sizeMap = {
  sm: { width: '32px', height: '18px', thumb: '14px', offset: '2px', translate: '14px' },
  md: { width: '44px', height: '24px', thumb: '18px', offset: '3px', translate: '20px' },
  lg: { width: '56px', height: '30px', thumb: '22px', offset: '4px', translate: '26px' },
};

const Wrapper = styled.label`
  display: inline-flex; align-items: center; gap: ${spacing[2]};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.4 : 1}; user-select: none;
`;

const HiddenInput = styled.input`position: absolute; opacity: 0; width: 0; height: 0;`;

const Track = styled.span`
  position: relative; display: inline-block;
  width: ${({ $size }) => sizeMap[$size]?.width || sizeMap.md.width};
  height: ${({ $size }) => sizeMap[$size]?.height || sizeMap.md.height};
  border-radius: ${borderRadius.full};
  background: ${({ $checked }) => $checked ? colors.brand.primary : colors.neutral[700]};
  transition: background ${transitions.base}; flex-shrink: 0;
  &::after {
    content: ''; position: absolute;
    top: ${({ $size }) => sizeMap[$size]?.offset || sizeMap.md.offset};
    left: ${({ $size }) => sizeMap[$size]?.offset || sizeMap.md.offset};
    width: ${({ $size }) => sizeMap[$size]?.thumb || sizeMap.md.thumb};
    height: ${({ $size }) => sizeMap[$size]?.thumb || sizeMap.md.thumb};
    border-radius: 50%; background: ${colors.neutral[0]};
    box-shadow: 0 1px 3px rgba(0,0,0,0.4); transition: transform ${transitions.base};
    transform: ${({ $checked, $size }) => $checked ? `translateX(${sizeMap[$size]?.translate || sizeMap.md.translate})` : 'translateX(0)'};
  }
`;

const LabelText = styled.span`font-size: 0.875rem; color: ${colors.neutral[300]};`;

const Toggle = ({ checked = false, onChange, size = 'md', disabled = false, label, ...props }) => (
  <Wrapper disabled={disabled}>
    <HiddenInput type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...props} />
    <Track $checked={checked} $size={size} />
    {label && <LabelText>{label}</LabelText>}
  </Wrapper>
);

export default Toggle;
