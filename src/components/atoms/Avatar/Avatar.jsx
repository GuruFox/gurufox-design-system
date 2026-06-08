import React from 'react';
import styled from 'styled-components';
import { colors, typography, borderRadius } from '../../../tokens';

const sizeMap = {
  xs: { size: '24px', fontSize: typography.fontSize.xs },
  sm: { size: '32px', fontSize: typography.fontSize.sm },
  md: { size: '40px', fontSize: typography.fontSize.base },
  lg: { size: '48px', fontSize: typography.fontSize.lg },
  xl: { size: '64px', fontSize: typography.fontSize['2xl'] },
};

const StyledAvatar = styled.div`
  position: relative; display: inline-flex; align-items: center; justify-content: center;
  border-radius: ${({ $shape }) => $shape === 'square' ? borderRadius.base : borderRadius.full};
  background: ${colors.neutral[700]}; overflow: hidden; flex-shrink: 0;
  width: ${({ $size }) => sizeMap[$size]?.size || sizeMap.md.size};
  height: ${({ $size }) => sizeMap[$size]?.size || sizeMap.md.size};
  font-family: ${typography.fontFamily.sans};
  font-size: ${({ $size }) => sizeMap[$size]?.fontSize || sizeMap.md.fontSize};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.neutral[0]}; border: 2px solid ${colors.neutral[700]}; user-select: none;
`;

const AvatarImage = styled.img`width: 100%; height: 100%; object-fit: cover;`;

const StatusDot = styled.span`
  position: absolute; bottom: 1px; right: 1px;
  width: ${({ $size }) => $size === 'xs' || $size === 'sm' ? '8px' : '10px'};
  height: ${({ $size }) => $size === 'xs' || $size === 'sm' ? '8px' : '10px'};
  border-radius: 50%; border: 2px solid ${colors.neutral[900]};
  background: ${({ $status }) => $status === 'online' ? colors.success.base : $status === 'away' ? colors.warning.base : $status === 'busy' ? colors.error.base : colors.neutral[500]};
`;

const getInitials = (name) => {
  if (!name) return '?';
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
};

const Avatar = ({ src, alt, name, size = 'md', shape = 'circle', status, ...props }) => (
  <StyledAvatar $size={size} $shape={shape} {...props}>
    {src ? <AvatarImage src={src} alt={alt || name} /> : getInitials(name)}
    {status && <StatusDot $status={status} $size={size} />}
  </StyledAvatar>
);

export default Avatar;
