import React from 'react';

import { MainTitle } from '../../typography';
import AnchorButton from '../../controls/AnchorButton';
import LinkButton from '../../controls/LinkButton';

import styles from './index.module.scss';

const Root = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <MainTitle>Niranjan</MainTitle>
        </div>
        <div className={styles.links}>
          <LinkButton to="/blog">blog</LinkButton>
          <LinkButton to="/projects">projects</LinkButton>
          <AnchorButton href="https://github.com/nramadas">github</AnchorButton>
        </div>
      </div>
    </div>
  );
};

export default Root;
