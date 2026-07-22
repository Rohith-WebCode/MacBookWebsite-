import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import {ScrollTrigger,SplitText} from 'gsap/all'
import ShowCase from './components/ShowCase'
import Features from './components/Features'
import Performance from './components/performance'
import Highlight from './components/Highlight'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div>
       <NavBar/>
       <Hero/>
       <ProductViewer/>
       <ShowCase/>
       <Performance/>
       <Features/> 
       <Highlight/>    
       <Footer/>
    </div>
  )
}

export default App