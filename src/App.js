import {React, useEffect, useState} from "react";
import getMovies from "./getMovies";
import BigListComp from "./components/bigList";

export default ()=>{

  const [listState, setListState] = useState([]);

  useEffect(()=>{
    const bigList = async() =>{
      let list = await  getMovies.getMovies();
      setListState(list);    
    }

   bigList()
    
  },[]);

return(
    <div className="Teste">
      <section>

        {listState.map((item, key)=>(
          <BigListComp key={key} item={item}></BigListComp>
        ))}

      </section>

    </div>

    
   
)
};