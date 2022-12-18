import React from 'react'
import Contents from './components/header/Contents';
import Fund from './components/header/Fund';
import NavBAr from './components/header/header';
import Container from './components/header/section';
import Subscriptions from './components/header/Subscriptions';

function App() {
  return (
    <>
      <NavBAr />
      <Container />
      <Contents />
      <Fund />
      <Subscriptions />
    </>
  );
}

export default App;
