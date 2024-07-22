'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Grid,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'
import { IoMdCart } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box style={{position : "fixed",zIndex : "2"}}>
        <div style={{textAlign : "center",backgroundColor : "darkviolet",color : "white"}}>
            caratlane
        </div>
      <Flex
        bg={useColorModeValue('white')}
        color={useColorModeValue('black')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
  
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Image
    boxSize='45px'
    objectFit='cover'
    src='https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/Logo/logo.gif'
    alt='Dan Abramov'
  />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          <Input placeholder='Search Jewellery' size="m" width={40} marginLeft={8} border={"3px solid pink"} borderRadius={"10px"}/>
          <Image style={{width : "50px"}}src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQxS1_wFz_REj4z6-r43zabQarAfCOFG0ljFyDbjCgT0YCc18bs'/>
          
          <Grid style={{textAlign : "center",marginLeft : "3px",marginTop : "5px"}}>
          <Text style={{fontSize: "10px"}}>
            Delivery & stores <br/> <b style={{fontSize : "15px",color : "violet"}}>Enter Pincode</b>
          </Text>
          </Grid>

          <Image style={{width : "52px",marginLeft : "12px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz9ekH7AfrXpUBzt0Bg_V4k2CzgHTdtIOxF9UTNmY0WGxRms54'/>

          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>


           <Button as={'a'} fontSize={'xl'} fontWeight={400} variant={'link'} href={'#'}>
           <FaHeart />
          </Button>
          <Button as={'a'} fontSize={'xl'} fontWeight={400} variant={'link'} href={'/signup'}>
          <IoPersonSharp />
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'xl'}
            fontWeight={600}
            color={'black'}
            bg={'white'}
            href={'/cart'}
            _hover={{
              bg: 'white',
            }}>
            
            {/* <Link style={{textDecoration: "none"}}to={`/signup`}>hello</Link> */}
            <IoMdCart />
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

// interface NavItem {
//   label: string
//   subLabel?: string
//   children?: Array<NavItem>
//   href?: string
// }

const NAV_ITEMS = [
  {
    label: 'Rings',
    href: '/rings',
    children: [
      {
        label: 'ENGAGEMENT',
        // subLabel: 'Trending Design to inspire you',
        href: '/rings',
      },
      {
        label: 'DAILY WEAR',
        href: '/rings',
        
      },
      {
        label: 'COIUPLE RINGS',
        href: '/rings',
        
      },
      {
        label: 'COCKTAIL',
        href: '/rings',
        
      },
      {
        label: 'INFINITY',
        href: '/rings',
        
      },
      {
        label: 'SOLITARE',
        href: '/rings',
        
      },
      {
        label: 'BANDS',
        href: '/rings',
        
      },
      {
        label: 'PLATINUM',
        href: '/rings',
        
      },
      {
        label: 'PROMISE RINGS',
        href: '/rings',
        
      },
      {
        label: 'ADJUSTABLE RINGS',
        href: '/rings',
        
      },
    ],
  },
  {
    label: 'Earings',
    href: '/earings',
    children: [
      {
        label: 'STUDS',
        href: '/earings',
      },
      {
        label: 'JHUMKAS',
        href: '/earings',
      },
      {
        label: 'EARCUFFS',
        href: '/earings',
      },
      {
        label: 'PEARL EARINGS',
        href: '/earings',
      },
      {
        label: 'CHANDBALI EARRINGS',
        href: '/earings',
      },
      {
        label: 'DROPS',
        href: '/earings',
      },
      {
        label: 'HOOPS AND HUGGIES',
        href: '/earings',
      },
      {
        label: 'GOLD EARINGS',
        href: '/earings',
      },
      {
        label: 'DAILY WEAR EARINGS',
        href: '/earings',
      },
    ],
  },
  {
    label: 'Bracelets & Bangles',
    href: '/bracelet',
    children: [
      {
      label : 'CHAIN BRACELETS',
        href: '/bracelet',
      },
      {
        label : 'FLEXIBLE BRACELETS',
        href: '/bracelet',
      },
      {
        label: 'LIGHTWEAR BANGLES',
        href: '/bracelet',
      },
      {
        label: 'GOLD BANGLES',
        href: '/bracelet',
      },
      {
        label: 'KIDS BRACELETS',
        href: '/bracelet',
      },
      {
        label: 'OVAL BRACELETS',
        href: '/bracelet',
      },
      {
        label: 'MANGALSUTRA BRACELETS',
        href: '/bracelet',
      },
      {
        label: 'DIAMOND BANGLES',
        href: '/bracelet',
      },
      {
        label: '22kt BRACELETS',
        href: '/bracelet',
      },
    ],
  },
  {
    label: 'Solitaires',
    href: '/solitaires',
    children: [
      {
        label: 'RINGS',
        href: '/solitaires',
      },
      {
        label: 'PEDANTS',
        href: '/solitaires',
      },
      {
        label: 'NECKLACE',
        href: '/solitaires',
      },
      {
        label: 'MENS SOLITARE',
        href: '/solitaires',
      },
      {
        label: 'EARINGS',
        href: '/solitaires',
      },
      {
        label: 'MANGALSUTRA',
        href: '/solitaires',
      },
    ],
  },
  {
    label: 'MangalSutras',
    href: '/mangalsutras',
  },
  {
    label: 'Necklaces',
    href: '/necklaces',
  },
  {
    label: 'More Jewellery',
    href: '/morejewellery',
    children: [
      {
        label: 'PEDANTS',
        href: '/morejewellery',
      },
      {
        label: 'NECKLACE',
        href: '/morejewellery',
      },
      {
        label: 'SHAYA',
        href: '/morejewellery',
      },
    ],
  },
  {
    label: 'Find Store',
    href: '/findstore',
  },
]