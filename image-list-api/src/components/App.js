import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

class App extends React.Component { 

    constructor(props){
        super(props)
        this.state = {
            images: []
        };
    }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=15917647-ad6a8c8a387b11886d1b6e80d&q=${entry}&image_type=photo`)
        console.log(response) 
        this.setState({ images: response.data.hits })
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'30px'}} >
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                We have {this.state.images.length} images

                <ImageList images={this.state.images}/>
                
            </div>
        )
    }

}
 
export default App;