import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useImageLoading } from "utils/useImageLoading";
import utilsStyles from 'scss/utils.module.scss';
import blockSVG from 'assets/block.svg';

import styles from './index.module.scss';

let Avatar = ({ className, loading, name, url }) => {
  const [imageLoading, imageError] = useImageLoading(url);
  const isLoading = loading || imageLoading;
  return (
    <aside className={classNames(
      styles.container,
      { [utilsStyles.placeholderBackground]: isLoading },
      className
    )}>
      {!isLoading && imageError && <div><img src={blockSVG} alt="Error" /></div>}
      {!isLoading && !imageError && (
        <img className={styles.image} src={url} title={name} alt={name} />
      )}
    </aside>
  );
};

Avatar = memo(Avatar);

Avatar.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Avatar;
