import React from 'react';

const ImageList = (props) => {

    const images = props.images.map(image => { 
        
        return <img key={image.id} src={image.webformatURL} /> 
    }); 

    return ( 
        <div className='ui container'>
            {images}
        </div>
    )
}

export default ImageList;