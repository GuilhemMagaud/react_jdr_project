import React from 'react';

import Image from './bgImage.png'
import { styled } from '@mui/material';
import SectionPerso from './SectionPerso/common/componentes/SectionPerso';

const MainStyle = styled("div")({
  backgroundImage: `url(${Image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
})

function App() {
  

  return (
    <MainStyle>
      <SectionPerso />  
    </MainStyle>
  );
}

export default App;
