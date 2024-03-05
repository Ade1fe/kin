import { Box, Image, Text } from '@chakra-ui/react'
import { icon6, icon2, icon1, icon4, icon3, icon7, icon5 } from '../../../assets'

const HereForYou = () => {
  return (
    <Box  py={['80px','120px', '160px']} color='#5C6370' maxWidth='1230px' mx='auto'>
    <Box textAlign='center' mb={['60px']}>
        
        <Text fontSize={['29px', '30px', '32px']} fontWeight='bold' color='black'>Kin is here for you!</Text>
        <Text fontSize={['14px', '15px', '16px']}>Whatever your needs may be, we have you and your loved ones covered.</Text>
         </Box>


  <Box display='grid' gridTemplateColumns={['repeat(auto-fit, minmax(200px, 1fr))','repeat(1.5, 1fr)','repeat(2.5, 1fr)','repeat(3, 1fr)', 'repeat(4, 1fr)']} gridTemplateRows={['auto', 'auto', 'auto']} gap={[ '20px']}>
  <Box bg="#E3FCF8" p='20px' borderRadius='16px'   shadow='sm' >
        <Image src={icon6} w='24px' mt='20px' />
        <Text fontWeight='600' mt='20px' color='black' fontSize={['16px']}>Sibling Squad</Text>
        <Text mt='10px' fontSize='14px'>Laugh, not ledger. Split bills, plan adventures, and support dreams together—stay connected effortlessly.</Text>

    </Box>



    <Box bg="#FBF1FF" p='20px' borderRadius='16px'  shadow='sm' >
        <Image src={icon2} w='24px' mt='20px' />
        <Text fontWeight='600' mt='20px' fontSize={['16px']} color='black'>Roommate Harmony</Text>
        <Text mt='10px' fontSize='14px'>Share space, not stress. Coordinate and simplify shared expenses, enjoying seamless living together.</Text>
    </Box>


    <Box bg="#EEFBEE" p='20px' borderRadius='16px'  shadow='sm' >
        <Image src={icon1} w='24px'  mt='20px' />
        <Text fontWeight='600'  mt='20px' fontSize={['16px']} color='black'>Single Parents</Text>
        <Text mt='10px' fontSize='14px'>You're a superstar. Navigate parenthood confidently with Kin. Streamline your finances and prioritise your kids' well-being.</Text>
    </Box>

    <Box bg="#F0F5FF" p='20px' borderRadius='16px'  shadow='sm' >
        <Image src={icon4} w='24px'  mt='20px' />
        <Text fontWeight='600'  mt='20px' fontSize={['16px']} color='black'>Aged Parents</Text>
        <Text mt='10px' fontSize='14px'>Care for your elders with ease. Ensure their financial well being without the stress, no matter the distance.</Text>
    </Box>
  </Box>

<Box display='grid' mt={['40px']} gridTemplateColumns={['repeat(auto-fit, minmax(200px, 1fr))','repeat(1.5, 1fr)','repeat(2.5, 1fr)','repeat(3, 1fr)', 'repeat(3, 1fr)']} gridTemplateRows={['auto', 'auto', 'auto']} gap={[ '20px']}>

<Box bg="#FEF3EC" p='20px' borderRadius='16px'  shadow='sm' >
        <Image src={icon3} w='24px'  mt='20px' />
        <Text fontWeight='600'  mt='20px' fontSize={['16px']} color='black'>Married Duo</Text>
        <Text mt='10px' fontSize='14px'>Build your forever. Set goals, track expenses, grow wealth, plan the future—strengthen your bond seamlessly.</Text>
    </Box>

  

    <Box bg="#FFEEF0" p='20px' borderRadius='16px'  shadow='sm' >
        <Image src={icon7} w='24px'  mt='20px' />
        <Text fontWeight='600'  mt='20px' fontSize={['16px']} color='black'>Love Birds</Text>
        <Text mt='10px' fontSize='14px'>Begin your financial journey together. Focus on building memories while Kin manages your finances and fosters care.</Text>
    </Box>


    <Box bg="#F8F8F8" p='20px' borderRadius='16px'   shadow='sm' >
        <Image src={icon5} w='24px'  mt='20px' />
        <Text fontWeight='600'  mt='20px' fontSize={['16px']} color='black'>Couple with Children</Text>
        <Text mt='10px' fontSize='14px'>Raising leaders? We've got your back. Manage family finances seamlessly—plan, invest, and protect your loved ones effortlessly.</Text>
    </Box>
</Box>
    </Box>
  )
}

export default HereForYou
