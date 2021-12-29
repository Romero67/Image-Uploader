import React, { useState,useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import "./ZoneA.css";
import {validarImg} from '../helpers/validarImg';

const ZoneA = ({setImg}) => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm(new FormData());
  }, []);


  const baseStyle = {
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    noClick: true,
    onDrop: (acceptedFiles) => {
      let files = (
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      form.set('photo', files[0])
      setImg(form);
    },
  });

  const style = useMemo(() => ({
   ...baseStyle,
   ...(isDragActive ? activeStyle : {}),
   ...(isDragAccept ? acceptStyle : {}),
   ...(isDragReject ? rejectStyle : {})
 }), [
   isDragActive,
   isDragReject,
   isDragAccept
 ]);

 const handleChange = (e) =>{
  const file = e.target.files[0];
  if(validarImg(file)){
    form.set('photo', Object.assign(file, {
      preview: URL.createObjectURL(file),
    }))
    setImg(form);
  }
 }



  return (
    <form className="container">
      <div >
        <h2>Upload your image</h2>
        <div className="container-img" {...getRootProps({style})}>
          <input {...getInputProps()} className="inputDrop" />
          <p>Drag and drop your image here</p>
        </div>
        <p>or</p>
        <div className="file-select" id="src-file1" >
          <input type="file" name="src-file1" aria-label="Archivo" onChange={handleChange}/>
        </div>
      </div>
    </form>
  );
};

export default ZoneA;
