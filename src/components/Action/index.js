import React, { memo } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

let Action = ({ className, label, disabled, onClick }) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    if (onClick) onClick(evt);
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

export default Action;
