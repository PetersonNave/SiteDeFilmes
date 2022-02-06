import {React, useEffect, useState} from 'react'
import './style.css'

export default(item)=>{

    const [movieChanged, SetMovieChanged] = useState(null)
    const [voteAverage, setVoteAverage] = useState(0);
    const [overviewText, setOverviewText] = useState(null)


    useEffect(()=>{

        const banner = async () =>{
            const random = Math.floor(Math.random() * 20);       
            SetMovieChanged(item.item[0].items.results[random])
            setVoteAverage(item.item[0].items.results[random].vote_average); 

            if((item.item[0].items.results[random].overview).slice(-1) == '.'){
                setOverviewText((item.item[0].items.results[random].overview).slice(0, 350) + "...")
            }else{
                setOverviewText((item.item[0].items.results[random].overview).slice(0, 350))
            }
           
        }       
    banner();
   
    }, []);
    
    console.log(movieChanged)
   
return(


    <div>
        {movieChanged !== null && 
        <section className='bannerArea' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieChanged.backdrop_path})`}}>
            <div className='bannerShadowVertical'>
                {(movieChanged.name).indexOf(':') > 0 ?
                <div className='bannerTitle'>{(movieChanged.name).slice(0, ((movieChanged.name).indexOf(':')))}</div>
                 :
                <div className='bannerTitle'>{(movieChanged.name).slice(0,20)}</div>
                }
            
            <div className='airYear'>{(movieChanged.first_air_date).slice(0,4)}</div>
            <div className='bannerDescription'>{overviewText}</div>
            <div className='info'>
                
                <div className='points'>{voteAverage * 10}% relevante</div>
                <div className='seasons'>{}</div>

            </div>
            </div>
        
   
        </section>
        
        }
        
    </div>

);


}