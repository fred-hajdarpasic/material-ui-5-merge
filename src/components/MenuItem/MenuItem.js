import * as React from 'react';
import PropTypes, { func } from 'prop-types';
import MenuItemM from '@mui/material/MenuItem';

function MenuItem(props) {
  return (
    <MenuItemM {...props}/>
  )
}

MenuItem.propTypes = {
  autoFocus: PropTypes.bool,

  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @uxpinignoreprop
   */
  component: PropTypes.elementType,

  dense: PropTypes.bool,

  disableGutters: PropTypes.bool,

  divider: PropTypes.bool,

  /**
   * @uxpinignoreprop
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  sx: PropTypes.object,

  value: PropTypes.string,
}

export default MenuItem;