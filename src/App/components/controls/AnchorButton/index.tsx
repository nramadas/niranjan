import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

const AnchorButton = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={cx(props.className, styles.link)} target="_blank" {...props} />
);

export default AnchorButton;
