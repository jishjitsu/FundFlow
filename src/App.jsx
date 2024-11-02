import './index.css';
import Login from './Login';
import logo from './assets/F__4_-removebg-preview.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import buildings from './assets/Buildings.png';

function App() {
  return (
    <div className="body">
    <Parallax pages={2}>
        <ParallaxLayer 
          offset={0} 
          speed={1} 
          className='h-screen m-0 p-0'
        >
          <div className='flex flex-col items-center justify-center h-full'>
            <img 
              src={logo} // Adjust the path as necessary
              alt="FundFlow Logo"
              className="w-[100px] h-[100px] mb-6" // Added margin to space it from the text
            />
            <h1 className='font-Poleno text-6xl text-black text-shadow-md animate-fadeIn'>
              Your Money Matters
            </h1>
            <h6 className='text-2xl text-[#d9d6ba] mt-4 animate-fadeIn delay-200'>
              Let’s turn Small Investments into Big Gains
            </h6>
          </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={0.1} 
          factpr={1}
          className='h-screen m-0 p-0 flex items-center justify-center'
        >
          <img src={buildings} alt="Buildings" className="absolute bottom-0 w-full" />
        </ParallaxLayer>

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
