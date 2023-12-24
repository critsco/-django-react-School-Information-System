import React from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import './tailwind.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='px-[5%]'>
          <Form />
        </div>
      </div>
    )
  }
}

export default App;
