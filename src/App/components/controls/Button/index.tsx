import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={cx(props.className, styles.button)} {...props} />
);

export default Button;
