import { Box, Icon, Image, Text } from '@chakra-ui/react'
import { Logo } from '../../../assets'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink,  } from '@chakra-ui/react'


const Footer = () => {
  return (
    <Box maxWidth='1230px' mx='auto' my='30px' display={['block', 'flex']} gap='6' justifyContent='space-between' alignItems='start'>
       <Image src={Logo} w={['50px']} mx={['auto', '0' ]} mb={['20px', '0']} />
       <Box display="flex" gap='3' mx={['auto', '0' ]}  alignItems='center' justifyContent={['center' , 'flex-end']} textAlign={['center']} color='#5C6370'>
       <ChakraLink as={ReactRouterLink} to="">   <Icon as={FaFacebookF} boxSize='4' /></ChakraLink>
     
        <ChakraLink as={ReactRouterLink} to="https://www.instagram.com/kintrybe?igsh=MXJvMGczbXNxcjVodA%3D%3D&utm_source=qr"> <Icon as={FaInstagram} boxSize='4' /></ChakraLink>
       
        <ChakraLink as={ReactRouterLink} to='https://x.com/kintrybe/status/1764703149518889107?s=46&t=OZZVDFz1r5LxY3zaEVP2Wg'> <Icon as={FaTwitter} boxSize='4' /> </ChakraLink>  
       
        <ChakraLink as={ReactRouterLink} to=""> <Icon as={FaYoutube} boxSize='4' /></ChakraLink>
        <Text fontSize='sm' ml={['20px', '25px',  '30px']}>©2024. Kin Africa</Text>
       </Box>

     
    </Box>
  )
}

export default Footer
