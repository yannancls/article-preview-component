import React from 'react'
import FurniturePicture from './components/FurniturePicture'
import FurnitureDetails from './components/FurnitureDetails'

const App = () => {
  return (
    <>
      <div className='container'>
          <FurniturePicture />
          <FurnitureDetails />
      </div>
      
    </>
  )
}

export default App