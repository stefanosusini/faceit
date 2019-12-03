import React  from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import styles from "./index.module.scss";

const popUpClassNames = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  enterDone: styles.enterDone,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

// This component is not complete. In a real prod environment it would
// include a lot more configuration logic.
const PopUp = ({ renderChildren, visible }) => {
  return (
    <CSSTransition in={visible} timeout={300} classNames={popUpClassNames}>
      <div className={styles.container}>
        {renderChildren()}
      </div>
    </CSSTransition>
  );
};

PopUp.propTypes = {
  renderChildren: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default PopUp;
