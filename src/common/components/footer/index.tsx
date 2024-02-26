import { Box, Icon, Image, Text } from '@chakra-ui/react'
import { Logo } from '../../../assets'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => {
  return (
    <Box px={['20px', '35px','50px', '50px','70px']} my='30px' display={['block', 'flex']} gap='6' justifyContent='space-between' alignItems='start'>
       <Image src={Logo} w={['50px']} mx={['auto', '0' ]} mb={['20px', '0']} />
       <Box display="flex" gap='4' mx={['auto', '0' ]}  justifyContent={['center' , 'flex-end']} textAlign={['center']} color='#5C6370'>
        <Icon as={FaFacebookF} boxSize='5' />
        <Icon as={FaInstagram} boxSize='5' />
        <Icon as={FaTwitter} boxSize='5' />
        <Icon as={FaYoutube} boxSize='5' />
        <Text fontSize='sm'>©2024. Kin Africa</Text>
       </Box>

     
    </Box>
  )
}

export default Footer
