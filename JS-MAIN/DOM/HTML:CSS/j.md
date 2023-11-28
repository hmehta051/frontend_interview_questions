```bash
import React,{useState,useRef} from 'react';
import './style.scss';

export default function App() {
  const [click,setClick]=useState(0);
  const [hover,setHover]=useState(0);
  const [timer,setTimer]=useState(0);
  const timerRef=useRef(null); // for useMemo take useState and pass as dependency
  const [progress,setProgress]=useState(0);

  React.useEffect(()=>{
    const interVal=setTimeout(()=>{
      if(progress<100){
        setProgress((p)=>p+10)
      }else{
        clearTimeout(interVal)
      }
    },1000)

    return ()=>clearTimeout(interVal)
  },[progress])
  const handleStart=()=>{
    if(!timerRef.current){
      const timerID=setInterval(()=>{
        setTimer((p)=>p+1);
      },500);
      timerRef.current=timerID;
    }
  }
  const handleStop=()=>{
    if(timerRef.current){
      clearInterval(timerRef.current);
      timerRef.current=null;
    }
  }
  const handleReset=()=>{
    setTimer(0);
    if(timerRef.current){
      clearInterval(timerRef.current);
      timerRef.current=null;
    }
  }

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
    <div className="constant">
      <h2>Star Rating</h2>
      <div>
        {
          [...Array(5)].map((_,index)=>{
            index+=1;
            return (
              <span
              onClick={()=>setClick(index)}
              onMouseEnter={()=>setHover(index)}
              onMouseLeave={()=>setHover(click)}
              >
               
              {index<=(hover || click)? <span>&#9733;</span>:<span>&#9734;</span>}
              </span>
            )
          })
        }
      </div>
    </div>

    <div className="constant">
      <h2>Timer</h2>
      <div>
        <div>{timer}</div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>

    <div className="constant">
     <h2>Progress Bar</h2>
     <div>
      <div style={{ width: `${progress}%` }}>{progress}%</div>
      <input 
        type="range"
        min="0" 
        max="100" 
        step="1" 
        value={progress} 
        onChange={(e)=>setProgress(e.target.value)}
        disabled
        
      />
      <svg width="120" height="120">
        <circle
          className="circular-progress-circle"
          cx="60"
          cy="60"
          r={radius}
          stroke="#4CAF50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
        />
      
      </svg>
      {progress}
     </div>

     <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  );
}

```