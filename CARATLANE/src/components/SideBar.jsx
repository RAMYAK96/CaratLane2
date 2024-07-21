// 'use client'

import React, { ReactNode } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Divider,
//   BoxProps,
//   FlexProps,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
// import { IconType } from 'react-icons'
// import { ReactText } from 'react'


// const LinkItems = [
//   { name: <Text><b>Home</b>₹10001 - ₹15000</Text> },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ]

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  )
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex> */}
      <div style={{marginLeft : "20px"}}>
      <Text><b>Price</b></Text>
      <Checkbox defaultChecked>₹10001 - ₹15000</Checkbox>
      <Checkbox defaultChecked>₹20,001  - ₹30,000 (919)</Checkbox>
      <Checkbox defaultChecked>₹5,001  - ₹10,000 (294)</Checkbox>
      <Checkbox defaultChecked>₹15,001  - ₹20,000 (191)</Checkbox>
      <Checkbox defaultChecked>₹20,001  - ₹30,000 (919)</Checkbox>

      <Divider/>

      <Text><b>Discounts</b></Text>
      <Checkbox defaultChecked>Up to 15% off on Diamond Prices(9)</Checkbox>
      <Checkbox defaultChecked>Flat 15% off on Diamond Prices(9)</Checkbox>
      <Checkbox defaultChecked>Flat 10% off on Diamond Prices(37)</Checkbox>
      <Checkbox defaultChecked>Flat 5% off on Diamond Prices(101)</Checkbox>
      <Checkbox defaultChecked>Up to 15% off on Diamond Prices(9)</Checkbox>

        <Divider/>

        <Text><b>Weight Ranges</b></Text>
    <Checkbox defaultChecked>0-2 g(479)............</Checkbox>
      <Checkbox defaultChecked>2-5 g(1137).........</Checkbox>
      <Checkbox defaultChecked>5-10 g(281)........</Checkbox>
      <Checkbox defaultChecked>10-20 g(14).........</Checkbox>
      </div>
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  )
}