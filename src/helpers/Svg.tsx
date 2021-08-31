import React from 'react';
import PropTypes from 'prop-types';

function Svg({ children, title, ...props }) {
  return (
    <Element
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      {title && <title>{title}</title>}
      {children}
    </Element>
  )
}

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string,
}

export default Svg
