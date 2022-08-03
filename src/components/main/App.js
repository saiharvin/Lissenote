import React from 'react'
import './App.css';
import Example from './Example.js';
import ExampleText from './ExampleSide.js'
// import Aos from 'aos'
// import 'aos/dist/aos.css'




function App() {
  return (
    <div className='bod'>
      <div className='head'>
        <p>Examples</p>
      </div>
      
      <div className='completecompo1'>
        <div className='example-compo1' data-aos="fade-right" data-aos-duration="800">
          <Example/>
        </div>
        <div className='example-text1' data-aos="fade-up" data-aos-duration="800">
          <ExampleText/>
        </div>
      </div>
      
      <div className='completecompo2'>
        <div className='example-compo2' data-aos="fade-left" data-aos-duration="800">
          <Example/>
        </div>
        <div className='example-text2' div data-aos="zoom-in-up" data-aos-duration="800">
          <ExampleText/>
        </div>
      </div>

      <div className='completecompo3'>
        <div className='example-compo3' data-aos="fade-right" data-aos-duration="800">
          <Example/>
        </div>
        <div className='example-text3' data-aos="fade-left" data-aos-duration="800">
          <ExampleText/>
        </div>
      </div>
    </div>
  );
}


export default App;