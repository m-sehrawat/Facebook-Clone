import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Text, Heading, Divider, Flex, HStack, Input, VStack, Box, Select } from '@chakra-ui/react'

export const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                    <ModalBody>
                        <VStack gap={1} mt={3}>
                            <HStack>
                                <Input type='text' bg={'#f0f2f5'} placeholder='First name' />
                                <Input type='text' bg={'#f0f2f5'} placeholder='Surname' />
                            </HStack>
                            <Input type='text' bg={'#f0f2f5'} placeholder='Mobile number or email address' />
                            <Input type='password' bg={'#f0f2f5'} placeholder='New Password' />
                            <Box w={'100%'}>
                                <Text fontSize={12} color="grey">Date of Birth</Text>
                                <Input type='date' />
                            </Box>

                            <Select placeholder='Select Gender'>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='custom'>Custom</option>
                            </Select>
                            <Text fontSize={11} color="grey">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</Text>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Flex justify={'center'} w={'100%'}>
                            <Button colorScheme='green' size={'sm'} fontWeight={500} fontSize={20} w={'50%'} bg={'#42b72a'} _hover={{ bg: '#7eb673' }} mb={3} >Sign Up</Button>
                        </Flex>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};