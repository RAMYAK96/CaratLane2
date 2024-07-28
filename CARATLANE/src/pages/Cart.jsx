import React, { useEffect } from "react";
import CartCard from "../components/CartCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

const Cart = () => {


    const [data,setData] = useState([]);
    const [data1,setData1]  = useState([]);
    const [price,setPrice] = useState(0)


    async function getData(){
        let res = await fetch('http://localhost:3000/cart');
        let fetchData = await res.json();
        setData(fetchData);
        setPrice(fetchData[1].price)
        console.log(fetchData);
        //here we can see the information about the the no of pages no of data in each page and many more
    }


    useEffect(() => {
        getData()
        
    });




    return(
        <div>
             <div style={{height : "90px"}}></div>


            <Flex>

            <div>

            {data.map((el) => {
                
                return (
                    <>
                    <CartCard image={el.image} category={el.category} id={el.id} price={el.price} description={el.description} />
                        {/* //the atrribute we are passing here should be same as the key values of the products at ProdCard page */}
                    
                    </>
                );
                })}
            </div>

                
        
            <div style={{marginLeft : '150px',marginTop : '100px',width : '400px',padding : '20px',display : 'flex',justifyContent : 'space-between',borderRadius : '10px',boxShadow : '2px 2px lightgray',marginRight : '50px',height : '200px'}}>
                   
                    <div>
                    <Text>SubTotal</Text>
                    <Text>You saved</Text>
                    <Text>Coupon Discount</Text>
                    <Text>Shipping (Standard)</Text>
                    <Text>Total Cost</Text>
                    </div>

                    <div style={{marginLeft : '50px'}}>
                        <Text><b>{price}</b></Text>
                        <Text style={{color : 'green'}}><b>₹2,938</b></Text>
                        <Text>Apply Coupon</Text>
                        <Text>Free</Text>
                        <Text><b>{price}</b></Text>
                    </div>

                </div>




            </Flex>


        </div>
    );
}

export default Cart