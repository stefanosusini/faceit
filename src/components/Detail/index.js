import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import utilsStyles from '../../scss/utils.module.scss';

import styles from './index.module.scss';

let Detail = ({ className, delimiter = '/', loading, label, values }) => {
  return (
    <div className={classNames(styles.container, {
      [utilsStyles.placeholderBackground]: loading,
    }, className)}>
      {!loading && (
        <>
          <strong className={styles.values}>{values.join(delimiter)}</strong>
          <span className={styles.label}>{label}</span>
        </>
      )}
    </div>
  );
};

Detail = memo(Detail);

Detail.propTypes = {
  className: PropTypes.string,
  delimiter: PropTypes.node,
  loading: PropTypes.bool,
  label: PropTypes.node,
  values: PropTypes.arrayOf(PropTypes.node),
};

export default Detail;
