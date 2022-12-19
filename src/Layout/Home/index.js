import React from 'react'
import FooterSection from '../Footer/FooterSection'
import NavBAr from '../header/header'
import Fund from './Fund'
import Container from './section'
import Contents from './Contents'
import Subscriptions from './Subscriptions'

const HomePage = () => {
  return (
    <>
    {/* <FooterSection /> */}
    <NavBAr />
    <Container />
    <Contents />
    <Fund />
    <Subscriptions />
    <FooterSection />
  </>
  )
}

export default HomePage