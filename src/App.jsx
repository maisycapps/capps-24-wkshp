import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {

  const [puppies, setPuppies] = useState(puppyList) 
  const [featPupId, setFeatPupId] = useState(null)

  const featuredPup = puppies.find((pup) => {
   return pup.id === featPupId
  })
  console.log(featuredPup);

  return (
    <>
      <div className="App">
        <div className='List'>
        {
          puppies.map((puppy) => {
            return <p className="puppyPs" key={puppy.id} onClick={() => { setFeatPupId(puppy.id)}}>{puppy.name}</p>
          })
        }
        </div>
        {featPupId ? (
        <div className='Feat'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li><b>Age:</b> {featuredPup.age}</li>
            <li><b>Email:</b> <a href="featuredPup.email">{featuredPup.email}</a></li>
          </ul>
        </div>
      ) : <h2>Please Select a Dog</h2> }

      </div>
    </>
  )
}

export default App
