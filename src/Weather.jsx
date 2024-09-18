import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faSun, faCloudRain,faSmog,faCloudBolt} from '@fortawesome/free-solid-svg-icons';

const WEATHER_ICON = {
    Sunny: <FontAwesomeIcon icon={faSun} className='text-2xl text-yellow-400' />,
    "Partly Cloudy": <FontAwesomeIcon icon={faSmog} className='text-2xl text-blue-400'/>,
    Cloudy: <FontAwesomeIcon icon={faCloud} className='text-2xl text-blue-200'/>,
    Rain: <FontAwesomeIcon icon={faCloudRain} className='text-2xl text-blue-400' />,
    Snow: <FontAwesomeIcon icon={faCloudBolt} className='text-2xl text-blue-700'/>,
  };
  
  const Weather =(props)=>{
    const {weather} = props;
  
    return(
  
      <div className=" w-36 flex flex-col p-2 m-2 bg-white shadow-md" >
        <div>
        {weather.day}
        </div>
        <div className="p-2">
        {WEATHER_ICON[weather.description]}
        </div>
  
        <div className="flex justify-between">
            <div>
        {weather.low_temp}
        </div>
        <div>
        {weather.high_temp}
        </div>
        
        </div>
        
      
        
      </div>
      
    );
  };
  
  export default Weather;