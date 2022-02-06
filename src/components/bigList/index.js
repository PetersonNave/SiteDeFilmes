import {React, useState} from 'react';
import './style.css'
export default(item)=>{
 
    const itemUn = item.item;
    const [section, setSession] = useState(itemUn.items.results); 
    const [xPosition, setXPosition] = useState(30);

    const clickLeft =() =>{
        if(xPosition - Math.round(window.innerWidth)< -4720){
           setXPosition(-5030+Math.round(window.innerWidth));
        }else{
            setXPosition(xPosition-Math.round(window.innerWidth/2));
        }
        console.log(xPosition - Math.round(window.innerWidth));
    }
    const clickRight = () =>{
        if(xPosition+Math.round(window.innerWidth/2) >= 30){
            setXPosition(30);
         }else{
             setXPosition(xPosition+Math.round(window.innerWidth/2));
         }
         console.log(xPosition - Math.round(window.innerWidth));
    }

return(

<div>
    <section>
        <h2 className='rowName'>{itemUn.title}</h2>
        <div className='movieRowListArea'>
           
            <div className='movieRowList' style={{
            
              width: section.length * 250,  
              marginLeft:  xPosition
              
            }}>    
            <div className='arrowRight' onClick={clickLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                </svg>
            </div>
            {xPosition !== 30 &&
             <div className='arrowLeft' onClick={clickRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                </svg>
             </div>   
            }
           
                {section.map ((item, key)=>(
                    <div key={key} className='movieRow'>
                        <div >
                            <img className='movie' key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                        </div>       
                    </div>
            ))}
            </div>
        </div>
    </section>
</div>


);

}