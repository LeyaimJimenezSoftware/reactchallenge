import React from 'react'
import tour from './utils/tour'
import './App.css'
import CardComponent from './components/Card'

function App() {
  return (
    <div className="App">
      {Object.keys(tour).map((county, i) => <CardComponent key={i} images={tour[county].images} name={tour[county].name} description={tour[county].description} /> )}
    </div>
  )
}

export default App
