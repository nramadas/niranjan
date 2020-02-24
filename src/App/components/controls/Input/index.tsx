import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  label: string;
}

const Input = (props: Props) => {
  const { className, icon, label, ...rest } = props;

  return (
    <label
      className={cx(className, styles.container, {
        [styles.withIcon]: !!icon,
      })}
    >
      <input {...rest} className={styles.input} placeholder="&nbsp;" />
      <div className={styles.label}>{label}</div>
      {icon &&
        React.cloneElement(icon, {
          className: cx(icon.props.className, styles.icon),
        })}
    </label>
  );
};

export default Input;
