import ProdCard from "../components/ProdCard";
import React ,{ useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Flex,Grid } from "@chakra-ui/react";
import CommonBar from "../components/CommonBar";

const Necklaces = () => {
    const [data,setData] = useState([]);// the empty brac stores the data
    let [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams);

    async function getData(){
        let res = await fetch(`http://localhost:3000/Necklaces`);
        let fetchData = await res.json();
        setData(fetchData);
        console.log(fetchData);
        //here we can see the information about the the no of pages no of data in each page and many more
    }

    useEffect(() => {
        getData();
        
    },[]);


    return(
        <div>Necklaces
            <div style={{ height: "90px" }}></div>
            <div style={{height : "80px",marginTop : "20px",marginLeft : "40px"}}><b>Exclusive 20% Off On Diamond Jewellery | 4000+</b>5209 Designs</div>
            <CommonBar/>
        <Flex>
        <div >

        <SideBar/>
        </div>
        <Grid>

            <div style={{height : "80px"}}><b>Exclusive 20% Off On Diamond Jewellery | 4000+</b>5209 Designs</div>
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

export default Necklaces