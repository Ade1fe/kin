import { Box, Icon, Image, Text } from '@chakra-ui/react'
import { Logo } from '../../../assets'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <Box maxWidth='1230px' mx='auto' my='30px' display={['block', 'flex']} gap='6' justifyContent='space-between' alignItems='start'>
       <Image src={Logo} w={['50px']} mx={['auto', '0' ]} mb={['20px', '0']} />
       <Box display="flex" gap='3' mx={['auto', '0' ]}  alignItems='center' justifyContent={['center' , 'flex-end']} textAlign={['center']} color='#5C6370'>
        <Icon as={FaFacebookF} boxSize='4' />
        <Icon as={FaInstagram} boxSize='4' />
        <Icon as={FaTwitter} boxSize='4' />
        <Icon as={FaYoutube} boxSize='4' />
        <Text fontSize='sm' ml={['20px', '25px',  '30px']}>©2024. Kin Africa</Text>
       </Box>

     
    </Box>
  )
}

export default Footer
