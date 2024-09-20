import logo from './logo.svg';
import './App.css';
import Tabs from './Tab';
import ImageSlider from './ImageSlider';

function App() {
  return (
    <div className="container mx-auto  bg-gray-600 ">
      <div className=' gap-8 columns-2'>
        <div className=" bg-gray-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
        </div>
        <div className='bg-gray-400' >
          <Tabs />
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default App;
