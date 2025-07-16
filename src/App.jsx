import GooeyNav from './component/GooeyNav'
import Beams from './component/Beams';
import './App.css'
import SplashCursor from './component/SplashCursor';
import BlurText from './component/BlurText';
import RotatingText from './component/RotatingText';
import TrueFocus from './component/TrueFocus';
import InfiniteScroll from './component/InfiniteScroll';
import TextPressure from './component/TextPressure';
import FlowingMenu from './component/FlowingMenu';
import ImageTrail from './component/ImageTrail';
import CardSwap, { Card } from './component/CardSwap'
import { useState } from 'react';
import FuzzyText from './component/FuzzyText';
import InfiniteMenu from './component/InfiniteMenu';
import ScrollVelocity from './component/ScrollVelocity';
import CircularGallery from './component/CircularGallery';
import { useRef } from 'react';
import VariableProximity from './component/VariableProximity';
import Crosshair from './component/Crosshair';
import FallingText from './component/FallingText';
import BlobCursor from './component/BlobCursor';
import SpotlightCard from './component/SpotlightCard';
import infimenu1 from './assets/infimenu1.svg';
import infimenu3 from './assets/inifmenu3.svg';
import infimenu4 from './assets/infimenu4.svg';
import inifmenu5 from './assets/inifmenu5.svg';
import resumePdf from './assets/Resume-Shravan.pdf';
function App() {
  const containerRef = useRef(null);

  // Function to download resume
  const downloadResume = (e) => {
    e?.preventDefault();
    try {
      const link = document.createElement('a');
      link.href = resumePdf;
      link.download = 'Resume-Shravan.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Fallback for browsers that don't support download attribute
      setTimeout(() => {
        window.URL.revokeObjectURL(link.href);
      }, 100);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open(resumePdf, '_blank');
    }
  };

const items1 = [
  {
    image: infimenu1,
    link: 'https://github.com/shravanramakunja/BreifBot',
    title: 'BriefBot',
  },
  {
    image: infimenu3,
    link: 'https://github.com/shravanramakunja/DataAnalysis',
    title: 'Data Analysis',
  },
  {
    image: infimenu4,
    link: 'https://github.com/shravanramakunja/BrewedAtNight',
    title: 'Brewed at Night',
  },
  {
    image: inifmenu5,
    link: 'https://drive.google.com/drive/folders/1JGwqipErwHlj4vi7V5tvkJ784UCe9vfS',
    title: 'Graphic Design',
  }
];












const [velocity, _setVelocity] = useState(125)




  const [isCardSwapHovered, setIsCardSwapHovered] = useState(false);
  
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const scrollItems = [
    { content: "Pursuing CSE in MVJCE BANGLORE" },
    { content: <h1>Scroll or Drag to Know More</h1> },
    { content: "Passionated about desgining User Interfaces" },
    { content: "Currently into Data Science" },
    { content: <p>Just finding those expose api key is currently what i am doing</p> },
    { content: "Exploring the world of AI and ML" },
  ];

  const items = [
    { label: "Home", href: "#" },
    { label: "Github", href: "https://github.com/shravanramakunja", target: "_blank" },
    { label: "Resume", onClick: downloadResume }
  ];

  
const demoItems = [
  {  text: 'React', image: 'https://picsum.photos/600/400?random=1' },
  {  text: 'Javascript', image: 'https://picsum.photos/600/400?random=2' },
  {text: 'Pandas', image: 'https://picsum.photos/600/400?random=3' },
  {  text: 'Python', image: 'https://picsum.photos/600/400?random=4' }
];

  return (
    <>
      {/* Background Effects */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#000',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      {/* Decreased SPLAT_RADIUS for less spreading */}
      <SplashCursor SPLAT_RADIUS={0.08} excludeSelector=".flowing-menu-container, .cardswap-container, .variable-proximity-container, #variable-proximity-section, .crosshair-container, .infinite-menu-container" />

      {/* GooeyNav in top-right corner */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 10,
          padding: '2rem',
        }}
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-transparent overflow-hidden">
        <div className="flex flex-col">
          <BlurText
            text="Hey, I'm Shravan Ramakunja"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-8xl mb-4 text-white font-bold text-center"
          />
          <RotatingText
            texts={['Future Engineering', 'React Enthusiast', 'Day Dreamer', 'Graphic Designer']}
            mainClassName="text-4xl text-white font-bold overflow-hidden self-start"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </section>

      {/* TRUE FOCUS SECTION with font size matching TextPressure */}
      <section className="relative z-20 flex justify-center items-center mb-6">
        <TrueFocus 
          sentence="About Me"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={1}
          pauseBetweenAnimations={0.5}
          className="text-white font-bold text-[clamp(3rem,8vw,7rem)]"
        />
      </section>

      {/* INFINITE SCROLL SECTION with top margin */}
      <div style={{ height: '500px', position: 'relative' }} className="mt-12">
        <InfiniteScroll
          items={scrollItems}
          isTilted={true}
          tiltDirection='left'
          autoplay={true}
          autoplaySpeed={0.1}
          autoplayDirection="down"
          pauseOnHover={true}
          className="text-white"
        />
      </div>

      <div style={{position: 'relative', height: '300px'}}>
        <TextPressure
          text="Tech Stack"
          flex={false}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={25}
        />
      </div>
<div style={{ height: '600px', position: 'relative' }} className="flowing-menu-container">
  <FlowingMenu items={demoItems} />
</div>







<div 
  style={{ height: '600px', position: 'relative' }} 
  className="cardswap-container"
  onMouseEnter={() => setIsCardSwapHovered(true)}
  onMouseLeave={() => setIsCardSwapHovered(false)}
>
  {/* ImageTrail overlay - positioned before other elements */}
  {isCardSwapHovered && (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 20,
      pointerEvents: 'auto'
    }}>
      <ImageTrail
        items={[
          'https://picsum.photos/id/100/300/300',
          'https://picsum.photos/id/200/300/300',
          'https://picsum.photos/id/300/300/300',
          'https://picsum.photos/id/400/300/300',
          'https://picsum.photos/id/500/300/300',
          'https://picsum.photos/id/600/300/300',
          'https://picsum.photos/id/700/300/300',
          'https://picsum.photos/id/800/300/300',
        ]}
        variant={1}
      />
    </div>
  )}

  {/* Education BlurText positioned to the left */}
  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
    <BlurText
      text="EDUCATION"
      delay={150}
      animateBy="words"
      direction="top"
      className="text-6xl font-bold text-white"
    />
  </div>
  
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={2400}
    pauseOnHover={false}
  >
    <Card>
      <SpotlightCard 
        className="h-full min-h-[300px]" 
        spotlightColor="rgba(82, 39, 255, 0.4)"
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl font-bold text-white mb-4">MVJ COLLEGE OF ENGINEERING BANGALORE</h1>
          <p className="text-xl font-bold text-white mb-2">BE IN COMPUTER SCIENCE</p>
          <h2 className="text-2xl font-bold text-white">CGPA: 8.5</h2>
        </div>
      </SpotlightCard>
    </Card>
    <Card>
      <SpotlightCard 
        className="h-full min-h-[300px]" 
        spotlightColor="rgba(82, 39, 255, 0.4)"
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl font-bold text-white mb-4">VIVEKANANDA PU COLLEGE PUTTUR</h1>
          <p className="text-xl font-bold text-white mb-2">PUC IN SCIENCE</p>
          <h2 className="text-2xl font-bold text-white">Percentage: 96%</h2>
        </div>
      </SpotlightCard>
    </Card>
  </CardSwap>
