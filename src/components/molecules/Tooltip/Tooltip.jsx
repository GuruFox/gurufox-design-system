import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors, typography, spacing, borderRadius, shadows, zIndex } from '../../../tokens';

const fadeIn = keyframes`from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); }`;

const Wrapper = styled.div`position: relative; display: inline-flex;`;

const TooltipBox = styled.div`
  position: absolute; z-index: ${zIndex.toast};
  background: ${colors.neutral[700]}; color: ${colors.neutral[100]};
  font-family: ${typography.fontFamily.sans}; font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium}; padding: ${spacing[1]} ${spacing[2]};
  border-radius: ${borderRadius.base}; white-space: nowrap;
  box-shadow: ${shadows.base}; animation: ${fadeIn} 150ms ease; pointer-events: none;
  ${({ $position }) => $position === 'top' && css`bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);`}
  ${({ $position }) => $position === 'bottom' && css`top: calc(100% + 8px); left: 50%; transform: translateX(-50%);`}
  ${({ $position }) => $position === 'left' && css`right: calc(100% + 8px); top: 50%; transform: translateY(-50%);`}
  ${({ $position }) => $position === 'right' && css`left: calc(100% + 8px); top: 50%; transform: translateY(-50%);`}
`;

const Tooltip = ({ children, content, position = 'top', ...props }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Wrapper onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} {...props}>
      {children}
      {visible && content && <TooltipBox $position={position}>{content}</TooltipBox>}
    </Wrapper>
  );
};

export default Tooltip;
