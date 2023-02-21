import React,{useState , useEffect} from 'react'


const App = () => {

  const [ time , setTime] = useState();


  useEffect(() => {
 
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000 );

    return () => clearInterval(interval);

  } , []);

  return (
    <div>
      <h1>Local Time Using Hook : </h1>
      <h2>Time is {time.toLocaleString()}</h2>
    </div>
  )
}

export default App;
