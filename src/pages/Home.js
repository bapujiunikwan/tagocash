import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FasstSection from '../components/home/FasstSection'
import PaymentProcess from '../components/home/PaymentProcess'
import NewsLetterSection from '../components/home/NewsLetterSection'
import DownloadApp from '../components/home/DownloadApp'
import BlogSection from '../components/home/BlogSection'
import MoreWithTagoCash from '../components/home/MoreWithTagoCash'
import Faq from '../components/home/Faq'


const Home = () => {
  return (
    <div>
      <HeroSection />
      <FasstSection/>
      <PaymentProcess/>
      <DownloadApp/>
      <MoreWithTagoCash/>
      <BlogSection />
      <Faq/>
      <NewsLetterSection/>
    </div>
  )
}

export default Home
