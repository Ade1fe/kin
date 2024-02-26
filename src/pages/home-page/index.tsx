// import { Box } from '@chakra-ui/react'
// import { DetailsPage, HereForYou, HeroCom, Waitlist } from '../../common/components'
// import Footer from '../../common/components/footer'
// import { useEffect, useRef } from 'react';

// const HomePage = () => {
//   const waitlistRef = useRef<HTMLDivElement>(null);

//   const scrollToWaitlist = () => {
//     // Check if the waitlistRef exists before scrolling
//     if (waitlistRef.current) {
//       waitlistRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   return (
//     <Box>
//      <HeroCom />
//      <DetailsPage handleJoinWaitlist={scrollToWaitlist} />
//      <HereForYou />
//      <Waitlist ref={waitlistRef} />
//      <Footer />
//     </Box>
//   )
// }

// export default HomePage







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
    <Box>
      <HeroCom />
      <DetailsPage handleJoinWaitlist={scrollToWaitlist} forwardedRef={waitlistRef} />
      <HereForYou />
      <Waitlist ref={waitlistRef} />
      <Footer />
    </Box>
  );
}

export default HomePage;
