import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Text, Heading, Divider, Flex, HStack, Input, VStack, Box, Select } from '@chakra-ui/react'
import { useState } from "react";

export const Signup = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const initState = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        date: "",
        gender: ""
    }

    const [form, setForm] = useState(initState);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        //Type your URL here
        
        fetch(`http://localhost:1234/register`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                //Type your code here
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <>
            <Button onClick={onOpen} size='lg' bg={'#42b72a'} fontWeight={500} color={'white'} _hover={{ bg: '#39a125' }}>Create New Account</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Heading fontSize={32} fontWeight={700}>Sign Up</Heading>
                        <Text fontSize={15} my={1} color={'grey'} fontWeight={400}>It's quick and easy.</Text>
                    </ModalHeader>

                    <ModalCloseButton />
                    <Divider />
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                            <VStack gap={1} mt={3}>
                                <HStack>
                                    <Input onChange={handleChange} name='firstName' type='text' bg={'#f0f2f5'} placeholder='First name' />
                                    <Input onChange={handleChange} name='lastName' type='text' bg={'#f0f2f5'} placeholder='Surname' />
                                </HStack>
                                <Input onChange={handleChange} name='email' type='email' bg={'#f0f2f5'} placeholder='Email address' />
                                <Input onChange={handleChange} name='password' type='password' bg={'#f0f2f5'} placeholder='New Password' />
                                <Box w={'100%'}>
                                    <Text fontSize={12} color="grey">Date of Birth</Text>
                                    <Input onChange={handleChange} name='date' type='date' />
                                </Box>

                                <Select onChange={handleChange} name='gender' placeholder='Select Gender'>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='custom'>Custom</option>
                                </Select>
                                <Text fontSize={11} color="grey">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</Text>
                            </VStack>
                        </ModalBody>
                        <ModalFooter>
                            <Flex justify={'center'} w={'100%'}>
                                <Button type='submit' colorScheme='green' size={'sm'} fontWeight={500} fontSize={20} w={'50%'} bg={'#42b72a'} _hover={{ bg: '#7eb673' }} mb={3}>Sign Up</Button>
                            </Flex>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};