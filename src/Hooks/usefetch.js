import { useEffect, useState } from "react"
import axios from "axios"

const UseAxios=(url)=>{
    const [data,setdata]=useState(null);
    const [error,seterror]=useState(null);
    const [loading,setloading]=useState(true);


useEffect(()=>{
    const FetchData=async ()=>{
        setloading(true)
        try{
               const res = await axios.get(url);
            //    console.log("res",res);
            //    console.log("json",res.data);
            //    const json= res.data.json();
              

               setdata(res.data);
            //    console.log(data);
               setloading(false);
        }
        catch(error){
            seterror(error);
            setloading(false);
        }
    }

    FetchData();
},[url]);

// useEffect(() => {
//     console.log("data",data);
//   }, [data]);

return {loading,error,data}
}
export default UseAxios;