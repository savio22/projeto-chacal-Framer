import './framer/styles.css'

import GridTransitionFramerComponent from './framer/grid-transition'
import FaqContentFramerComponent from './framer/faq-content'
import HeadlineOnScrollFramerComponent from './framer/headline-on-scroll'
import UnderlineCardFramerComponent from './framer/underline-card'
import BgLiquidFramerComponent from './framer/bg-liquid'
import CardFramerComponent from './framer/card'
import TextAnimationFramerComponent from './framer/text-animation'
import SlideTopAnimationFramerComponent from './framer/slide-top-animation'
import TextUnderlineFramerComponent from './framer/text-underline'
import PricingFramerComponent from './framer/pricing'
import BlogCardFramerComponent from './framer/blog-card'
import ButtonUnderlineFramerComponent from './framer/button-underline'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(239,_238,_236)]'>
      <GridTransitionFramerComponent.Responsive/>
      <FaqContentFramerComponent.Responsive/>
      <HeadlineOnScrollFramerComponent.Responsive/>
      <UnderlineCardFramerComponent.Responsive
        tag={"Goal-Oriented"}
        index={"/01"}
        title={"Discovery & Strategy"}
        textColor={"rgb(34, 39, 37)"}
        background={"rgb(239, 238, 236)"}
        borderColor={"rgb(84, 84, 84)"}
      />
      <BgLiquidFramerComponent.Responsive
        playing={true}
        startTime={0}
      />
      <CardFramerComponent.Responsive
        color={"rgb(34, 39, 37)"}
        title={"Edu Motion"}
        shortDesc={"Developed an animated video series for an educational platform to simplify complex topics."}
      />
      <TextAnimationFramerComponent.Responsive
        loop={false}
        color={"rgb(34, 39, 37)"}
        delay={0}
        duration={2}
        repeatTime={0}
        textContent={"Seamless "}
        delayBetweenLoops={0}
        transitionDirection={"Bottom to Top"}
      />
      <SlideTopAnimationFramerComponent.Responsive
        background={"rgb(239, 238, 236)"}
      />
      <TextUnderlineFramerComponent.Responsive
        index={"01"}
        title={"Website Design & Development"}
      />
      <PricingFramerComponent.Responsive
        feat={"Modern Design"}
        link={"/contact"}
        feat2={"Responsive "}
        feat3={"Easy Edits"}
        feat4={"Content Ready"}
        feat5={""}
        feat6={""}
        feat7={""}
        feat8={""}
        feat9={""}
        price={"$2,000"}
        feat10={""}
        padding={"28px"}
        planInfos={"Perfect for new businesses or single projects"}
        planTitle={"Starter"}
      />
      <BlogCardFramerComponent.Responsive
        date={"Jan 1, 2025"}
        title={"Crafting Bold Brands"}
      />
      <ButtonUnderlineFramerComponent.Responsive
        link={"/work"}
        color={"rgb(21, 21, 19)"}
        title={"All WORK"}
        invert={0}
        newTab={false}
        underline={"rgb(21, 21, 19)"}
        blendingMode={"Difference"}
        backgroundLayer={"rgb(239, 238, 236)"}
      />
    </div>
  );
};