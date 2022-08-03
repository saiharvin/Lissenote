import ExampleImage from '../../assets/Main/download1.png';
import './Example.css';

function Example() {
    return (
      <div className='exampleBody'>
        <div className='titleimg'>
          <h1>Lorem Ipsum</h1>
          <div className='image'>
            <img src={ExampleImage} alt="example" />
          </div>
        </div>
        <div className='textside'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie tristique sapien eget tempus. Aliquam et placerat nunc. Proin mi justo, varius sit amet ipsum quis, congue gravida ligula. Nam rhoncus blandit porta. Donec eu auctor tortor. Sed in tortor tellus. Nulla facilisi.</p>
        </div>
        
        <div className='textdown1'>
          <p>Donec blandit lorem quis varius dignissim. Suspendisse dapibus sed augue ut ultrices. Cras mollis velit a diam posuere pretium. Donec at eros sed diam vestibulum luctus. Vivamus tristique nulla facilisis enim vestibulum, vel euismod urna hendrerit. Aliquam erat volutpat. </p>
        </div>
        <div className='textdown2'>
          <p>Nunc mattis dictum felis, ac efficitur lectus gravida sed. Phasellus ut mi magna. Phasellus non nibh a dui lobortis porta. Curabitur id pharetra turpis. Maecenas efficitur nulla eget condimentum viverra.</p>
        </div>
      </div>
    );
}


export default Example;
