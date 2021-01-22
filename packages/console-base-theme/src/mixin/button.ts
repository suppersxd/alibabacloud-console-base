import {
  css
} from 'styled-components';

import {
  COLOR,
  SIZE
} from '../var';

import {
  mixinShadowLDown
} from './shadow';

/**
 * 对按钮样式进行重置：
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 定义 disabled 的基础样式
 */
export const mixinButtonReset = css`
  padding: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background: none;
  line-height: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all ease-out 0.3s;
  
  &:hover {
    text-decoration: none;
  }
  
  &[disabled] {
    cursor: not-allowed;
  }
`;

export const mixinButtonShadow = css`
  &:hover,
  &:focus {
    ${mixinShadowLDown}
  }
  
  &:active,
  &:disabled {
    box-shadow: none;
  }
`;

// size mixins
export const mixinButtonSizeXs = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_XS}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_XS}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_XS - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_XS}px;
`;
export const mixinButtonSizeS = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_S}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_S}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_S - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_S}px;
`;
export const mixinButtonSizeM = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_M}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_M}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_M - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_M}px;
`;
export const mixinButtonSizeL = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_L}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_L}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_L - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_L}px;
`;
export const mixinButtonSizeXl = css`
  padding: 0 ${SIZE.PADDING_X_FORM_CONTROL_XL}px;
  height: ${SIZE.HEIGHT_FORM_CONTROL_XL}px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_XL - 2}px;
  font-size: ${SIZE.FONT_SIZE_FORM_CONTROL_XL}px;
`;

// theme mixins
export const mixinButtonDangerColorStateNormal = css`
  color: ${COLOR.BUTTON_DANGER_TEXT};
  color: var(--cb-color-button-danger-text, ${COLOR.BUTTON_DANGER_TEXT});
`;
export const mixinButtonDangerBgStateNormal = css`
  background-color: ${COLOR.BUTTON_DANGER_BG};
  background-color: var(--cb-color-button-danger-bg, ${COLOR.BUTTON_DANGER_BG});
`;
export const mixinButtonDangerBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER};
  border-color: var(--cb-color-button-danger-border, ${COLOR.BUTTON_DANGER_BORDER});
`;
export const mixinButtonDangerStateNormal = css`
  ${mixinButtonDangerColorStateNormal}
  ${mixinButtonDangerBgStateNormal}
  ${mixinButtonDangerBorderStateNormal}
`;
export const mixinButtonDangerColorStateHover = css`
  color: ${COLOR.BUTTON_DANGER_TEXT_HOVER};
  color: var(--cb-color-button-danger-text-hover, ${COLOR.BUTTON_DANGER_TEXT_HOVER});
`;
export const mixinButtonDangerBgStateHover = css`
  background-color: ${COLOR.BUTTON_DANGER_BG_HOVER};
  background-color: var(--cb-color-button-danger-bg-hover, ${COLOR.BUTTON_DANGER_BG_HOVER});
`;
export const mixinButtonDangerBorderStateHover = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER_HOVER};
  border-color: var(--cb-color-button-danger-border-hover, ${COLOR.BUTTON_DANGER_BORDER_HOVER});
`;
export const mixinButtonDangerStateHover = css`
  ${mixinButtonDangerColorStateHover}
  ${mixinButtonDangerBgStateHover}
  ${mixinButtonDangerBorderStateHover}
`;
export const mixinButtonDangerColorStateActive = css`
  color: ${COLOR.BUTTON_DANGER_TEXT_ACTIVE};
  color: var(--cb-color-button-danger-text-active, ${COLOR.BUTTON_DANGER_TEXT_ACTIVE});
`;
export const mixinButtonDangerBgStateActive = css`
  background-color: ${COLOR.BUTTON_DANGER_BG_ACTIVE};
  background-color: var(--cb-color-button-danger-bg-active, ${COLOR.BUTTON_DANGER_BG_ACTIVE});
`;
export const mixinButtonDangerBorderStateActive = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER_ACTIVE};
  border-color: var(--cb-color-button-danger-border-active, ${COLOR.BUTTON_DANGER_BORDER_ACTIVE});
`;
export const mixinButtonDangerStateActive = css`
  ${mixinButtonDangerColorStateActive}
  ${mixinButtonDangerBgStateActive}
  ${mixinButtonDangerBorderStateActive}
`;
export const mixinButtonDangerColorStateDisabled = css`
  color: ${COLOR.BUTTON_DANGER_TEXT_DISABLED};
  color: var(--cb-color-button-danger-text-disabled, ${COLOR.BUTTON_DANGER_TEXT_DISABLED});
`;
export const mixinButtonDangerBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_DANGER_BG_DISABLED};
  background-color: var(--cb-color-button-danger-bg-disabled, ${COLOR.BUTTON_DANGER_BG_DISABLED});
`;
export const mixinButtonDangerBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_DANGER_BORDER_DISABLED};
  border-color: var(--cb-color-button-danger-border-disabled, ${COLOR.BUTTON_DANGER_BORDER_DISABLED});
`;
export const mixinButtonDangerStateDisabled = css`
  ${mixinButtonDangerColorStateDisabled}
  ${mixinButtonDangerBgStateDisabled}
  ${mixinButtonDangerBorderStateDisabled}
