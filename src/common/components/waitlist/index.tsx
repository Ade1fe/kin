

import { Box, Text, Input, Button, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { arrows } from '../../../assets';

const Waitlist = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    // Reset form data after submission if needed
    setFormData({ firstName: '', lastName: '', emailAddress: '' });
  };

  return (
    <Box bg='#EEFBEE' px={['20px', '35px','50px', '60px','70px']} py={['70px', '90px', '120px']} display={['block','block','block', 'flex']} justifyContent={['center', 'center', 'center', 'space-evenly']} gap='30px'>
      <Box w={['100%','100%','100%', '500px']} mx='auto' mb={['60px', '65px', '70px', '0']}>
        <Image src={arrows} boxSize='30px' mb='20px' />
        <Text textAlign={['center','center','center','left']} lineHeight={['50px']} fontWeight='600' fontSize={['40px', '44px','48px']}>We intend to be with you every step of the way.</Text>
      </Box>

      <Box px="4" py={['30px']} ref={ref} shadow='base' bg='white' mx='auto' w={['100%','100%','100%', '604px']} borderRadius='30px'>
        <form onSubmit={handleSubmit}>
          <Box className="">
            <Text fontSize={['18px','19px','20px']} fontWeight='bold'>Join the waitlist. </Text>
            <Text mb='50px'>Get notified when we launch. Let’s grow together.</Text>
            <Box display='grid' mb='20px'>
              <label htmlFor='firstName' >First name</label>
              <Input
                type="text"
                name="firstName"
                border='1px' borderColor='#DFE1E5'
                borderRadius='10px'
                p='2'
                mt='5px'
                focusBorderColor='#DFE1E5'
                outlineColor='#009982'
                id='firstName'
                placeholder='James'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Box>
            <Box display='grid' mb='20px'>
              <label htmlFor='lastName' >Last name</label>
              <Input
                type="text"
                name="lastName"
                id='lastName'
                border='1px' borderColor='#DFE1E5'
                borderRadius='10px'
                mt='5px'
                p='2'
                placeholder='Olatunji'
                focusBorderColor='#DFE1E5'
                outlineColor='#009982'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Box>

            <Box display='grid' mb='20px'>
              <label htmlFor='email' >Email address</label>
              <Input
                type="email"
                mt='5px'
                name="emailAddress"
                id='email'
                border='1px' borderColor='#DFE1E5'
                borderRadius='10px'
                p='2'
                focusBorderColor='#DFE1E5'
                outlineColor='#009982'
                placeholder='james_olatunde@gmail.com'
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </Box>
            <Button className='blue' p={['10px']} 
              borderRadius='40px' w={['150px']} color='white'>Submit</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
});

export default Waitlist;
