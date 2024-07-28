import ProdCard from "../components/ProdCard";
import React , { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Center, Flex, Grid } from "@chakra-ui/react";


const MoreJewellery = () => {
    const [data,setData] = useState([]);
    let [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams);

    async function getData(){
        let res = await fetch('http://localhost:3000/morejewellery');
        let fetchData = await res.json();
        setData(fetchData);
        console.log(fetchData);
        //here we can see the information about the the no of pages no of data in each page and many more
    }

    useEffect(() => {
        getData();
        
    },[]);

    return(

        <div>MoreJewellery
             <div style={{height : "90px"}}></div>
            <Flex>
        <div >
        </div>
        <Flex>

            <div style={{height : "80px",textAlign:"center"}}><b>CARATLANE BESTSELLERS</b></div>
          
           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {data.map((el) => (
                    <ProdCard image={el.image} category={el.category} id={el.id} />
                    //the atrribute we are passing here should be same as the key values of the products at ProdCard page
                ))}
            </div>
            
    
        </Flex>
        </Flex>
        </div>
    );
}

export default MoreJewellery