`;
export const mixinButtonDanger = css`
  ${mixinButtonDangerStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonDangerColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonDangerStateHover}
  }
  
  &:active {
    ${mixinButtonDangerStateActive}
  }
  
  &:disabled {
    ${mixinButtonDangerStateDisabled}
  }
`;
export const mixinButtonMenuColorStateNormal = css`
  color: ${COLOR.BUTTON_MENU_TEXT};
  color: var(--cb-color-button-menu-text, ${COLOR.BUTTON_MENU_TEXT});
`;
export const mixinButtonMenuBgStateNormal = css`
  background-color: ${COLOR.BUTTON_MENU_BG};
  background-color: var(--cb-color-button-menu-bg, ${COLOR.BUTTON_MENU_BG});
`;
export const mixinButtonMenuBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER};
  border-color: var(--cb-color-button-menu-border, ${COLOR.BUTTON_MENU_BORDER});
`;
export const mixinButtonMenuStateNormal = css`
  ${mixinButtonMenuColorStateNormal}
  ${mixinButtonMenuBgStateNormal}
  ${mixinButtonMenuBorderStateNormal}
`;
export const mixinButtonMenuColorStateHover = css`
  color: ${COLOR.BUTTON_MENU_TEXT_HOVER};
  color: var(--cb-color-button-menu-text-hover, ${COLOR.BUTTON_MENU_TEXT_HOVER});
`;
export const mixinButtonMenuBgStateHover = css`
  background-color: ${COLOR.BUTTON_MENU_BG_HOVER};
  background-color: var(--cb-color-button-menu-bg-hover, ${COLOR.BUTTON_MENU_BG_HOVER});
`;
export const mixinButtonMenuBorderStateHover = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER_HOVER};
  border-color: var(--cb-color-button-menu-border-hover, ${COLOR.BUTTON_MENU_BORDER_HOVER});
`;
export const mixinButtonMenuStateHover = css`
  ${mixinButtonMenuColorStateHover}
  ${mixinButtonMenuBgStateHover}
  ${mixinButtonMenuBorderStateHover}
`;
export const mixinButtonMenuColorStateActive = css`
  color: ${COLOR.BUTTON_MENU_TEXT_ACTIVE};
  color: var(--cb-color-button-menu-text-active, ${COLOR.BUTTON_MENU_TEXT_ACTIVE});
`;
export const mixinButtonMenuBgStateActive = css`
  background-color: ${COLOR.BUTTON_MENU_BG_ACTIVE};
  background-color: var(--cb-color-button-menu-bg-active, ${COLOR.BUTTON_MENU_BG_ACTIVE});
`;
export const mixinButtonMenuBorderStateActive = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER_ACTIVE};
  border-color: var(--cb-color-button-menu-border-active, ${COLOR.BUTTON_MENU_BORDER_ACTIVE});
`;
export const mixinButtonMenuStateActive = css`
  ${mixinButtonMenuColorStateActive}
  ${mixinButtonMenuBgStateActive}
  ${mixinButtonMenuBorderStateActive}
`;
export const mixinButtonMenuColorStateDisabled = css`
  color: ${COLOR.BUTTON_MENU_TEXT_DISABLED};
  color: var(--cb-color-button-menu-text-disabled, ${COLOR.BUTTON_MENU_TEXT_DISABLED});
`;
export const mixinButtonMenuBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_MENU_BG_DISABLED};
  background-color: var(--cb-color-button-menu-bg-disabled, ${COLOR.BUTTON_MENU_BG_DISABLED});
`;
export const mixinButtonMenuBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_MENU_BORDER_DISABLED};
  border-color: var(--cb-color-button-menu-border-disabled, ${COLOR.BUTTON_MENU_BORDER_DISABLED});
`;
export const mixinButtonMenuStateDisabled = css`
  ${mixinButtonMenuColorStateDisabled}
  ${mixinButtonMenuBgStateDisabled}
  ${mixinButtonMenuBorderStateDisabled}
`;
export const mixinButtonMenu = css`
  ${mixinButtonMenuStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonMenuColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonMenuStateHover}
  }
  
  &:active {
    ${mixinButtonMenuStateActive}
  }
  
  &:disabled {
    ${mixinButtonMenuStateDisabled}
  }
`;
export const mixinButtonPrimaryColorStateNormal = css`
  color: ${COLOR.BUTTON_PRIMARY_TEXT};
  color: var(--cb-color-button-primary-text, ${COLOR.BUTTON_PRIMARY_TEXT});
`;
export const mixinButtonPrimaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_PRIMARY_BG};
  background-color: var(--cb-color-button-primary-bg, ${COLOR.BUTTON_PRIMARY_BG});
`;
export const mixinButtonPrimaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER};
  border-color: var(--cb-color-button-primary-border, ${COLOR.BUTTON_PRIMARY_BORDER});
`;
export const mixinButtonPrimaryStateNormal = css`
  ${mixinButtonPrimaryColorStateNormal}
  ${mixinButtonPrimaryBgStateNormal}
  ${mixinButtonPrimaryBorderStateNormal}
`;
export const mixinButtonPrimaryColorStateHover = css`
  color: ${COLOR.BUTTON_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-primary-text-hover, ${COLOR.BUTTON_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonPrimaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-primary-bg-hover, ${COLOR.BUTTON_PRIMARY_BG_HOVER});
`;
export const mixinButtonPrimaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-primary-border-hover, ${COLOR.BUTTON_PRIMARY_BORDER_HOVER});
`;
export const mixinButtonPrimaryStateHover = css`
  ${mixinButtonPrimaryColorStateHover}
  ${mixinButtonPrimaryBgStateHover}
  ${mixinButtonPrimaryBorderStateHover}
