import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cx from 'classnames';

import styles from './index.module.scss';

const LinkButton = (props: LinkProps) => (
  <Link className={cx(props.className, styles.link)} {...props} />
);

export default LinkButton;
