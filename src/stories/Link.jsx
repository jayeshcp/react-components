import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

export const Link = ({ href, label, title }) => {
  return (
    <a className="link" href={href} title={title}>{label}</a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string
};

Link.defaultProps = {
  title: null
}
