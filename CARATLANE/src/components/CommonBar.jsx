import React from "react";

const CommonBar = () => {
    return(
        <div>
            <div style={ {margin : "20px",marginTop : "-10px",padding : "10px"}}>
                <Flex>
                    <Button style={ {margin : "20px",backgroundColor : "blue",color : "white",fontSize : "20px",padding :"20px"}}>All</Button>
                    <a href="/findstore"><Button style={ {margin : "20px", fontSize : "20px",padding :"20px"}}>Try at Home</Button></a>
                    <a><Button style={ {margin : "20px",fontSize : "20px",padding :"20px"}}>Design in Store</Button></a>
                    <a><Button style={ {margin : "20px",fontSize : "20px",padding :"20px"}}>Faster Delivery</Button></a>
                    <a href="/morejewellery"><Button style={ {margin : "20px",fontSize : "20px",padding :"20px"}}>New In</Button></a>
                </Flex>
            </div>
            
        </div>
    );
}

export default CommonBar