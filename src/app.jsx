import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div>
       <NavBar/>
       <Hero/>
       <ProductViewer/>
    </div>
  )
}

export default App