
import './App.css'
import stockdata from './Getstockdata.tsx'


function App() {

  console.log(stockdata())

  return (
    <>

      {stockdata()}
    </>
  )
}

export default App
