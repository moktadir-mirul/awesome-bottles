import { Suspense } from 'react'
import './App.css'
import AllBottles from './components/bottles/AlBottles'



function App() {

  const bottlePromise = fetch('bottles.json').then(res => res.json())

  return (
    <Suspense fallback={<h1>Data is loading . . . . . . .</h1>}>
      <AllBottles bottlePromise={bottlePromise}></AllBottles>
    </Suspense>
  )
}

export default App
