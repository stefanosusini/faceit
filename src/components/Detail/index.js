import React, { memo } from 'react';
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

export default Detail;
