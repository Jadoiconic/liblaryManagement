import React from 'react'
import FooterSection from '../../Layout/Footer/FooterSection'
import NavBAr from '../../Layout/header/header'
import Fund from './Fund'
import Container from './section'
import Contents from './Contents'
import Subscriptions from './Subscriptions'

const HomePage = () => {
  return (
    <>
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