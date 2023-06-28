import { useState } from "react";
import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {

  const [images, setImages] = useState([]) 

  const handleSubmit = async (temp) => {
    const result = await searchImages(temp);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader search = {handleSubmit} />
      <ImageList imagesPlaceholder = {images} />
    </div> 
  );

}

export default App;
