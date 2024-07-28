'use client'

import React from 'react'
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState()

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // These are the images used in the slide
  const cards = [
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdjIJvsIfyjZ8a4TDn9DFmGnSbiROA-JKbAseQylSd3n2G5vzB',
    'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCV1Q-qIZ8FwigabeyamW5V0IzDQI-v2Okz02xgRqcieJoK9Pb',
    'https://media.istockphoto.com/id/1198591342/photo/diamond-still-life.webp?b=1&s=170667a&w=0&k=20&c=NcPp5xdvuPuQP4bx-k_h0QB5VGwsH1hP9sxQS7jpmCU=',
    'https://media.istockphoto.com/id/1193254381/photo/indian-jewellery-necklace.webp?b=1&s=170667a&w=0&k=20&c=0r9fkoufi0e9WUvDF4hS_-AaTWtUsNsICVwzd-mrJwI=',
  ]

  return (
    <Box position={'relative'} height={'550px'} width={'full'} overflow={'hidden'}  backgroundSize={'contain'} objectFit={'scale-down'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {/* <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton> */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}