`;
export const mixinButtonPrimaryColorStateActive = css`
  color: ${COLOR.BUTTON_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-primary-text-active, ${COLOR.BUTTON_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonPrimaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-primary-bg-active, ${COLOR.BUTTON_PRIMARY_BG_ACTIVE});
`;
export const mixinButtonPrimaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-primary-border-active, ${COLOR.BUTTON_PRIMARY_BORDER_ACTIVE});
`;
export const mixinButtonPrimaryStateActive = css`
  ${mixinButtonPrimaryColorStateActive}
  ${mixinButtonPrimaryBgStateActive}
  ${mixinButtonPrimaryBorderStateActive}
`;
export const mixinButtonPrimaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-primary-text-disabled, ${COLOR.BUTTON_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonPrimaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-primary-bg-disabled, ${COLOR.BUTTON_PRIMARY_BG_DISABLED});
`;
export const mixinButtonPrimaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-primary-border-disabled, ${COLOR.BUTTON_PRIMARY_BORDER_DISABLED});
`;
export const mixinButtonPrimaryStateDisabled = css`
  ${mixinButtonPrimaryColorStateDisabled}
  ${mixinButtonPrimaryBgStateDisabled}
  ${mixinButtonPrimaryBorderStateDisabled}
`;
export const mixinButtonPrimary = css`
  ${mixinButtonPrimaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonPrimaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonPrimaryStateDisabled}
  }
`;
export const mixinButtonSecondaryColorStateNormal = css`
  color: ${COLOR.BUTTON_SECONDARY_TEXT};
  color: var(--cb-color-button-secondary-text, ${COLOR.BUTTON_SECONDARY_TEXT});
`;
export const mixinButtonSecondaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_SECONDARY_BG};
  background-color: var(--cb-color-button-secondary-bg, ${COLOR.BUTTON_SECONDARY_BG});
`;
export const mixinButtonSecondaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER};
  border-color: var(--cb-color-button-secondary-border, ${COLOR.BUTTON_SECONDARY_BORDER});
`;
export const mixinButtonSecondaryStateNormal = css`
  ${mixinButtonSecondaryColorStateNormal}
  ${mixinButtonSecondaryBgStateNormal}
  ${mixinButtonSecondaryBorderStateNormal}
`;
export const mixinButtonSecondaryColorStateHover = css`
  color: ${COLOR.BUTTON_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-secondary-text-hover, ${COLOR.BUTTON_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonSecondaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-secondary-bg-hover, ${COLOR.BUTTON_SECONDARY_BG_HOVER});
`;
export const mixinButtonSecondaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-secondary-border-hover, ${COLOR.BUTTON_SECONDARY_BORDER_HOVER});
`;
export const mixinButtonSecondaryStateHover = css`
  ${mixinButtonSecondaryColorStateHover}
  ${mixinButtonSecondaryBgStateHover}
  ${mixinButtonSecondaryBorderStateHover}
`;
export const mixinButtonSecondaryColorStateActive = css`
  color: ${COLOR.BUTTON_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-secondary-text-active, ${COLOR.BUTTON_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonSecondaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-secondary-bg-active, ${COLOR.BUTTON_SECONDARY_BG_ACTIVE});
`;
export const mixinButtonSecondaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-secondary-border-active, ${COLOR.BUTTON_SECONDARY_BORDER_ACTIVE});
`;
export const mixinButtonSecondaryStateActive = css`
  ${mixinButtonSecondaryColorStateActive}
  ${mixinButtonSecondaryBgStateActive}
  ${mixinButtonSecondaryBorderStateActive}
`;
export const mixinButtonSecondaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-secondary-text-disabled, ${COLOR.BUTTON_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonSecondaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-secondary-bg-disabled, ${COLOR.BUTTON_SECONDARY_BG_DISABLED});
`;
export const mixinButtonSecondaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-secondary-border-disabled, ${COLOR.BUTTON_SECONDARY_BORDER_DISABLED});
`;
export const mixinButtonSecondaryStateDisabled = css`
  ${mixinButtonSecondaryColorStateDisabled}
  ${mixinButtonSecondaryBgStateDisabled}
  ${mixinButtonSecondaryBorderStateDisabled}
`;
export const mixinButtonSecondary = css`
  ${mixinButtonSecondaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonSecondaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonSecondaryStateDisabled}
  }
`;
export const mixinButtonTertiaryColorStateNormal = css`
  color: ${COLOR.BUTTON_TERTIARY_TEXT};
  color: var(--cb-color-button-tertiary-text, ${COLOR.BUTTON_TERTIARY_TEXT});
`;
export const mixinButtonTertiaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_TERTIARY_BG};
  background-color: var(--cb-color-button-tertiary-bg, ${COLOR.BUTTON_TERTIARY_BG});
