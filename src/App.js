import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight,faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './App.css';

import {useEffect,useState} from "react";
import Weather from "./Weather";

const App = () => {

const [weather,setWeather] = useState([]);
const [isLoading,setIsLoading] = useState(true);
const [refreshCount,setRefreshCount] = useState(0);
  
const fetchingData = async ()=>{
  
  const response = await fetch("https://api.react-formula.com/learning-api/demos/weather-forecast/weather");

  const data = await response.json();
  
  setWeather(data);
  
  setIsLoading(false);
};


  const refresher=()=>{
  setRefreshCount(refreshCount+1);
    console.log(refreshCount)
}
  

  useEffect(()=>{
    fetchingData();
    },[refreshCount])


  
  const allWeek = weather.map((day,index)=> <Weather weather={day} key={index} /> )
  
  return (
    <div className="min-h-screen bg-stone-100 relative flex justify-center items-center" >
      <div className="innerContainer  w-full max-w-4xl flex flex-wrap items-center justify-center">
      {
        !isLoading ?
        
      allWeek
    
        :
        
        <FontAwesomeIcon className='animate-spin text-4xl text-green-400' icon={faCircleNotch} />
      
      }
    </div>
      <button
        onClick={()=>{
          refresher();
        }}
        className="absolute p-1 rounded-lg bg-teal-200 border border-teal-700 left-5 top-5 "><FontAwesomeIcon  icon={faRotateRight} /></button>
  </div>
    );
};

export default App;
