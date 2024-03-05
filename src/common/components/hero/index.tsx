import { Box, Button, Image, Text } from '@chakra-ui/react'
import { Logo, brand1, brand2 } from '../../../assets'
import { DetailsPageProps } from '../built'


const HeroCom: React.FC<DetailsPageProps> = ({ handleJoinWaitlist, scrollToWaitlist, forwardedRef }) => {
  return (
  <Box w={['full', 'full', 'full', '']} mx='auto' pt='30px' pb='90px' color='#5C6370' maxWidth='1230px' ref={forwardedRef}>
  <Box w={['full', 'full', 'full','']}  mx='auto' mb={['40px', '70px', '90px', '130px']}>
    <Image src={Logo} w={['70px']} />
  </Box>
    <Box w={['full', 'full', 'full', '700px']}  mb={[ '50px', '60px', '80px',]}  mx='auto' px={['10px', '20px', '30px', '40px']} textAlign='center'>
      <Text fontSize={['35px', '40px', '48px']} fontWeight='600' mb={['12px', '16px', '18px', '20px']} lineHeight={['normal', 'normal', 'normal', '50px']} color='black'> Redefine the future for you and your loved ones. </Text>
      <Text fontSize={['16px']}  mb={['12px', '16px', '18px', '20px']} > Kin is designed for you and those you love to spend, save, and invest together while
enjoying care, comfort, and protection without stress or breaking the bank.</Text> 
   <Button className='blue' p={['10px']} fontWeight='700'  onClick={() => { handleJoinWaitlist(); scrollToWaitlist && scrollToWaitlist(); }} 
    borderRadius='40px' w={['200px']} color='white'>Unlock early access</Button>
    </Box>

    <Box position="relative" mt={['10px', '15px']} display={['block', 'block', 'flex', "flex"]} mx="auto" justifyContent='center' overflow="hidden" w={['full', 'full', 'full', 'full', '1220px']}  height={['full', 'max-content', 'max-content']} gap="30px">
        <Image   src={brand1} mb={['50px', '40px', '40px', '0']} w={['full', '80%', '350px', '400px', '560px']} mx="auto" h={['full', '80%','350px', '400px', '600px']} objectFit="cover" flex="1" />
        <Image   src={brand2} w={['full', '80%', '350px', '400px', '560px']} mx="auto" h={['full', '80%', '350px', '400px', '600px']} objectFit="cover" flex="1" />
      </Box>
  </Box>
  )
}

export default HeroCom
