

import React from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { checkicon } from '../../../assets';

interface WaitlistCardProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistCard: React.FC<WaitlistCardProps> = ({ isOpen, onClose }) => {
  return (
    <Box
      display={isOpen ? 'flex' : 'none'}
      justifyContent='center'
      textAlign='center'
      flexDirection='column'
      pos='absolute'
      top='0'
      left={['0', "0", "0" ,'0px']}
      px="4"
      py={['30px']}
      h='534px'
      shadow='base'
      bg='white'
      mx='auto'
      w={['100%', '100%', '100%', '604px']} 
      borderRadius='30px'
    >
       <Box w={['90%', '90%', '80%', '40%', '50%']} mx='auto'>
        <Box w="105px" h={['105px']} mb={['35px']} borderRadius='10px' mx='auto' display='flex' alignItems='center' border='1px' borderColor="#DFE1E5">
        <Image src={checkicon} boxSize={['40px']}  mx='auto' />
        </Box>
       <Text mb={['10px']} fontWeight='600' fontSize={['16px']}>You’re now on the waitlist!</Text>
      <Text mb={['30px']} fontStyle={['14px']}>Thanking you for joining the Kin waitlist. We’d let you know once we launch.</Text>
      <Button p='4' width={['160p', '180px', '200px']} mx='auto' borderRadius='40px' border='1px' borderColor='#DFE1E5' onClick={onClose}>Return Home</Button>
       </Box>
    </Box>
  );
};

export default WaitlistCard;

