import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jobs from './components/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col h-full bg-secondary w-full' >
        <div className='bg-slate-700 bg-opacity-20' >
          <div className='lg:bg-bg_1 bg-bg_2 bg-cover flex p-4 w-full lg:bg-contain h-[200px]' >
        </div>
        <div className='flex bg-bg1' >
          <Jobs/>
        </div>
      </div>
    </div>
  )
}

export default App
