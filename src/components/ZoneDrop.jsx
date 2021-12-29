import React, {useState} from 'react';
import Loader from './Loader';
import ZoneA from './ZoneA';
import ZoneB from './ZoneB';
import axios from 'axios';


const ZoneDrop = () => {
 const [values, setValues] = useState({
  cargado: false,
  loading: false,
  img: null
 }); 

 const setImg = async (img) =>{
  setValues({...values, loading: true})
  if(img){
   await axios.post('http://localhost:5000/api/img', img)
   .then(res => console.log(res))
   .catch(err => console.log(err));
  }

  setValues({
   ...values,
   img: img,
   loading: false,
   cargado: true
  })
  
 }

 const {cargado, img, loading} = values;

 return (
  <div>
   {!cargado && !loading && <ZoneA setImg={setImg}/>}
   {loading &&<Loader />}
   {cargado && !loading && <ZoneB formImg={img}/>}
  </div>
 )
}

export default ZoneDrop
