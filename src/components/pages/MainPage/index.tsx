import React from 'react';
// import styled from 'styled-components';
import style from './MainPage.module.scss';

import PageWrapper from '../../common/PageWrapper';

// const HeaderStyle = { backgroundColor: 'blue', fontSize: '25px' };
// const FooterStyle = { backgroundColor: 'red', fontSize: '20px' };

// const DescriptionWrapper = styled('div')`
//   color: green;
//   font-size: 58px;
//   margin: 30px;
// `;

const MainPage = () => (
  <PageWrapper>
    <main className={style.content}>
      <h1>Main content</h1>
    </main>
  </PageWrapper>
);

export default MainPage;