`;
export const mixinButtonTertiaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER};
  border-color: var(--cb-color-button-tertiary-border, ${COLOR.BUTTON_TERTIARY_BORDER});
`;
export const mixinButtonTertiaryStateNormal = css`
  ${mixinButtonTertiaryColorStateNormal}
  ${mixinButtonTertiaryBgStateNormal}
  ${mixinButtonTertiaryBorderStateNormal}
`;
export const mixinButtonTertiaryColorStateHover = css`
  color: ${COLOR.BUTTON_TERTIARY_TEXT_HOVER};
  color: var(--cb-color-button-tertiary-text-hover, ${COLOR.BUTTON_TERTIARY_TEXT_HOVER});
`;
export const mixinButtonTertiaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_TERTIARY_BG_HOVER};
  background-color: var(--cb-color-button-tertiary-bg-hover, ${COLOR.BUTTON_TERTIARY_BG_HOVER});
`;
export const mixinButtonTertiaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER_HOVER};
  border-color: var(--cb-color-button-tertiary-border-hover, ${COLOR.BUTTON_TERTIARY_BORDER_HOVER});
`;
export const mixinButtonTertiaryStateHover = css`
  ${mixinButtonTertiaryColorStateHover}
  ${mixinButtonTertiaryBgStateHover}
  ${mixinButtonTertiaryBorderStateHover}
`;
export const mixinButtonTertiaryColorStateActive = css`
  color: ${COLOR.BUTTON_TERTIARY_TEXT_ACTIVE};
  color: var(--cb-color-button-tertiary-text-active, ${COLOR.BUTTON_TERTIARY_TEXT_ACTIVE});
`;
export const mixinButtonTertiaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_TERTIARY_BG_ACTIVE};
  background-color: var(--cb-color-button-tertiary-bg-active, ${COLOR.BUTTON_TERTIARY_BG_ACTIVE});
`;
export const mixinButtonTertiaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-tertiary-border-active, ${COLOR.BUTTON_TERTIARY_BORDER_ACTIVE});
`;
export const mixinButtonTertiaryStateActive = css`
  ${mixinButtonTertiaryColorStateActive}
  ${mixinButtonTertiaryBgStateActive}
  ${mixinButtonTertiaryBorderStateActive}
`;
export const mixinButtonTertiaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_TERTIARY_TEXT_DISABLED};
  color: var(--cb-color-button-tertiary-text-disabled, ${COLOR.BUTTON_TERTIARY_TEXT_DISABLED});
`;
export const mixinButtonTertiaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_TERTIARY_BG_DISABLED};
  background-color: var(--cb-color-button-tertiary-bg-disabled, ${COLOR.BUTTON_TERTIARY_BG_DISABLED});
`;
export const mixinButtonTertiaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_TERTIARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-tertiary-border-disabled, ${COLOR.BUTTON_TERTIARY_BORDER_DISABLED});
`;
export const mixinButtonTertiaryStateDisabled = css`
  ${mixinButtonTertiaryColorStateDisabled}
  ${mixinButtonTertiaryBgStateDisabled}
  ${mixinButtonTertiaryBorderStateDisabled}
`;
export const mixinButtonTertiary = css`
  ${mixinButtonTertiaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonTertiaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonTertiaryStateHover}
  }
  
  &:active {
    ${mixinButtonTertiaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTertiaryStateDisabled}
  }
`;
export const mixinButtonBrandPrimaryColorStateNormal = css`
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT};
  color: var(--cb-color-button-brand-primary-text, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT});
`;
export const mixinButtonBrandPrimaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG};
  background-color: var(--cb-color-button-brand-primary-bg, ${COLOR.BUTTON_BRAND_PRIMARY_BG});
`;
export const mixinButtonBrandPrimaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER};
  border-color: var(--cb-color-button-brand-primary-border, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER});
`;
export const mixinButtonBrandPrimaryStateNormal = css`
  ${mixinButtonBrandPrimaryColorStateNormal}
  ${mixinButtonBrandPrimaryBgStateNormal}
  ${mixinButtonBrandPrimaryBorderStateNormal}
`;
export const mixinButtonBrandPrimaryColorStateHover = css`
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-brand-primary-text-hover, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonBrandPrimaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-brand-primary-bg-hover, ${COLOR.BUTTON_BRAND_PRIMARY_BG_HOVER});
`;
export const mixinButtonBrandPrimaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-brand-primary-border-hover, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_HOVER});
`;
export const mixinButtonBrandPrimaryStateHover = css`
  ${mixinButtonBrandPrimaryColorStateHover}
  ${mixinButtonBrandPrimaryBgStateHover}
  ${mixinButtonBrandPrimaryBorderStateHover}
`;
export const mixinButtonBrandPrimaryColorStateActive = css`
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-brand-primary-text-active, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonBrandPrimaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-brand-primary-bg-active, ${COLOR.BUTTON_BRAND_PRIMARY_BG_ACTIVE});
`;
export const mixinButtonBrandPrimaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-brand-primary-border-active, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_ACTIVE});
`;
export const mixinButtonBrandPrimaryStateActive = css`
  ${mixinButtonBrandPrimaryColorStateActive}
  ${mixinButtonBrandPrimaryBgStateActive}
  ${mixinButtonBrandPrimaryBorderStateActive}
`;
export const mixinButtonBrandPrimaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-brand-primary-text-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonBrandPrimaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_BRAND_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-brand-primary-bg-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_BG_DISABLED});
`;
export const mixinButtonBrandPrimaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-brand-primary-border-disabled, ${COLOR.BUTTON_BRAND_PRIMARY_BORDER_DISABLED});
`;
export const mixinButtonBrandPrimaryStateDisabled = css`
  ${mixinButtonBrandPrimaryColorStateDisabled}
  ${mixinButtonBrandPrimaryBgStateDisabled}
  ${mixinButtonBrandPrimaryBorderStateDisabled}
