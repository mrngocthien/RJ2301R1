
import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({text}) {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
};

