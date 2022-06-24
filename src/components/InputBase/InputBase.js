import React from "react";
import PropTypes from "prop-types";
import InputBaseM from "@mui/material/InputBase";

/**
 * @uxpindocurl https://mui.com/api/text-field/
 */
function InputBase(props) {
  return (
    <InputBaseM {...props} />
  )
}

InputBase.propTypes = {
  /**
   * The label content.
   */
  label: PropTypes.string,

  /**
 * The helper text content.
 */
  helperText: PropTypes.string,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    )
  ]),

  /**
   * This prop helps users to fill forms faster, especially on mobile devices. 
   * The name can be confusing, as it's more like an autofill. 
   * You can learn more about it: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill.
   */
  /** @uxpinignoreprop */
  autoComplete: PropTypes.string,

  /**
   * Override or extend the styles applied to the component. See CSS API: https://mui.com/api/text-field/#css.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * The variant to use.
   */

  /** The default value. Use when the component is not controlled.*/
  /** @uxpinignoreprop */
  defaultValue: PropTypes.string,

  /** If 'true', the component is disabled.*/
  disabled: PropTypes.bool,

  /**
   * If 'true', the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
 * If 'true', the input element is focused during the first mount.
 */
  autoFocus: PropTypes.bool,

  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  /** @uxpinignoreprop */
  id: PropTypes.string,

  /**
   * @uxpinignoreprop
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,

  /**
* Callback fired when the value is changed.
*/
  onChange: PropTypes.func,

  /** The system prop that allows defining 
   * system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/ */
  sx: PropTypes.object
};

export default InputBase;