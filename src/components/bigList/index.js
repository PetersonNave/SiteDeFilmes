import {React, useState} from 'react';
import './style.css'
export default(item)=>{


    
    const itemUn = item.item;
    const [section, setSession] = useState(itemUn.items.results);
   
return(

<div>


<section>
    <h2>{itemUn.title}</h2>
    <div className='movieRowListArea'>
        <div className='movieRowList'>       
    {section.map ((item, key)=>(
        <div key={key} className='movieRow'>
            <a href='https://s20.fofoquei.com/storage1/tuegaymano/videos/series/sobrenatural/1x1.mp4'>
            <img className='movie' key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
            </a>
          
        </div>
         
         ))}
         </div>
    </div>
</section>

</div>


);

}