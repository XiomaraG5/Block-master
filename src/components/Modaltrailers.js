import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

export const Modaltrailers = (info) => {
    const id = info.info.id
    const name =info.info.name
    const [data,setData]=useState("")
    
    useEffect(()=>{
        const getData=()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
        .then(res=>{
            console.log(res.data.results);
            const trailers = res.data.results
            if(trailers.length > 0){
                console.log(trailers);
                const trailer = trailers[0]
                console.log(trailer);
                // trailers.forEach((video,i)=>{
                    let { key, site}= trailer
                    console.log(site);
                //     console.log(video);
                    if(site === "YouTube"){
                        setData(`https://www.youtube.com/embed/${key}`)
                        }
                    // })
                }
            })
        }
        getData()
    },[id,name])
    console.log(info.info.name);
    
    
    console.log(data);
  return (
    <>
    <Modal.Body className='modalBody'>
        <iframe  src={data}
         frameborder="0" width={"100%"} allow="accelerometer; autoplay;
         clipboard-write; encrypted-media; gyroscope;
          picture-in-picture" allowfullscreen title={name}></iframe>
    </Modal.Body>
    </>
  )
}
