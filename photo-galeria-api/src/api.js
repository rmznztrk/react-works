import axios from "axios";

const searchImages = async (temp) => {
    
    const response = await axios.get("https://api.unsplash.com/search/photos", 
        {
            headers: {
            Authorization: "Client-ID D-zl2q8HZtqMDCQrLgegdhw9kcS241C27d6jGc6IsOU",
            },
            params: {
            query: temp,
            },
        }
    );
    // debugger;
    // console.log(temp)  
    // console.log(response)
    // console.log(response.data.results)

    return response.data.results;
  
};

  export default searchImages;