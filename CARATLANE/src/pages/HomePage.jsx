import React from "react";
import Carousel from "../components/Carousel";
import { Flex, Text } from "@chakra-ui/react";
import { useHref } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'

const HomePage = () => {
    return(
        <div>
             <div style={{height : "90px"}}></div>
            HomePage
            <Carousel/>
            <div  style={{marginTop : "50px"}}>
                <Flex>
                    <div style={{margin : "40px"}}>
                        <img  style={{width : "700px"}}  src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/07-July/Responsive/18/Responsive-09.jpg" alt="" />
                    </div>
                    <div style={{width : "740px",margin : "20px"}}>
                        <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/AppBanner/Personal/2X.jpg" alt="" />
                        <img  style={{marginTop : "20px"}}src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/justarrived/03/1X.webp" alt="" />
                    </div>
                </Flex>
            </div>
            <div style={{marginTop : "20px"}}>
                <Flex>
                    <a href="/rings"><img style={{width : "480px",margin : "15px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_1.png" alt="" /></a>
                    <a href="/morejewellery"><img style={{width : "480px",margin : "15px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_7.png" alt="" /></a>
                    <a href="/bracelet"><img style={{width : "480px",margin : "15px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_3.png" alt="" /></a>
                </Flex>
                <Flex>
                    <a href="/mangalsutras"><img style={{width : "480px",margin : "15px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_4.png" alt="" /></a>
                    <a href="/necklaces"><img style={{width : "480px",margin : "15px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_5.png" alt="" /></a>
                    <a href="/solitaires"><img style={{width : "480px",margin : "15px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_6.png" alt="" /></a>
                </Flex>
            </div>
            <div>
                <Flex>
                    <a href="#"><img style={{width : "480px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/Collection/Collection_block_minions.jpg" alt="" /></a>
                    <div>
                    <a href="#"><img style={{width : "480px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/05_May/Banner/Collection/Utsav.jpg" alt="" /></a>
                    </div>
                    <a href="#"><img style={{width : "480px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/03_MAR/HPbanner/Collection/Collection_Harry_potter.jpg" alt="" /></a>
                </Flex>
            </div>
            <div>
                <Flex>
                    <a href="#"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/ReferAndEarn/2x.webp" alt="" /></a>
       
                    <a href="#"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/EarPiercing/2x.webp" alt="" /></a>
                  
                </Flex>
                <Flex>
                    <a href="#"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/WorkWear/2x.webp" alt="" /></a>
       
                    <a href="#"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/Liquidation/2X.webp" alt="" /></a>
                  
                </Flex>
            </div>

            <div style={{margin : "30px"}}>
                <Flex>
                <div style={{width : "700px",marginLeft : "120px"}}>
                    <Flex>
                    <img style={{width : "400px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/T@H.webp" alt="" />
                    <Text style={{marginLeft : "-50px",zIndex : "1",marginTop : "100px",fontSize : "20px"}}><b>Unsure Which Design<br/> To  Pick?</b></Text>
                    <Text style={{marginLeft : "-200px",zIndex : "1",marginTop : "180px"}}>Book A Free Trial At Home</Text>
                    <a href="#"><Button style={{marginLeft : "-180px",zIndex : "1",marginTop : "220px",border : "2px solid pink",color : "white",backgroundColor : "darkviolet"}}><b>Schedule Appointment</b></Button></a>
                    </Flex>
                   
                </div>
                <div style={{width : "700px",marginLeft : "120px"}}>
                    <Flex>
                    <img style={{width : "400px"}} src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/Store.webp" alt="" />
                    <Text style={{marginLeft : "-50px",zIndex : "1",marginTop : "100px",fontSize : "20px"}}><b>Come Visit At<br/> Any Of Our Stores<br/> To  Pick?</b></Text>
                    <a href="#"><Button style={{marginLeft : "-180px",zIndex : "1",marginTop : "220px",border : "2px solid pink",color : "white",backgroundColor : "darkviolet"}}><b>Enter Pincode Or City</b></Button></a>
                    </Flex>
                </div>

                </Flex>
            </div>

            <div>
                <Flex>
                    <div style={{width : "720px",marginLeft : "80px"}}>
                        <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png" alt="" />
                    </div>
                    <div style={{justifyContent : "center",textAlign  : "center"}}>
                        <Text style={{fontSize : "50px",marginTop : "50px"}}><b>A Stylish Upgrade</b></Text>     
                      <Text style={{fontSize : "20px",marginTop : "30px"}}>- Enjoy 0% Deduction on your gold exchange value. Please note : The old gold <br/>doesnt have to be only from CaratLane, it can be any gold jewellery u have</Text>
                      <a href="#"><Button style={{marginTop : "10px",marginBottom : "80px",border : "2px solid pink",color : "white",backgroundColor : "darkviolet"}}><b>Know More</b></Button></a>
                    </div>
                </Flex>
            </div>

            <div style={{backgroundColor : "darkviolet",textAlign: "center",marginTop : "50px"}}>
                <img style={{textAlign: "center",objectFit : "contain",backgroundPositionY: "100px",marginLeft : "530px"}} src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png" alt="" />
                <Text style={{color : "white"}}>The highest quality of craftsmanship and innovation,<br/>
                that brings you modern, everyday designs.</Text>
                <a href="#"><Button style={{marginTop : "10px",marginBottom : "80px",border : "2px solid pink",color : "white",backgroundColor : "darkviolet"}}><b>Know More</b></Button></a>
            </div>
            <div style={{textAlign : "center",marginTop : "130px"}}>
                <Text style={{fontSize : "30px"}}>"I wanted to buy a new born Nazaria for my newborn that is rash freeand has <br/>no sharp edges. That's when i came across Caratlane and find a <br/> cutest Nazaria for my boy!"</Text>
                <Text style={{fontSize : "20px",marginTop : "30px"}}>-Dipali Nimavat</Text>
            </div>
            <Flex style={{marginTop : "130px"}}>
                <img style={{width : "610px"}} src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/1.jpg" alt="" />
                <div >
                    <Flex>
                    <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/2.jpg" alt="" />
                    <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/3.jpg" alt="" />
                    <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/4.jpg" alt="" />
                    </Flex>
                    <Flex>
                    <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/5.jpg" alt="" />
                    <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/6.jpg" alt="" />
                    <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/7.jpg" alt="" />
                    </Flex>
                </div>
            </Flex>

        </div>
    );
}

export default HomePage