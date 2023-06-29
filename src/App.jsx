
import Navigation from './Components/Navigation'
import Main from "./Components/Main"
import Card from "./Components/Card"
import Data from "./Data"
import './App.css'


function App() {

  
const Cards = Data.map((item)=>{
  return (
    <Card 
    key = {item.id}
    item = {item}
    />
  )
})

  return (
    <div className='app--container'>
        <Navigation/>
        <Main/>
        <div className="card--container">{Cards}</div>
        
    </div>
  )
}

export default App