</div>

{/* FuzzyText positioned right after the cardswap container */}
<div className="relative flex justify-center items-center py-28">
  <FuzzyText 
    baseIntensity={0.2} 
    hoverIntensity={0.8} 
    enableHover={true}
    className="text-white text-4xl font-bold"
    style={{ overflow: 'visible' }}
  >
    Works
  </FuzzyText>
</div>


<div className="relative flex justify-center items-center py-8">
  <BlurText
    text="Drag the Circle to know more"
    delay={150}
    animateBy="words"
    direction="top"
    className="text-white text-3xl font-bold"
  />
</div>

{/* InfiniteMenu positioned right below Works (FuzzyText) and above ScrollVelocity */}
<div 
  className="infinite-menu-container w-full h-screen relative"
  onMouseMove={(e) => {
    // Dispatch a custom event that BlobCursor can listen to
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    window.dispatchEvent(new CustomEvent('infiniteMenuMouseMove', { 
      detail: { x, y, containerRect: rect } 
    }));
  }}
>
  <InfiniteMenu items={items1}/>
  <div 
    id="blob-cursor-container"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    }}
  >
    <BlobCursor
      blobType="circle"
      fillColor="#FF0000"
      trailCount={3}
      sizes={[60, 125, 75]}
      innerSizes={[20, 35, 25]}
      innerColor="rgba(255,255,255,0.8)"
      opacities={[0.6, 0.6, 0.6]}
      shadowColor="rgba(0,0,0,0.75)"
      shadowBlur={5}
      shadowOffsetX={10}
      shadowOffsetY={10}
      filterStdDeviation={30}
      useFilter={true}
      fastDuration={0.1}
      slowDuration={0.5}
      zIndex={100}
    />
  </div>
