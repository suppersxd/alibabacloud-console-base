import {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

export default function getCssOfAlign(align: string): FlattenSimpleInterpolation {
  switch (align) {
    case 'left':
      return css`
        margin-right: 4px;
      `;
    case 'right':
      return css`
        margin-left: 4px;
      `;
    default:
      return null; // 默认 center center
  }
}
