import React from 'react';
import PropTypes from 'prop-types';
import "./Tip.css";

export const Tip = ({ message }) => {
  return (
    <div className="storybook-tip-container">
      <div className="storybook-tip-icon">Tip</div>
      <div className="storybook-tip-message">
        {message}
      </div>
    </div>
  );
}

Tip.propTypes = {
  message: PropTypes.string.isRequired
};
