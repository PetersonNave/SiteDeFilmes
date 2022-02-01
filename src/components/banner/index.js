import {React, useEffect, useState} from 'react'
import './style.css'

export default(item)=>{

    const [movieChanged, SetMovieChanged] = useState(null)
    
    useEffect(()=>{

        const banner = async () =>{
            const random = Math.floor(Math.random() * 20);       
            SetMovieChanged(item.item[0].items.results[random])
           
        }
    banner();
    
    }, []);
    console.log(movieChanged)
    

return(


    <div>
        {movieChanged !== null && 
        <section className='bannerArea' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieChanged.backdrop_path})`}}>
            <div className='bannerShadowVertical'>
            <div className='bannerTitle'>{movieChanged.name}</div>
            <div className='bannerDescription'>{movieChanged.overview}</div>
            
            </div>
        
   
        </section>
        
        }
        
    </div>

);


}