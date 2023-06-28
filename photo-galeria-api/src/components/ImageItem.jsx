function ImageItem({image}) {
    console.log(image);
    return ( 
        <div>
            <img src={image.urls.small} className="imageItemDiv" alt={image.alt_description}/>
        </div>
     );
}
 
export default ImageItem;