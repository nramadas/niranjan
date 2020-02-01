import React from 'react';

import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const MainTitle = ({ children }: Props) => (
  <span className={styles.mainTitle}>{children}</span>
);

export default MainTitle;
