import React, { useState } from "react";

const ImageUploadComp = (props) => {
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <div className="">
                <h5 className='mb-0'>{props?.heading}</h5>
                <input type="file" onChange={handleChange} />
                <img style={{height:'100px'}} src={file} />
            </div>
        </>
    )
}

export default ImageUploadComp