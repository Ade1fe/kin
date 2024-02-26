

import { Box, Button, Image, Text } from '@chakra-ui/react'
import { brand3, brand4, brand5, brand6 } from '../../../assets'
// import { useRef } from 'react';


interface DetailsPageProps {
    handleJoinWaitlist: () => void;
    scrollToWaitlist?: () => void; // Optional prop for scrolling to the waitlist
    forwardedRef?: React.RefObject<HTMLDivElement>; // Forwarded ref
  }

  const DetailsPage: React.FC<DetailsPageProps> = ({ handleJoinWaitlist, scrollToWaitlist, forwardedRef }) => {

    // const ref = useRef(null);
  return (
    <Box bg='#F8F8F8' mt={['60px']} pb={['50px', '60px', '80px', '90px']} px={['20px', '35px','50px', '60px','70px']} ref={forwardedRef}>
    <Box py="60px" mb='90px' borderBottom='1px' borderBottomColor='#EDEFF2' display={['grid','grid', 'grid', 'flex']} gap={['30px']} justifyContent='space-between' alignItems='start'>
       <Box >
       <Text fontWeight='600' fontSize={['30px', '40px', '48px']}>Built for love, with love.</Text>
        <Text fontWeight=''>Use Kin to turbocharge your relationships and families. Truly care for the people you love without the stress!</Text>
       </Box>
           <Button className='blue' p={['10px']} onClick={() => { handleJoinWaitlist(); scrollToWaitlist && scrollToWaitlist(); }} borderRadius='40px' w={['200px']} color='white'>Join Waitlist</Button>
    </Box>


<Box display="grid" gridTemplateColumns={['repeat(auto-fit, minmax(200px, 1fr))','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)', 'repeat(2, 1fr)']} gridTemplateRows={['auto', 'auto', 'auto']} gap={['30px', '40px', '20px']}>
    <Box display={['grid', 'grid', "flex"]} gap='10px' alignItems='center'  _hover={{ transform: 'scale(0.9)', transition: 'transform 0.3s ease' }} >
        <Image src={brand3}  w={['full','full', '200px','200px','250px']} h={['300px','300px', 'auto']}  />
   

    <Box className="">
        <Text fontWeight='600' fontSize={['16px']}>Unified Naira and USD Accounts</Text>
        <Text fontSize={['14px']}>Pool your money and transact together in multiple currencies effortlessly. Keep track of all inflows and witness your finances flourish together.</Text>
    </Box>
    </Box>

    <Box display={['grid', 'grid', "flex"]} gap='10px' alignItems='center'  _hover={{ transform: 'scale(0.9)', transition: 'transform 0.3s ease' }}>
        <Image src={brand4} borderRadius={['20px', '20px', '0']}  w={['full','full', '200px','200px','250px']} h={['300px','300px', 'auto']} objectFit='cover' />
    

    <Box className="">
        <Text fontWeight='600' fontSize={['16px']}>Automated Payment Setup</Text>
        <Text fontSize={['14px']}>Which bill is next or pending? Simplify your life by automating payments. Receive timely reminders, so you never miss a due date again.</Text>
    </Box>
    </Box>

   


</Box>


<Box mt={['50px','60px','70px']} display="grid" gridTemplateColumns={['repeat(auto-fit, minmax(200px, 1fr))','repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)', 'repeat(2, 1fr)']} gridTemplateRows={['auto', 'auto', 'auto']} gap={['30px', '40px', '20px']}>
<Box display={['grid', 'grid', "flex"]} gap='10px' alignItems='center'  _hover={{ transform: 'scale(0.9)', transition: 'transform 0.3s ease' }}>
        <Image src={brand5}  w={['full','full', '200px','200px','250px']} h={['300px','300px', 'auto']}  />
    

    <Box className="">
        <Text fontWeight='600' fontSize={['16px']}>Customised Debit Cards</Text>
        <Text fontSize={['14px']}>Elevate your home shopping experience with debit cards for you and your loved ones. Fund your card with only what you need and track all your card expenses seamlessly.</Text>
    </Box>
    </Box>


    <Box display={['grid', 'grid', "flex"]} gap='10px' alignItems='center'  _hover={{ transform: 'scale(0.9)', transition: 'transform 0.3s ease' }}>
        <Image src={brand6} w={['full','full', '200px','200px','250px']}h={['300px','300px', 'auto']}  />
    

    <Box className="">
        <Text fontWeight='600' fontSize={['16px']}>Health and Wealth Growth</Text>
        <Text fontSize={['14px']}>Get care, comfort, and protection together with our ever-growing list of value-added services like insurance, investments, savings, and healthcare and lots more!</Text>
    </Box>
    </Box>
</Box>


    </Box>
  )
}

export default DetailsPage




