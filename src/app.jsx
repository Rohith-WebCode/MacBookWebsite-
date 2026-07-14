import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from 'gsap/all'
import ShowCase from './components/ShowCase'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div>
       <NavBar/>
       <Hero/>
       <ProductViewer/>
       <ShowCase/>
    </div>
  )
}

export default App