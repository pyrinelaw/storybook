import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { baseFonts } from '../';

const Wrapper = glamorous.div(({ isMobileDevice }) => ({
  background: isMobileDevice ? 'none' : '#F7F7F7',
  margin: isMobileDevice ? '10px 0' : '0 0 10px',
  display: 'flex',
}));

const HeadingLink = glamorous.a(({ isMobileDevice }) => ({
  textDecoration: 'none',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: isMobileDevice ? 'none' : '1px solid rgb(193, 193, 193)',
  borderRadius: 2,
}));
const Heading = glamorous.h3(baseFonts, {
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  fontSize: '12px',
  fontWeight: 'bolder',
  color: '#828282',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '5px',
  margin: 0,
  overflow: 'hidden',
});

const iconStyle = ({ isMobileDevice }) => ({
  textTransform: 'uppercase',
  fontSize: 12,
  fontWeight: 'bolder',
  color: 'rgb(130, 130, 130)',
  border: '1px solid rgb(193, 193, 193)',
  textAlign: 'center',
  borderRadius: 2,
  cursor: 'pointer',
  display: 'inlineBlock',
  padding: 0,
  margin: isMobileDevice ? '0 15px' : '0 0 0 5px',
  backgroundColor: 'inherit',
  outline: 0,
  width: 30,
  flexShrink: 0,
});

const BurgerButton = glamorous.button(iconStyle({ isMobileDevice: true }), {
  paddingBottom: 2,
});
const ShortHelpButton = glamorous.button(iconStyle);

const Header = ({
  openShortcutsHelp,
  onBurgerButtonClick,
  name,
  url,
  enableShortcutsHelp,
  isMobileDevice,
}) => (
  <Wrapper isMobileDevice={isMobileDevice}>
    {isMobileDevice && <BurgerButton onClick={onBurgerButtonClick}>☰</BurgerButton>}
    <HeadingLink
      isMobileDevice={isMobileDevice}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Heading>{name}</Heading>
    </HeadingLink>
    {enableShortcutsHelp && (
      <ShortHelpButton isMobileDevice={isMobileDevice} onClick={openShortcutsHelp}>
        ⌘
      </ShortHelpButton>
    )}
  </Wrapper>
);

Header.defaultProps = {
  openShortcutsHelp: null,
  onBurgerButtonClick: null,
  enableShortcutsHelp: true,
  name: '',
  url: '',
  isMobileDevice: false,
};

Header.propTypes = {
  openShortcutsHelp: PropTypes.func,
  onBurgerButtonClick: PropTypes.func,
  name: PropTypes.string,
  url: PropTypes.string,
  isMobileDevice: PropTypes.bool,
  enableShortcutsHelp: PropTypes.bool,
};

export default Header;