</div>

{/* "Drag to Know More" text between Works and InfiniteMenu */}


<ScrollVelocity
  texts={['DESIGNWORKS','PHOTOGRAPHY']} 
  velocity={velocity} 
  className="custom-scroll-text"
/>




<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>


<div
id="variable-proximity-section"
ref={containerRef}
style={{position: 'relative', height: '300px', padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
className="variable-proximity-container"
>
  <VariableProximity
    label={'Connect with me'}
    className={'variable-proximity-demo text-white font-bold text-6xl'}
    fromFontVariationSettings="'wght' 300"
    toFontVariationSettings="'wght' 900"
    containerRef={containerRef}
    radius={150}
    falloff='exponential'
  />
</div>

{/* Crosshair Component */}
<div className="crosshair-container" style={{ height: '400px', position: 'relative', backgroundColor: 'transparent', marginTop: '30px', zIndex: 1000 }}>
  <div ref={containerRef} style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
    <Crosshair containerRef={containerRef} color='#ffffff'/>
  </div>
</div>

{/* BlurText between Crosshair and FallingText */}
<div className="relative flex justify-center items-center py-8">
  <BlurText
    text=""
    delay={150}
    animateBy="words"
    direction="top"
    className="text-white text-5xl font-bold text-center"
  />
</div>

{/* Scroll Down Indicator */}
<div className="relative flex flex-col justify-center items-center py-6">
  <BlurText
    text="Scroll Down"
    delay={200}
    animateBy="words"
    direction="top"
    className="text-white text-3xl font-bold text-center mb-4"
  />
  <div className="animate-bounce">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</div>

{/* FallingText with proper container and spacing */}
<div className="falling-text-container" style={{ height: '400px', position: 'relative', marginTop: '50px', padding: '20px', color: '#ffffff' }}>
  <FallingText
    text={`Made using Reactbits.dev .`}
    highlightWords={["React", "Bits", "animated", "components", "simplify"]}
    highlightClass="highlighted"
    trigger="scroll"
    backgroundColor="transparent"
    wireframes={false}
    gravity={0.56}
    fontSize="2rem"
    mouseConstraintStiffness={0.9}
    style={{ color: '#ffffff' }}
  />
</div>

    </>
  );
}

export default App;
