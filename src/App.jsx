
import {useState, useEffect} from'react'
import './App.css'
import Home from './pages/Home';
import Preloader from './pages/Preloader';



function App() {
  const [isLoading, setIsLoading] = useState(true);

    // Simulate loading for 3 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false); // Hide preloader
      }, 1000); // Adjust time as needed
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
       <div className="App">
      {isLoading ? (
        <Preloader/> // Show preloader while loading
      ) : (
        // Main content
        <Home/>
      )}
    </div>  
    </>
  )
}

export default App
