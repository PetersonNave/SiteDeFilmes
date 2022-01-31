import {React, useState} from 'react';
import './style.css'
export default(item)=>{


    
    const itemUn = item.item;
    const [section, setSession] = useState(itemUn.items.results);
    console.log(section)
return(

<div>

<h2>{itemUn.title}</h2>
<section>
    {section.map((item, key)=>(
    <div className='movieRow'>
        <img className='movie' key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
    </div>
    ))}
</section>

</div>


);

}