

import { Navbar, Hero, GetStarted, Milestones, Services, Works, Testimonial, FAQ, Footer } from './Components'
import './App.css'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <div id="Home" className='bg-slate-950'>
        <Hero />
      </div>
      <div id="GetStarted" className='bg-slate-950 flex justify-center shadow-md shadow-slate-800 lg:justify-start lg:px-28 xl:pb-16 xl:px-32'>
        <GetStarted />
      </div>
      <div id="Milestones" className='bg-slate-100 shadow-md shadow-slate-800'>
        <Milestones />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="Works">
        <Works />
      </div>
      <div id="Testimonial" className='bg-slate-950 flex justify-center shadow-md shadow-slate-800'>
        <Testimonial />
      </div>
      <div id="FAQ">
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default App;