`;
export const mixinButtonBrandPrimary = css`
  ${mixinButtonBrandPrimaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonBrandPrimaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonBrandPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonBrandPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonBrandPrimaryStateDisabled}
  }
`;
export const mixinButtonBrandSecondaryColorStateNormal = css`
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT};
  color: var(--cb-color-button-brand-secondary-text, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT});
`;
export const mixinButtonBrandSecondaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG};
  background-color: var(--cb-color-button-brand-secondary-bg, ${COLOR.BUTTON_BRAND_SECONDARY_BG});
`;
export const mixinButtonBrandSecondaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER};
  border-color: var(--cb-color-button-brand-secondary-border, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER});
`;
export const mixinButtonBrandSecondaryStateNormal = css`
  ${mixinButtonBrandSecondaryColorStateNormal}
  ${mixinButtonBrandSecondaryBgStateNormal}
  ${mixinButtonBrandSecondaryBorderStateNormal}
`;
export const mixinButtonBrandSecondaryColorStateHover = css`
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-brand-secondary-text-hover, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonBrandSecondaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-brand-secondary-bg-hover, ${COLOR.BUTTON_BRAND_SECONDARY_BG_HOVER});
`;
export const mixinButtonBrandSecondaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-brand-secondary-border-hover, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_HOVER});
`;
export const mixinButtonBrandSecondaryStateHover = css`
  ${mixinButtonBrandSecondaryColorStateHover}
  ${mixinButtonBrandSecondaryBgStateHover}
  ${mixinButtonBrandSecondaryBorderStateHover}
`;
export const mixinButtonBrandSecondaryColorStateActive = css`
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-brand-secondary-text-active, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonBrandSecondaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-brand-secondary-bg-active, ${COLOR.BUTTON_BRAND_SECONDARY_BG_ACTIVE});
`;
export const mixinButtonBrandSecondaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-brand-secondary-border-active, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_ACTIVE});
`;
export const mixinButtonBrandSecondaryStateActive = css`
  ${mixinButtonBrandSecondaryColorStateActive}
  ${mixinButtonBrandSecondaryBgStateActive}
  ${mixinButtonBrandSecondaryBorderStateActive}
`;
export const mixinButtonBrandSecondaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-brand-secondary-text-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonBrandSecondaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_BRAND_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-brand-secondary-bg-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_BG_DISABLED});
`;
export const mixinButtonBrandSecondaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-brand-secondary-border-disabled, ${COLOR.BUTTON_BRAND_SECONDARY_BORDER_DISABLED});
`;
export const mixinButtonBrandSecondaryStateDisabled = css`
  ${mixinButtonBrandSecondaryColorStateDisabled}
  ${mixinButtonBrandSecondaryBgStateDisabled}
  ${mixinButtonBrandSecondaryBorderStateDisabled}
`;
export const mixinButtonBrandSecondary = css`
  ${mixinButtonBrandSecondaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonBrandSecondaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonBrandSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonBrandSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonBrandSecondaryStateDisabled}
  }
`;
export const mixinButtonBrandTertiaryColorStateNormal = css`
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT};
  color: var(--cb-color-button-brand-tertiary-text, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT});
`;
export const mixinButtonBrandTertiaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG};
  background-color: var(--cb-color-button-brand-tertiary-bg, ${COLOR.BUTTON_BRAND_TERTIARY_BG});
`;
export const mixinButtonBrandTertiaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER};
  border-color: var(--cb-color-button-brand-tertiary-border, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER});
`;
export const mixinButtonBrandTertiaryStateNormal = css`
  ${mixinButtonBrandTertiaryColorStateNormal}
  ${mixinButtonBrandTertiaryBgStateNormal}
  ${mixinButtonBrandTertiaryBorderStateNormal}
`;
export const mixinButtonBrandTertiaryColorStateHover = css`
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_HOVER};
  color: var(--cb-color-button-brand-tertiary-text-hover, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_HOVER});
`;
export const mixinButtonBrandTertiaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_HOVER};
  background-color: var(--cb-color-button-brand-tertiary-bg-hover, ${COLOR.BUTTON_BRAND_TERTIARY_BG_HOVER});
`;
export const mixinButtonBrandTertiaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_HOVER};
  border-color: var(--cb-color-button-brand-tertiary-border-hover, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_HOVER});
`;
export const mixinButtonBrandTertiaryStateHover = css`
  ${mixinButtonBrandTertiaryColorStateHover}
  ${mixinButtonBrandTertiaryBgStateHover}
  ${mixinButtonBrandTertiaryBorderStateHover}
`;
export const mixinButtonBrandTertiaryColorStateActive = css`
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_ACTIVE};
  color: var(--cb-color-button-brand-tertiary-text-active, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_ACTIVE});
`;
export const mixinButtonBrandTertiaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_ACTIVE};
  background-color: var(--cb-color-button-brand-tertiary-bg-active, ${COLOR.BUTTON_BRAND_TERTIARY_BG_ACTIVE});
`;
export const mixinButtonBrandTertiaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-brand-tertiary-border-active, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_ACTIVE});
`;
export const mixinButtonBrandTertiaryStateActive = css`
  ${mixinButtonBrandTertiaryColorStateActive}
  ${mixinButtonBrandTertiaryBgStateActive}
  ${mixinButtonBrandTertiaryBorderStateActive}
