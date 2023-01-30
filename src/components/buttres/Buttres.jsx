import React, {useState, useRef} from 'react'
import './buttres.css'

const Buttres = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const inputRef = useRef();

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", pdfFile);
    console.log(formData.getAll())
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }  
    // )
  };

  if (pdfFile) return (
    <section className="uploads">
      <h1>Upload your resume here!</h1>
      <ul>
        {
            Array.from(pdfFile).map((file, idx) => <li key={idx}>{file.name}</li>)       
        }
      </ul>
      <div className="actions">
            <button className = 'bttonn' onClick ={() => setPdfFile(null)}>Cancel</button>
            <button className = 'bttonn' onClick={handleUpload}>Upload</button>
        </div>
    </section>
  )

  

  return (
    <section id='container buttres__container'>
        <h1>Upload your resume here!</h1>
        <div className ='uploads2'>
        <input type="file"
                multiple
                onChange = {(event) => setPdfFile(event.target.files)} 
                hidden
                accept=".pdf"
                ref={inputRef}
              />
              <button className = 'btn btn-primary' onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
              

        
    </section>
  )

    

 
}

export default Buttres