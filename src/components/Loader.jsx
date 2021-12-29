import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Loader = () => {
 return (
  <div className='containerLoader'>
   <h2>Uploading</h2>
   <LinearProgress />
  </div>
 )
}

export default Loader