`;
export const mixinButtonBrandTertiaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_DISABLED};
  color: var(--cb-color-button-brand-tertiary-text-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_TEXT_DISABLED});
`;
export const mixinButtonBrandTertiaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_BRAND_TERTIARY_BG_DISABLED};
  background-color: var(--cb-color-button-brand-tertiary-bg-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_BG_DISABLED});
`;
export const mixinButtonBrandTertiaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-brand-tertiary-border-disabled, ${COLOR.BUTTON_BRAND_TERTIARY_BORDER_DISABLED});
`;
export const mixinButtonBrandTertiaryStateDisabled = css`
  ${mixinButtonBrandTertiaryColorStateDisabled}
  ${mixinButtonBrandTertiaryBgStateDisabled}
  ${mixinButtonBrandTertiaryBorderStateDisabled}
`;
export const mixinButtonBrandTertiary = css`
  ${mixinButtonBrandTertiaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonBrandTertiaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonBrandTertiaryStateHover}
  }
  
  &:active {
    ${mixinButtonBrandTertiaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonBrandTertiaryStateDisabled}
  }
`;
export const mixinButtonTextPrimaryColorStateNormal = css`
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT};
  color: var(--cb-color-button-text-primary-text, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT});
`;
export const mixinButtonTextPrimaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG};
  background-color: var(--cb-color-button-text-primary-bg, ${COLOR.BUTTON_TEXT_PRIMARY_BG});
`;
export const mixinButtonTextPrimaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER};
  border-color: var(--cb-color-button-text-primary-border, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER});
`;
export const mixinButtonTextPrimaryStateNormal = css`
  ${mixinButtonTextPrimaryColorStateNormal}
  ${mixinButtonTextPrimaryBgStateNormal}
  ${mixinButtonTextPrimaryBorderStateNormal}
`;
export const mixinButtonTextPrimaryColorStateHover = css`
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-text-primary-text-hover, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonTextPrimaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-text-primary-bg-hover, ${COLOR.BUTTON_TEXT_PRIMARY_BG_HOVER});
`;
export const mixinButtonTextPrimaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-primary-border-hover, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_HOVER});
`;
export const mixinButtonTextPrimaryStateHover = css`
  ${mixinButtonTextPrimaryColorStateHover}
  ${mixinButtonTextPrimaryBgStateHover}
  ${mixinButtonTextPrimaryBorderStateHover}
`;
export const mixinButtonTextPrimaryColorStateActive = css`
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-primary-text-active, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonTextPrimaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-primary-bg-active, ${COLOR.BUTTON_TEXT_PRIMARY_BG_ACTIVE});
`;
export const mixinButtonTextPrimaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-primary-border-active, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_ACTIVE});
`;
export const mixinButtonTextPrimaryStateActive = css`
  ${mixinButtonTextPrimaryColorStateActive}
  ${mixinButtonTextPrimaryBgStateActive}
  ${mixinButtonTextPrimaryBorderStateActive}
`;
export const mixinButtonTextPrimaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-primary-text-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonTextPrimaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_TEXT_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-primary-bg-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_BG_DISABLED});
`;
export const mixinButtonTextPrimaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-primary-border-disabled, ${COLOR.BUTTON_TEXT_PRIMARY_BORDER_DISABLED});
`;
export const mixinButtonTextPrimaryStateDisabled = css`
  ${mixinButtonTextPrimaryColorStateDisabled}
  ${mixinButtonTextPrimaryBgStateDisabled}
  ${mixinButtonTextPrimaryBorderStateDisabled}
`;
export const mixinButtonTextPrimary = css`
  ${mixinButtonTextPrimaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonTextPrimaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonTextPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextPrimaryStateDisabled}
  }
`;
export const mixinButtonTextSecondaryColorStateNormal = css`
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT};
  color: var(--cb-color-button-text-secondary-text, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT});
`;
export const mixinButtonTextSecondaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG};
  background-color: var(--cb-color-button-text-secondary-bg, ${COLOR.BUTTON_TEXT_SECONDARY_BG});
`;
export const mixinButtonTextSecondaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER};
  border-color: var(--cb-color-button-text-secondary-border, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER});
`;
export const mixinButtonTextSecondaryStateNormal = css`
  ${mixinButtonTextSecondaryColorStateNormal}
  ${mixinButtonTextSecondaryBgStateNormal}
  ${mixinButtonTextSecondaryBorderStateNormal}
`;
export const mixinButtonTextSecondaryColorStateHover = css`
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-text-secondary-text-hover, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonTextSecondaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-text-secondary-bg-hover, ${COLOR.BUTTON_TEXT_SECONDARY_BG_HOVER});
`;
export const mixinButtonTextSecondaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-secondary-border-hover, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_HOVER});
`;
export const mixinButtonTextSecondaryStateHover = css`
  ${mixinButtonTextSecondaryColorStateHover}
  ${mixinButtonTextSecondaryBgStateHover}
  ${mixinButtonTextSecondaryBorderStateHover}
