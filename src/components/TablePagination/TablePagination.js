import React from 'react';
import PropTypes from 'prop-types';
import TablePaginationM from '@mui/material/TablePagination';

/**
 * @uxpindocurl https://mui.com/api/table-cell/#main-content
 */
function TablePagination(props) {
  return (
    <TablePaginationM {...props} />
  )
}

TablePagination.propTypes = {
 
  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,
  
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Set count attribute.
   */
   count: PropTypes.number,

  /**
   * Set rowsPerPage attribute.
   */
   rowsPerPage: PropTypes.number,

  /**
   * Set page attribute.
   */
   page: PropTypes.number,

   /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details.
   */
  sx: PropTypes.object,
}

export default TablePagination;