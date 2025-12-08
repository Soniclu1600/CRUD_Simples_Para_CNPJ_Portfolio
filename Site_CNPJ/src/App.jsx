import { useState } from 'react'
import './App.css'
import RouterApp from './routes'
import { useEffect } from 'react'
import { fetchMunicipios } from './services/fetchAPI.js'

function App() {
  const [count, setCount] = useState(0)

  // const [Cities] = useState([])
  
  // const fetchCities = async () => {
  //     try {
  //         Cities = await fetchMunicipios();
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  // useEffect(() => {
  //     fetchCities()
  // }, []);

  return (
    <>
      <RouterApp/>
    </>
  )
}

export default App
