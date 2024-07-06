import { useEffect, useState } from 'react'
import './App.css'
import defaultKtKnife from './assets/defaultKtKnife.png'

const tg = (window as any).Telegram.WebApp;


function App() {
  const [counter, setCounter] = useState(0);
  //const [tap, setTap] = useState(1);

  useEffect(()=> {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <div className='h-full flex flex-col justify-center items-center h-screen main'>
        <div className='relative knife-btn' onClick={() => setCounter((prev) => prev + 1)}>
          <img src={defaultKtKnife} className='w-[200px] z-[999] absolute'/>
          <img src={defaultKtKnife} className='w-[200px] blur-lg top-0 z-0 '/>
        </div>
        <div className='block text-3xl'>{counter}</div>
        <button className='btn mt-5' onClick={onClose}>Close</button>
      </div>
      
    </>
  )
}

export default App
