import './App.css'
import { Sidebar } from './components/Sidebar'
import { Searchbar } from './components/Searchbar'
import { Home } from './components/Home'

function App() {

  return (
    <div className='p-5 bg-[#10141E] flex'>

      <div className='fixed top-5 left-5 z-10 h-screen w-[250px]'>
        <Sidebar/>
      </div>

      <div className=' w-[1440px] mx-auto p-4'>
        <Searchbar/>
        <Home/>
      </div>
    </div>
  )
}

export default App
