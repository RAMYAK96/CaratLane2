'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CartCard from './CartCard'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Simple(el) {

  const [dataObj,setDataObj] = useState({});

  async function pushData({description,image,price}) {
      let obj = {
          id : Date.now() + Math.random(),
          description : description,
          price : price,
          image : image,
      }
      let res = await fetch('http://localhost:3000/cart',{
          method : "POST",
          headers : {
              "Content-Type" : "application/json"
          },
          body : JSON.stringify(obj),
      });
      let data = await res.json();
      console.log(data);
      console.log(obj);
  }

  useEffect(() => console.log(dataObj),[]);









  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              el.image
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        
        
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {el.category}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {el.price} 
            </Text>
            <Text>(MRP inclusive of all taxes)</Text>
            <Text style={{marginTop : '5px'}}><b>{el.description}</b></Text>

            <div style={{marginTop : "15px",borderLeft : "4px solid red",backgroundColor : "#FFCCCB",padding: '10px',borderRadius : "10px"}}>
                <Text style={{marginLeft : '5px'}}>  Flat 10% off on Diamond prices</Text>
                <Text style={{color : 'red',marginLeft : '5px'}}><b>   Offer expires in 3 days</b></Text>
            </div>

          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              {/* <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
              </Text> */}
              {/* <Text fontSize={'lg'} fontWeight={'bold'} >
                {el.description}
              </Text> */}


                <List>

                <Flex>

                    <ListItem style={{margin : '20px',border : "2px solid yellow",padding : '20px',marginRight : '0px',borderRadius : "10px"}}>
                     <Text fontWeight={'bold'}>
                         Size
                    </Text>{' '}
                        leather strap

                    </ListItem>

                    
                    <ListItem style={{margin : '20px',border : "2px solid yellow",padding : '20px',marginLeft : '0px',marginRight : '0px',borderRadius : "10px"}}>
                     <Text fontWeight={'bold'}>
                         Metal
                    </Text>{' '}
                    14 KT Yellow Gold

                    </ListItem>

                    
                    <ListItem style={{margin : '20px',border : "2px solid yellow",padding : '20px',marginLeft : '0px',borderRadius : "10px",marginRight : '0px'}}>
                     <Text fontWeight={'bold'}>
                         Diamond
                    </Text>{' '}
                        leather strap

                    </ListItem>

                    <Button style={{backgroundColor : 'yellow',padding : '20px',borderRadius : "10px",marginLeft : '0px',marginTop : '28px',paddingTop : '40px',paddingBottom: '40px'}}>CUSTOMIZE</Button>



                    </Flex>

                </List>






            </VStack>
            {/* <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box> */}



            
          <Button
            style={{borderRadius : '10px'}}
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('darkViolet')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={() => pushData(el)}>
              {/* <Link to={'/cart'}> Add to cart</Link> */}
           Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>










            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>
                
              <List spacing={4}>

                <Text>Set in 14 KT Yellow Gold (1.080 g) with Diamonds (0.050 ct IJ-SI)</Text>

                <Text style={{backgroundColor : 'pink',padding : '10px',borderRadius : '10px'}}><b>GOLD</b></Text>

                <Flex >

                <ListItem>
                  <Text fontWeight={'bold'}>
                    Dimensions
                  </Text>{' '}
                  width : {' '}
                  5.99 mm<br/>
                  height : {' '}
                  21.66 mm
                </ListItem>


                <ListItem marginLeft={20}>
                  <Text fontWeight={'bold'}>
                    Weight
                  </Text>{' '}
                  Gross : 2.950 g
               
                </ListItem>

                <ListItem marginLeft={20}>
                  <Text fontWeight={'bold'}>
                    Purity
                  </Text>{' '}
                  18 KT
               
                </ListItem>

                </Flex>


                <Text style={{backgroundColor : 'pink',padding : '10px',borderRadius : '10px'}}><b>Diamond</b></Text>

                <Flex >

                <ListItem>
                  <Text fontWeight={'bold'}>
                    Type
                  </Text>{' '}
                  GH - SI{' '}
                  
                </ListItem>


                <ListItem marginLeft={20}>
                  <Text fontWeight={'bold'}>
                    Setting
                  </Text>{' '}
                  setting : {' '}
                  prong<br/>
                  Total No : {' '}
                  6
               
                </ListItem>

                <ListItem marginLeft={20}>
                  <Text fontWeight={'bold'}>
                    Total Weight
                  </Text>{' '}
                  0.052 CT
               
                </ListItem>

                </Flex>
                
              </List>
            </Box>
          </Stack>

        </Stack>
      </SimpleGrid>
    </Container>
  )
}

