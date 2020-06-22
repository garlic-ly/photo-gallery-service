import React from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';
import Grid from './Mygrid.jsx';


const App = () => {
  return (
    <div>
      <h1> Modern Lounge Ultra clean </h1>
      <Button>4.92 (843) </Button>
      <Button>Superhost </Button>
      <a>San Barbara, California, Unites States</a>
      <Button> Share</Button>
      <Button> Save</Button>

      {/* photos are here  */}
      <div>
      <Grid/>
      </div>

    </div>
  )
}

export default App;