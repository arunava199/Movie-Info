import React, { useContext } from "react";
//import { AppContext } from "./Context";
import Search from "./Search";
import  Movies  from "./Movies";
function Home() {
   // const name =useContext(AppContext)
    
    return (
        <>
       <Search/>
       <Movies/>
        
        </>
    )
}
export default Home


