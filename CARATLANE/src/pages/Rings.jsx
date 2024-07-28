import ProdCard from "../components/ProdCard";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { color } from "framer-motion";
import CommonBar from "../components/CommonBar";


const Rings = () => {
    const [data,setData] = useState([]);
    let [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams);

    async function getData(){
        let res = await fetch(`http://localhost:3000/rings`);
        let fetchData = await res.json();
        setData(fetchData);
        console.log(fetchData);
        //here we can see the information about the the no of pages no of data in each page and many more
    }

    useEffect(() => {
        getData();
        
    },[]);

    return(
        <div>Rings
             <div style={{height : "80px",marginTop : "100px",marginLeft : "40px"}}><b>Exclusive 20% Off On Diamond Jewellery | 4000+</b>5209 Designs</div>
            <CommonBar/>
        <Flex>
        <div >

        <SideBar/>
        </div>
        <Grid>

            {/* <div style={{height : "80px"}}><b>Exclusive 20% Off On Diamond Jewellery | 4000+</b>5209 Designs</div> */}
           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {data.map((el) => (
                    <ProdCard image={el.image} title={el.title} description={el.description} price={el.price} category={el.category} id={el.id} />
                    //the atrribute we are passing here should be same as the key values of the products at ProdCard page
                ))}
            </div>
        </Grid>
        </Flex>
        </div>
    
    );
}

export default Rings