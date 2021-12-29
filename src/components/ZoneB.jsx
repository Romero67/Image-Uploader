import React, { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';

const ZoneB = ({ formImg }) => {
 const [img, setImg] = useState(null);
 console.log(img);
  useEffect(() => {
    setImg(formImg.get("photo"));
  }, []);

  const handleClick = () =>{
   let aux = document.createElement('input');
   aux.setAttribute('value', img.preview);
   document.body.appendChild(aux);
   aux.select();
   //queda pendiente
   document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    aux.remove();
  }
  
  return (
    <div className="container">
      <h2>Uploaded successfully</h2>
      <div className="container-img">
        {img && <img src={img.preview} style={{ width: "100%", height: '100%' }} alt="preview" />}
      </div>
      <div>
        {img && <input type="text" className="input" defaultValue={img.preview} />}
        <Button variant="contained" onClick={handleClick}>Copy link</Button>
      </div>
    </div>
  );
};

export default ZoneB;
