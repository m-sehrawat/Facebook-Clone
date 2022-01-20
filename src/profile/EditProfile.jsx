import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Input, Divider, Box, Heading, Image, Flex, Spacer, VStack, } from '@chakra-ui/react'
import { RiEdit2Fill } from 'react-icons/ri';
import { loadData, saveData } from '../utils/localstore';
import { useState } from "react"


export const EditProfile = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { _id } = loadData("user")
    const [profile, setProfile] = useState('');
    const [bio, setBio] = useState('');

    const uploadProfilePic = () => {
        fetch(`http://localhost:1234/profpic/${_id}`, {
            method: 'PATCH',
            body: profile,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(d => d.jon())
            .then((res) => {
                console.log(res)
            })
            .catch(err => { console.log(err) })

    }

    const onSubmit = () => {
        fetch(`http://localhost:1234/user/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify({ bio }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                saveData('user', res);
                onClose();
            })
            .catch(err => { console.log(err) })
    }

    

    return (
        <>
            <Button leftIcon={<RiEdit2Fill />} m={'120px 50px'} onClick={onOpen}>Edit Profile</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={700} textAlign={'center'}>Edit Profile</ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody >

                        <Box m={'10px'}>
                            <Flex>
                                <Heading fontSize={20}>Profile Pic</Heading>
                                <Spacer />
                                <input id='profilePic' type='file' accept="image/png, image/jpeg" />
                                <Spacer />
                                <Button onClick={uploadProfilePic}>Add</Button>
                            </Flex>
                            <Flex justify={'center'} m={4}>
                                <Box w={'160px'} h={'160px'} overflow={'hidden'} rounded={'full'}>
                                    <Image src='https://via.placeholder.com/200' />
                                </Box>
                            </Flex>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Flex>
                                <Heading fontSize={20}>Cover Photo</Heading>
                                <Spacer />
                                <input id='profilePic' type='file' accept="image/png, image/jpeg" />
                                <Spacer />
                                <Button>Add</Button>
                            </Flex>
                            <Flex justify={'center'} m={4}>
                                <Box w={'330px'} h={'100px'} overflow={'hidden'} rounded={4}>
                                    <Image w={'100%'} src='https://via.placeholder.com/200' />
                                </Box>
                            </Flex>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Heading fontSize={20}>Bio</Heading>
                            <Flex my={2} gap={2}>
                                <Input onChange={(e) => { setBio(e.target.value) }} type={'text'} placeholder='Add your Bio' />
                                <Button onClick={onSubmit} >Add</Button>
                            </Flex>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Heading fontSize={20}>Customise your Intro</Heading>
                            <VStack mt={3}>
                                <Input type={'text'} placeholder='Current town or city' />
                                <Input type={'text'} placeholder='Workplace' />
                                <Input type={'text'} placeholder='School or university' />
                                <Input type={'text'} placeholder='Home town' />
                                <Input type={'text'} placeholder='Relationship status' />
                                <Button type={'submit'} w={'100%'}>Add</Button>
                            </VStack>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Heading fontSize={20}>Hobbies</Heading>
                            <Flex my={2} gap={2}>
                                <Input type={'text'} placeholder='Add your Hobbies' />
                                <Button>Add</Button>
                            </Flex>
                        </Box>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    );
};