import Article from "./sections/Article/Article"
import Faq from "./sections/FAQ/Faq"
import HowItWorks from "./sections/HowItWorks/HowItWorks"
import MainTop from "./sections/MainTop/MainTop"
import OurSERVICES from "./sections/OurSERVICES/OurSERVICES"
import Partners from "./sections/Partners/Partners"
import PricingPlan from "./sections/PricingPlan/PricingPlan"
import Reviews from "./sections/Reviews/Reviews"
import TopFeature from "./sections/topFeature/TopFeature"
import WhyChoose from "./sections/WhyChoose/WhyChoose"


function Home() {
  return (
    <>
      <MainTop/>
      <TopFeature/>
      <Partners/>
      <OurSERVICES/>
      <WhyChoose/>
      <HowItWorks/>
      <Reviews/>
      <Article/>
      <PricingPlan/>
      <Faq/>
    </>
  )
}
export default Home