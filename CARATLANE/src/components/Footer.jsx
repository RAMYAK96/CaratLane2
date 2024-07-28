'use client'

import { ReactNode } from 'react'

import {
  Box,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { color } from 'framer-motion'
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsChatLeft } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


import { FaPinterest } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Logo = (props) => {
  return (
    <img style={{ borderRadius: "10px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-Z2CcjcOUSmwYyXMavb6PiwsYNQAWoZ2HhilJ_doRWmhOBXj" alt="" />
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithLogoLeft() {
  return (
    <Box
      style={{ borderColor: "rgb(240, 205, 237)", zIndex: "8" }}
      color={useColorModeValue('gray.700', 'gray.200')} >
      <div style={{ textAlign: "center", backgroundColor: "darkviolet", color: "white" }}>
        know more about caratlane
      </div>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          {/* <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text>
          </Stack> */}
          <Stack align={'flex-start'}>
            <ListHeader>Know Your Jewellery</ListHeader>
            <Box as="a" href={'#'}>
              Diamond guide
            </Box>
            <Box as="a" href={'#'}>
              Jewellery guide
            </Box>
            <Box as="a" href={'#'}>
              Gemstones guide
            </Box>
            <Box as="a" href={'#'}>
              Gold rate
            </Box>
            <Box as="a" href={'#'}>
              Egold
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>CaratLane Advantage</ListHeader>
            <Box as="a" href={'#'}>
              15-day returns
            </Box>
            <Box as="a" href={'#'}>
              Free shipping
            </Box>
            <Box as="a" href={'#'}>
              Financing options
            </Box>
            <Box as="a" href={'#'}>
              Postcards
            </Box>
            <Box as="a" href={'#'}>
              Old gold exchange
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Customer Service</ListHeader>
            <Box as="a" href={'#'}>
              Return policy
            </Box>
            <Box as="a" href={'#'}>
              Order status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About Us</ListHeader>
            <Box as="a" href={'#'}>
              Our story
            </Box>
            <Box as="a" href={'#'}>
              Press
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Instagram
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact Us</ListHeader>
            <Box as="a" href={'#'}>
              CaratLane Trading Pvt Ltd<br />

              No:727, 1st Floor, TIL Park Anna Salai,<br />
              Pathari Road, Thousand Lights, Chennai,<br />
              Tamil Nadu 600006.
            </Box>

          </Stack>

          <Stack>

            <ListHeader>24X7 ENQUIRY SUPPORT ( ALL DAYS )</ListHeader>
            <Box as="a" href={'#'}>

              General : contactus@caratlane.com<br />
              Corporate : b2b@caratlane.com<br />
              Hr : careers@caratlane.com<br />
              Grievance : click here<br />
              Social Icons<br />
              Call Us<br />



            </Box>

            <Box>
              <Text fontSize={'l'}><b>FIND US ON</b></Text>
            </Box>
            <Box style={{ fontSize: "30px" }}>
              <Flex>
                <IoCall style={{ margin: "15px" }} />
                <BsChatLeft style={{ margin: "15px" }} />
                <IoLogoWhatsapp style={{ margin: "15px" }} />
                <MdEmail style={{ margin: "15px" }} />
              </Flex>
            </Box>
          </Stack>


        </SimpleGrid>
        <Stack spacing={6}>
          <Box>
            <Logo color={useColorModeValue('gray.700', 'white')} />
          </Box>
          {/* <Text fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text> */}
        </Stack>

        <Stack >
          <Box>
            <Text fontSize={'l'}><b>FIND US ON</b></Text>
          </Box>
          <Box style={{ fontSize: "30px" }}>
            <Flex>
              <FaInstagramSquare style={{ margin: "15px" }} />
              <FaFacebook style={{ margin: "15px" }} />


              <FaLinkedin style={{ margin: "15px" }} />
              <FaPinterest style={{ margin: "15px" }} />
              <FaXTwitter style={{ margin: "15px" }} />
            </Flex>
          </Box>
        </Stack>

      </Container>
    </Box>
  )
}