import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import utilsStyles from '../../scss/utils.module.scss';

import styles from './index.module.scss';

let Name = ({ className, name, loading }) => {
  return (
    <div className={classNames(
      styles.container,
      { [utilsStyles.placeholderBackground]: loading },
      className
    )}>
      <p className={classNames(
        styles.text,
        { [utilsStyles.placeholderBackground]: loading }
      )}>{!loading && name}</p>
    </div>
  );
};

Name = memo(Name);

Name.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  loading: PropTypes.bool,
};
Name.defaultProps = {
  loading: false,
};

export default Name;
