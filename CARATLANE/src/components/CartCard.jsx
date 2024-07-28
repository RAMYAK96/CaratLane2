import React from "react";
import { Flex,Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";

const CartCard = (el) => {

    // const [dataObj,setDataObj] = useState({});
    // const [change,setChange] = useState(0)

    // async function deleteData(id) {
    //     console.log(id);


    //     let res = await fetch(`http://localhost:3000/cart/${id}`,{
    //         method : "DELETE",
    //     });
    //     let data = await res.json();
    //     console.log(data);
    //      console.log(data[0].id);
    //      setChange(data[0].id)

    // }
  
    // useEffect(() => console.log(dataObj),[]);



    const [user,setUser] = useState([]);
    const [price,setPrice] = useState(0);

    useEffect(() => deleteUser(),[])

    async function deleteUser() {
        let res = await fetch("http://localhost:3000/cart");
        let data = await res.json();
        console.log(data);
         console.log(data[0].id);

    }



    async function deleteData(id) {
        console.log(id);


        let res = await fetch(`http://localhost:3000/cart/${id}`,{
            method : "DELETE",
        });
        let data = await res.json();
        console.log(data);
         console.log(data[0].id);
         deleteUser();

    }
  








    return(
        <div>
            <Flex>
                <div style={{margin : '20px',padding : '30px'}}>
                    <div style={{marginLeft : "200px",width : '700px',borderRadius : '10px',boxShadow : '2px 2px lightgray'}}>

                    <Flex style={{padding : "20px",display : 'flex',justifyContent : 'space-between'}}>
                        <div><img style={{width : "150px",margin : "10px",borderRadius : '10px',boxShadow : '2px 2px lightgray'}}src={el.image} alt="" /></div>
                        <div style={{margin : "10px"}}>
                            <Text>{el.description}</Text>
                            <Text><b>{el.price}</b></Text>
                            <Text style={{fontSize : '10px',marginTop : '10px'}}>JR08509-1YP900</Text>
                            <Text>Quantity</Text>
                        </div>
                        <Button style={{alignContent : 'flex-end'}}onClick={() => deleteData(el.id)}><RxCrossCircled /></Button>
                    </Flex>
                    
                    </div>
                </div>

            </Flex>
        </div>
    )
}

export default CartCard