`;
export const mixinButtonTextSecondaryColorStateActive = css`
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-secondary-text-active, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonTextSecondaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-secondary-bg-active, ${COLOR.BUTTON_TEXT_SECONDARY_BG_ACTIVE});
`;
export const mixinButtonTextSecondaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-secondary-border-active, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_ACTIVE});
`;
export const mixinButtonTextSecondaryStateActive = css`
  ${mixinButtonTextSecondaryColorStateActive}
  ${mixinButtonTextSecondaryBgStateActive}
  ${mixinButtonTextSecondaryBorderStateActive}
`;
export const mixinButtonTextSecondaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-secondary-text-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonTextSecondaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_TEXT_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-secondary-bg-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_BG_DISABLED});
`;
export const mixinButtonTextSecondaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-secondary-border-disabled, ${COLOR.BUTTON_TEXT_SECONDARY_BORDER_DISABLED});
`;
export const mixinButtonTextSecondaryStateDisabled = css`
  ${mixinButtonTextSecondaryColorStateDisabled}
  ${mixinButtonTextSecondaryBgStateDisabled}
  ${mixinButtonTextSecondaryBorderStateDisabled}
`;
export const mixinButtonTextSecondary = css`
  ${mixinButtonTextSecondaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonTextSecondaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonTextSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextSecondaryStateDisabled}
  }
`;
export const mixinButtonTextTertiaryColorStateNormal = css`
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT};
  color: var(--cb-color-button-text-tertiary-text, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT});
`;
export const mixinButtonTextTertiaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG};
  background-color: var(--cb-color-button-text-tertiary-bg, ${COLOR.BUTTON_TEXT_TERTIARY_BG});
`;
export const mixinButtonTextTertiaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER};
  border-color: var(--cb-color-button-text-tertiary-border, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER});
`;
export const mixinButtonTextTertiaryStateNormal = css`
  ${mixinButtonTextTertiaryColorStateNormal}
  ${mixinButtonTextTertiaryBgStateNormal}
  ${mixinButtonTextTertiaryBorderStateNormal}
`;
export const mixinButtonTextTertiaryColorStateHover = css`
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_HOVER};
  color: var(--cb-color-button-text-tertiary-text-hover, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_HOVER});
`;
export const mixinButtonTextTertiaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_HOVER};
  background-color: var(--cb-color-button-text-tertiary-bg-hover, ${COLOR.BUTTON_TEXT_TERTIARY_BG_HOVER});
`;
export const mixinButtonTextTertiaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-tertiary-border-hover, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_HOVER});
`;
export const mixinButtonTextTertiaryStateHover = css`
  ${mixinButtonTextTertiaryColorStateHover}
  ${mixinButtonTextTertiaryBgStateHover}
  ${mixinButtonTextTertiaryBorderStateHover}
`;
export const mixinButtonTextTertiaryColorStateActive = css`
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-tertiary-text-active, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_ACTIVE});
`;
export const mixinButtonTextTertiaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-tertiary-bg-active, ${COLOR.BUTTON_TEXT_TERTIARY_BG_ACTIVE});
`;
export const mixinButtonTextTertiaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-tertiary-border-active, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_ACTIVE});
`;
export const mixinButtonTextTertiaryStateActive = css`
  ${mixinButtonTextTertiaryColorStateActive}
  ${mixinButtonTextTertiaryBgStateActive}
  ${mixinButtonTextTertiaryBorderStateActive}
`;
export const mixinButtonTextTertiaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-tertiary-text-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_TEXT_DISABLED});
`;
export const mixinButtonTextTertiaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_TEXT_TERTIARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-tertiary-bg-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_BG_DISABLED});
`;
export const mixinButtonTextTertiaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-tertiary-border-disabled, ${COLOR.BUTTON_TEXT_TERTIARY_BORDER_DISABLED});
`;
export const mixinButtonTextTertiaryStateDisabled = css`
  ${mixinButtonTextTertiaryColorStateDisabled}
  ${mixinButtonTextTertiaryBgStateDisabled}
  ${mixinButtonTextTertiaryBorderStateDisabled}
`;
export const mixinButtonTextTertiary = css`
  ${mixinButtonTextTertiaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonTextTertiaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonTextTertiaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextTertiaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextTertiaryStateDisabled}
  }
`;
export const mixinButtonTextBrandPrimaryColorStateNormal = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT};
  color: var(--cb-color-button-text-brand-primary-text, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT});
`;
export const mixinButtonTextBrandPrimaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG};
  background-color: var(--cb-color-button-text-brand-primary-bg, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG});
`;
export const mixinButtonTextBrandPrimaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER};
  border-color: var(--cb-color-button-text-brand-primary-border, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER});
`;
export const mixinButtonTextBrandPrimaryStateNormal = css`
  ${mixinButtonTextBrandPrimaryColorStateNormal}
  ${mixinButtonTextBrandPrimaryBgStateNormal}
  ${mixinButtonTextBrandPrimaryBorderStateNormal}
`;
export const mixinButtonTextBrandPrimaryColorStateHover = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_HOVER};
  color: var(--cb-color-button-text-brand-primary-text-hover, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_HOVER});
`;
export const mixinButtonTextBrandPrimaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_HOVER};
  background-color: var(--cb-color-button-text-brand-primary-bg-hover, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_HOVER});
`;
export const mixinButtonTextBrandPrimaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-brand-primary-border-hover, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_HOVER});
`;
export const mixinButtonTextBrandPrimaryStateHover = css`
  ${mixinButtonTextBrandPrimaryColorStateHover}
  ${mixinButtonTextBrandPrimaryBgStateHover}
  ${mixinButtonTextBrandPrimaryBorderStateHover}
