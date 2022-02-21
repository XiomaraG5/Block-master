
import { useEffect, useState } from 'react';

export default function Geo() {
    // const position = [51.505, -0.09]
    const [geolocation,setGeolocation]=useState(null)
    console.log("whaaaaat");
    useEffect(()=>{
      gettingGeo()
    })

   
    
    const gettingGeo =()=>{
      navigator.geolocation.getCurrentPosition((geo)=>{
        const {latitude,longitude}=geo.coords;
        let  EndPoint="https://maps.googleapis.com/maps/api/geocode/json?latlng="+
        latitude+`,`+ longitude +"&key=AIzaSyBGnGLndUGdJe14k2p3oZ6pJ0a9AfjaFX4"
        giveGeo(EndPoint)
        
      
        console.log(latitude);
        console.log(longitude);
        console.log(geo.coords);
      })
    };

    const giveGeo = async (EndPoint)=>{
      const geo = await fetch(EndPoint)
      const {results} = await geo.json()
      const rep = results[2].formatted_address
      setGeolocation(rep)
      console.log( rep);
    }
    

    return (
   <h3 className='bg-black pb-2 geo'
   ><i className="bi bi-geo-alt-fill"></i>
   {geolocation? geolocation:"geolocation is not supported by your browser"}
   </h3>
    
  )
}
