import './index.css';
import Login from './Login';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import buildings from './assets/Buildings.png';

function App() {
  return (
    <div className="body">
      <Parallax pages={2}>
        <ParallaxLayer 
          offset={0} 
          speed={1} 
          className='bg-[#11a14a] h-screen m-0 p-0'
        >
          <h2 className='flex items-center justify-center h-full m-0 text-6xl text-[#d9d6ba]'>
            Your Money Matters
          </h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={0.05} 
          className='h-screen m-0 p-0 flex items-center justify-center'
        >
          <img src={buildings} alt="Buildings" className="absolute bottom-0 w-full" />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={3}
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