`;
export const mixinButtonTextBrandPrimaryColorStateActive = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-brand-primary-text-active, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_ACTIVE});
`;
export const mixinButtonTextBrandPrimaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-brand-primary-bg-active, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_ACTIVE});
`;
export const mixinButtonTextBrandPrimaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-brand-primary-border-active, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_ACTIVE});
`;
export const mixinButtonTextBrandPrimaryStateActive = css`
  ${mixinButtonTextBrandPrimaryColorStateActive}
  ${mixinButtonTextBrandPrimaryBgStateActive}
  ${mixinButtonTextBrandPrimaryBorderStateActive}
`;
export const mixinButtonTextBrandPrimaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-brand-primary-text-disabled, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_TEXT_DISABLED});
`;
export const mixinButtonTextBrandPrimaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-brand-primary-bg-disabled, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BG_DISABLED});
`;
export const mixinButtonTextBrandPrimaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-brand-primary-border-disabled, ${COLOR.BUTTON_TEXT_BRAND_PRIMARY_BORDER_DISABLED});
`;
export const mixinButtonTextBrandPrimaryStateDisabled = css`
  ${mixinButtonTextBrandPrimaryColorStateDisabled}
  ${mixinButtonTextBrandPrimaryBgStateDisabled}
  ${mixinButtonTextBrandPrimaryBorderStateDisabled}
`;
export const mixinButtonTextBrandPrimary = css`
  ${mixinButtonTextBrandPrimaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonTextBrandPrimaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonTextBrandPrimaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextBrandPrimaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextBrandPrimaryStateDisabled}
  }
`;
export const mixinButtonTextBrandSecondaryColorStateNormal = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT};
  color: var(--cb-color-button-text-brand-secondary-text, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT});
`;
export const mixinButtonTextBrandSecondaryBgStateNormal = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG};
  background-color: var(--cb-color-button-text-brand-secondary-bg, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG});
`;
export const mixinButtonTextBrandSecondaryBorderStateNormal = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER};
  border-color: var(--cb-color-button-text-brand-secondary-border, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER});
`;
export const mixinButtonTextBrandSecondaryStateNormal = css`
  ${mixinButtonTextBrandSecondaryColorStateNormal}
  ${mixinButtonTextBrandSecondaryBgStateNormal}
  ${mixinButtonTextBrandSecondaryBorderStateNormal}
`;
export const mixinButtonTextBrandSecondaryColorStateHover = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_HOVER};
  color: var(--cb-color-button-text-brand-secondary-text-hover, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_HOVER});
`;
export const mixinButtonTextBrandSecondaryBgStateHover = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_HOVER};
  background-color: var(--cb-color-button-text-brand-secondary-bg-hover, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_HOVER});
`;
export const mixinButtonTextBrandSecondaryBorderStateHover = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_HOVER};
  border-color: var(--cb-color-button-text-brand-secondary-border-hover, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_HOVER});
`;
export const mixinButtonTextBrandSecondaryStateHover = css`
  ${mixinButtonTextBrandSecondaryColorStateHover}
  ${mixinButtonTextBrandSecondaryBgStateHover}
  ${mixinButtonTextBrandSecondaryBorderStateHover}
`;
export const mixinButtonTextBrandSecondaryColorStateActive = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_ACTIVE};
  color: var(--cb-color-button-text-brand-secondary-text-active, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_ACTIVE});
`;
export const mixinButtonTextBrandSecondaryBgStateActive = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_ACTIVE};
  background-color: var(--cb-color-button-text-brand-secondary-bg-active, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_ACTIVE});
`;
export const mixinButtonTextBrandSecondaryBorderStateActive = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_ACTIVE};
  border-color: var(--cb-color-button-text-brand-secondary-border-active, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_ACTIVE});
`;
export const mixinButtonTextBrandSecondaryStateActive = css`
  ${mixinButtonTextBrandSecondaryColorStateActive}
  ${mixinButtonTextBrandSecondaryBgStateActive}
  ${mixinButtonTextBrandSecondaryBorderStateActive}
`;
export const mixinButtonTextBrandSecondaryColorStateDisabled = css`
  color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_DISABLED};
  color: var(--cb-color-button-text-brand-secondary-text-disabled, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_TEXT_DISABLED});
`;
export const mixinButtonTextBrandSecondaryBgStateDisabled = css`
  background-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_DISABLED};
  background-color: var(--cb-color-button-text-brand-secondary-bg-disabled, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BG_DISABLED});
`;
export const mixinButtonTextBrandSecondaryBorderStateDisabled = css`
  border-color: ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_DISABLED};
  border-color: var(--cb-color-button-text-brand-secondary-border-disabled, ${COLOR.BUTTON_TEXT_BRAND_SECONDARY_BORDER_DISABLED});
`;
export const mixinButtonTextBrandSecondaryStateDisabled = css`
  ${mixinButtonTextBrandSecondaryColorStateDisabled}
  ${mixinButtonTextBrandSecondaryBgStateDisabled}
  ${mixinButtonTextBrandSecondaryBorderStateDisabled}
`;
export const mixinButtonTextBrandSecondary = css`
  ${mixinButtonTextBrandSecondaryStateNormal}
  
  &:link,
  &:visited {
    ${mixinButtonTextBrandSecondaryColorStateNormal}
  }
  
  &:hover,
  &:focus {
    ${mixinButtonTextBrandSecondaryStateHover}
  }
  
  &:active {
    ${mixinButtonTextBrandSecondaryStateActive}
  }
  
  &:disabled {
    ${mixinButtonTextBrandSecondaryStateDisabled}
  }
`;
