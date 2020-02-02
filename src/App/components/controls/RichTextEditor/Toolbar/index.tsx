import React from 'react';
import cx from 'classnames';

import * as controls from './controls';

import styles from './index.module.scss';

interface Props {
  className?: string;
}

const Toolbar = (props: Props) => (
  <div className={cx(props.className, styles.toolbar)}>
    <controls.Bold />
    <controls.Italic />
    <controls.Underline />
    <controls.Code />
    <controls.H1 />
    <controls.H2 />
    <controls.Blockquote />
    <controls.OL />
    <controls.UL />
  </div>
);

export default Toolbar;
