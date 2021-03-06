import {React, useEffect, useState} from "react";
import getMovies from "./getMovies";
import BigListComp from "./components/bigList";
import Banner from './components/banner';
import Footer from "./components/footer";
import './App.css'

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
    <div>
      {listState.length !== 0 && <Banner item={listState}></Banner> }
      
      <section className="movies">

        {listState.map((item, key)=>(
          <BigListComp key={key} item={item}></BigListComp>
        ))}

      </section>
          
      <Footer></Footer>
    </div>

    
   
)
};