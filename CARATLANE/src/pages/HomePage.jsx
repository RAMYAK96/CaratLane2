import React from "react";
import Carousel from "../components/Carousel";
import { Flex, Text } from "@chakra-ui/react";
import { useHref } from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Slider from "react-slick";

const HomePage = () => {


    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };






    return(
        <div>
             <div style={{height : "90px"}}></div>
            <Carousel/>
            <div >
            <div className="slider-container" style={{marginTop : '-550px'}}>
      <Slider {...settings}>
        <div>
          <img style={{width : "1550px",height : "550px",margin : "0px",backgroundPosition : "center",
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover"}}src={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/Flat20/REVISED/Desktop.jpg"} />
        </div>
        <div>
          <img  style={{width : "1550px",height : "550px",margin : "0px",backgroundPosition : "center",
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover"}} src={"data:image/jpeg;base64,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"} />
        </div>
        <div>
          <img style={{width : "1550px",height : "550px",margin : "0px",backgroundPosition : "center",
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover"}} src={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/EarPiercing/Desktop.jpg"} />
        </div>
        <div>
          <img style={{width : "1550px",height : "550px",margin : "0px",backgroundPosition : "center",
            backgroundRepeat : "no-repeat",
            backgroundSize : "cover"}} src={"https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/03March/Interspersed/01/CL_Interspersed_Desktop_2.jpg"} />
        </div>
      </Slider>
    </div>
            </div>
            <div  style={{marginTop : "50px"}}>
                <Flex>
                    <div style={{margin : "40px"}}>
                        <a href="/morejewellery"><img  style={{width : "700px"}}  src="https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/07-July/Responsive/18/Responsive-09.jpg" alt="" /></a>
                    </div>
                    <div style={{width : "740px",margin : "20px"}}>
                       <a href="/mangalsutras"> <img src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/AppBanner/Personal/2X.jpg" alt="" /></a>
                        <a href="/rings"><img  style={{marginTop : "20px"}}src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/justarrived/03/1X.webp" alt="" /></a>
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
                    <a href="/solitaires"><img style={{width : "480px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/01-JAN/HPbanner/Collection/Collection_block_minions.jpg" alt="" /></a>
                    <div>
                    <a href="/solitaires"><img style={{width : "480px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/05_May/Banner/Collection/Utsav.jpg" alt="" /></a>
                    </div>
                    <a href="/solitaires"><img style={{width : "480px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/03_MAR/HPbanner/Collection/Collection_Harry_potter.jpg" alt="" /></a>
                </Flex>
            </div>
            <div>
                <Flex>
                    <a href="/signup"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/ReferAndEarn/2x.webp" alt="" /></a>
       
                    <a href="/signup"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/EarPiercing/2x.webp" alt="" /></a>
                  
                </Flex>
                <Flex>
                    <a href="/signup"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/WorkWear/2x.webp" alt="" /></a>
       
                    <a href="/signup"><img style={{width : "720px",margin : "20px"}} src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/Liquidation/2X.webp" alt="" /></a>
                  
                </Flex>
            </div>

            <div style={{margin : "30px"}}>
                <Flex>
                <div style={{width : "700px",marginLeft : "120px"}}>
                    <Flex>
                    <a href="/sigup"><img style={{width : "400px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/T@H.webp" alt="" /></a>
                    <Text style={{marginLeft : "-50px",zIndex : "1",marginTop : "100px",fontSize : "20px"}}><b>Unsure Which Design<br/> To  Pick?</b></Text>
                    <Text style={{marginLeft : "-200px",zIndex : "1",marginTop : "180px"}}>Book A Free Trial At Home</Text>
                    <a href="#"><Button style={{marginLeft : "-180px",zIndex : "1",marginTop : "220px",border : "2px solid pink",color : "white",backgroundColor : "darkviolet"}}><b>Schedule Appointment</b></Button></a>
                    </Flex>
                   
                </div>
                <div style={{width : "700px",marginLeft : "120px"}}>
                    <Flex>
                    <a href="/signup"><img style={{width : "400px"}} src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/Store.webp" alt="" /></a>
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
                <a href="/solitaires"><img style={{width : "610px"}} src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/1.jpg" alt="" /></a>
                <div >
                    <Flex>
                   <a href="/rings"> <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/2.jpg" alt="" /></a>
                    <a href="/earings"><img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/3.jpg" alt="" /></a>
                    <a href="/mangalsutras"><img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/4.jpg" alt="" /></a>
                    </Flex>
                    <Flex>
                   <a href="/morejewellery"> <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/5.jpg" alt="" /></a>
                    <a href="/necklaces"><img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/6.jpg" alt="" /></a>
                   <a href="/earings"> <img style={{width : "300px"}}src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/05-MAY/Others/Insta/12/7.jpg" alt="" /></a>
                    </Flex>
                </div>
            </Flex>

        </div>
    );
}

export default HomePage