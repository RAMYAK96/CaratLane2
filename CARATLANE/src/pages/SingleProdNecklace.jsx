
import React from "react";
import { useParams } from "react-router-dom";
import ProdDetails from "../components/ProdDetails";
import { useState,useEffect } from "react";
const SingleProdNecklace = () => {
    const [data,setData] = useState([]);
    let {id} = useParams();
    console.log(id);
    // let data = {};
    //use params is used to get the id from the server
    //for example if the link in the vite server in preoduct 3 is
    //localhost:5712/product/3 so we can get the id 3
    async function getData(){
        let res = await fetch(`http://localhost:3000/Necklaces/${id}`);
        let fetchData = await res.json();
        setData(fetchData);
        // data = fetchData;
        console.log(data);
        //here we can see the information about the the no of pages no of data in each page and many more
    }

    useEffect(() => {
        getData();       
    },[id]);
    // getData();
const {image,title,price,description,category,rating} = data;
    return(
        <div>
            <h1>single product</h1>
            <ProdDetails image={image} title={title} description={description} price={price} category={category} id={data.id} rating={rating} />
        </div>
    )
}

export default SingleProdNecklace;