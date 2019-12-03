import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './index.module.scss';

let Action = ({ className, label, disabled, onClick }) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    if (onClick && !disabled) onClick(evt);
  };

  return (
    <button className={classNames(styles.container, className)}
            onClick={handleClick}
            disabled={disabled}>
      {label}
    </button>
  );
};

Action = memo(Action);

Action.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Action;
