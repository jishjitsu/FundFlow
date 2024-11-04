// App.jsx
import './index.css';
import Login from './Login';
import HeaderSection from './HeaderSection';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import buildings from './assets/Buildings.png';

function App() {
  return (
    <div className="body">
      <Parallax pages={2}>
        
        {/* Header and Feature Cards Section */}
        <ParallaxLayer 
          offset={0} 
          speed={1} 
          className='h-screen m-0 p-0'
        >
          <HeaderSection />
        </ParallaxLayer>

        {/* Buildings Background */}
        <ParallaxLayer 
          offset={1} 
          speed={0.1} 
          className='h-screen m-0 p-0 flex items-center justify-center'
        >
          <img src={buildings} alt="Buildings" className="absolute bottom-0 w-full" />
        </ParallaxLayer>

        {/* Login Section */}
        <ParallaxLayer 
          offset={1} 
          speed={2}
          factor={1.5}
          className='h-screen m-0 p-0'
        >
          <Login />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
