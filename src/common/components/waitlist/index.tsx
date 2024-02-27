


import React, { useState } from 'react';
import { Box, Text, Input, Button, Image, useToast } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../../firebase';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { arrows, checkicon } from '../../../assets';


const Waitlist = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: ''
  });
  const [isLoading, setLoading] = useState(false);
  const [, setWaitlistPosition] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Regular expression to match only letters
    const onlyLettersRegex = /^[A-Za-z]+$/;

    // Check if the input value matches the regular expression
    if (name === 'firstName') {
      if (!onlyLettersRegex.test(value)) {
        setFirstNameError('First name must contain only letters');
      } else {
        setFirstNameError('');
      }
    } else if (name === 'lastName') {
      if (!onlyLettersRegex.test(value)) {
        setLastNameError('Last name must contain only letters');
      } else {
        setLastNameError('');
      }
    }

    // Update the state with the new value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstNameError || lastNameError) {
      // Don't submit if there are errors
      return;
    }
    
    try {
      setLoading(true);
      const auth = getAuth(app);
      const { user } = await createUserWithEmailAndPassword(auth, formData.emailAddress, 'password');
      const firestore = getFirestore(app);
      const waitlistCollection = collection(firestore, 'waitlist');
      const docRef = await addDoc(waitlistCollection, {
        email: user?.email,
        userId: user?.uid,
        created: new Date().toISOString(),
        firstName: formData.firstName, 
        lastName: formData.lastName,   
      });
      console.log("Document written with ID: ", docRef.id);
      localStorage.clear();
      const waitlistSnapshot = await getDocs(waitlistCollection);
      const lastPosition = waitlistSnapshot.docs.length;
      setWaitlistPosition(lastPosition);
      setModalOpen(true); // Set isModalOpen to true after successful submission
      setFormData({ firstName: '', lastName: '', emailAddress: '' }); 
    } catch (error:any) {
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='red.500' borderRadius='md'>
            Error adding to the waitlist: {error.message}
          </Box>
        ),
      });
    }
    finally {
      setLoading(false);
    }
  };

  const reloadPage = () => {
   window.location.reload();
  };

  return (
    <Box bg='#EEFBEE' overflow='hidden'   px={['20px', '35px', '50px', '60px', '70px']} py={['70px', '90px', '120px']} display={['block', 'block', 'block', 'flex']} justifyContent={['center', 'center', 'center', 'space-evenly']} gap='30px'>
      <Box w={['100%', '100%', '100%', '500px']} mx='auto' mb={['60px', '65px', '70px', '0']}>
        <Image src={arrows} boxSize='30px' mb='20px' />
        <Text textAlign={['center', 'center', 'center', 'left']} lineHeight={['50px']} fontWeight='600' fontSize={['40px', '44px', '48px']}>We intend to be with you every step of the way.</Text>
      </Box>

      {!isModalOpen && (
        <Box px="4" pos='relative' py={['30px']} ref={ref} shadow='base' bg='white' mx='auto' w={['100%', '100%', '100%', '604px']} borderRadius='30px'>
          <form onSubmit={handleSubmit}>
            <Box className="">
              <Text fontSize={['18px', '19px', '20px']} fontWeight='bold'>Join the waitlist. </Text>
              <Text mb='50px'>Get notified when we launch. Let’s grow together.</Text>
              <Box display='grid' mb='20px'>
                <label htmlFor='firstName'>First name</label>
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
                {firstNameError && <Text fontSize='sm' color="red">{firstNameError}</Text>}
              </Box>
              <Box display='grid' mb='20px'>
                <label htmlFor='lastName'>Last name</label>
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
                {lastNameError && <Text fontSize='sm' color="red">{lastNameError}</Text>}
              </Box>
              <Box display='grid' mb='20px'>
                <label htmlFor='email'>Email address</label>
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
              <Button
                className='blue'
                p={['10px']}
                spinnerPlacement='start'
                loadingText='Submitting...'
                isLoading={isLoading}
                borderRadius='40px'
                w={['150px']}
                color='white'
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </Box>
          </form>
        </Box>
      )}

     

{isModalOpen && ( 
           <Box
           display={'flex'}
           justifyContent='center'
           textAlign='center'
           flexDirection='column'

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
           <Button p='4' width={['160p', '180px', '200px']} mx='auto' borderRadius='40px' border='1px' borderColor='#DFE1E5' onClick={reloadPage}>Return Home</Button>
            </Box>
         </Box>
      )}

    </Box>
  );
});

export default Waitlist;
