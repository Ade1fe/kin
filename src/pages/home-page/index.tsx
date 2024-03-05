
import { Box } from '@chakra-ui/react';
import { DetailsPage, HereForYou, HeroCom, Waitlist } from '../../common/components';
import Footer from '../../common/components/footer';
import { useRef } from 'react';

const HomePage = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box >
       <Box bg="white"  px={['25px']} > <HeroCom handleJoinWaitlist={scrollToWaitlist} forwardedRef={waitlistRef} /> </Box>
    <Box className="" px={['25px']}  bg='#F8F8F8'>  <DetailsPage handleJoinWaitlist={scrollToWaitlist} forwardedRef={waitlistRef} /></Box>
     <Box className=""  px={['25px']}  bg="white"> <HereForYou /></Box>
     <Box className=""  px={['25px']}  bg='#EEFBEE'> <Waitlist ref={waitlistRef} /></Box>
     <Box className=""  px={['25px']}  bg='white'> <Footer /></Box>
    </Box>
  );
}

export default HomePage;
