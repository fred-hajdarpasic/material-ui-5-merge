import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

export default function SupporterHubSearch(props) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: props.width || 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": props.ariaLabel }}
      />
      <IconButton sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SupporterHubSearch.propTypes = {
  /**
   * The aria label.
   */
  ariaLabel: PropTypes.string,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    ),
  ]),

  /**
   * Override or extend the styles applied to the component. See CSS API: https://mui.com/api/text-field/#css.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * Callback fired when the value is changed.
   */
  onChange: PropTypes.func,

  /** The system prop that allows defining
   * system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/ */
  sx: PropTypes.object,
};
