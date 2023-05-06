import axios from 'axios';
// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
// const REACT_APP_HOST = process.env.HOST
// const REACT_APP_URL = process.env.URL

export default async function getHotels(id) {
//   console.log(REACT_APP_API_KEY)

    const options = {
      method: "GET",
      url: "https://booking-com.p.rapidapi.com/v1/static/hotels" ,
      params: {
        page: "0",
        country: id,
      },
      headers: {
        "X-RapidAPI-Key":"1d6eec96e3msheb313e52dcd3effp19dc2ajsn493f2b2c1980",
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
      },
    };
    
    try {
      const response = await axios(options);
  
     let hotelsArray = response.data.result

     console.log(hotelsArray.slice(0,5),"aca")

     return hotelsArray.slice(0,5)
     
    } catch (error) {
  
      console.error(error);
    }
    };
   