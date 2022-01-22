import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, Input, Divider, Box, Heading, Image, Flex, Spacer, VStack, useToast, } from '@chakra-ui/react'
import { RiEdit2Fill } from 'react-icons/ri';
import { loadData } from '../../utils/localstore';
import { useEffect, useState , useRef} from "react"
import { getData } from '../../utils/getData';






export const EditProfile = ({ m, w, title }) => {
    

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { _id } = loadData("user");

    const displayToast = useToast();
    const toast = (title, description, status) => displayToast({ title, description, status, position: 'top', duration: 7000, isClosable: true, });

    const [bio, setBio] = useState('');
    const [intro, setIntro] = useState({});
    const [hobbies, setHobbies] = useState({});
    const [website, setWebsite] = useState({});
    
  
  const profile=useRef()
          

    const handleChange = (e, state, setState) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }


    const handleSubmit = (data) => {
        fetch(`http://localhost:1234/user/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                toast('Task Done', 'Your details updated succesfully', 'success')
                onClose();
            })
            .catch((err) => {
                console.log(err);
                toast('Network Error', 'Please try again', 'error')
            })
    }

   useEffect(()=>{

    fetch(`http://localhost:1234/profpic/${_id}`)
        .then(d => d.json())
        .then((res) => {
            console.log("Response:",res.img)
        })
        .catch(err => { console.log(err) })


   },[])
     
    

    const uploadProfilePic = (e) => {

        e.preventDefault();
        var formData = new FormData();
        console.log(profile ,"mai he hu bta")
       formData.append('user_id',_id)
       formData.append('mypic', profile.current.files[0])

      console.log(profile.current.files[0], "cat")

        for (var data of formData.entries()){console.log(data,"i am for loop")}

      
        fetch(`http://localhost:1234/profpic/${_id}`, {
            method: 'PATCH',
            body:formData
       })
            .then(d => d.json())
            .then((res) => {
                
                console.log("Response:", res, " I am response",formData)
               
            })
            .catch(err => { console.log(err) })

        
        
       


        

    }




    return (
        <>
            <Button leftIcon={<RiEdit2Fill />} m={m} w={w} onClick={onOpen}>{title}</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={700} textAlign={'center'}>Edit Profile</ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody >

                        <Box m={'10px'}>
                            <form onSubmit={uploadProfilePic}>
                                <Flex>
                                    <Heading fontSize={20}>Profile Pic</Heading>
                                    <Spacer />
                                    <input ref={profile} type='file' accept="image/png, image/jpeg" name='mypic'  />
                                    <Spacer />
                                    <Button type='submit' >Add</Button>
                                </Flex>
                            </form>
                            <Flex justify={'center'} m={4}>
                                <Box w={'160px'} h={'160px'} overflow={'hidden'} rounded={'full'}>
                                    <Image src="https://via.placeholder.com/200" />
                                </Box>
                            </Flex>
                        </Box>
                        {/* https://via.placeholder.com/200 */}
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
                                    <Image w={'100%'} src="https://via.placeholder.com/200" />
                                </Box>
                            </Flex>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Heading fontSize={20}>Bio</Heading>
                            <Flex my={2} gap={2}>
                                <Input onChange={(e) => { setBio(e.target.value) }} type={'text'} placeholder='Add your Bio' />
                                <Button onClick={() => { handleSubmit({ bio }) }} >Add</Button>
                            </Flex>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Heading fontSize={20}>Customise your Intro</Heading>
                            <VStack mt={3}>
                                <Input onChange={(e) => { handleChange(e, intro, setIntro) }} name='currentCity' type={'text'} placeholder='Current town or city' />
                                <Input onChange={(e) => { handleChange(e, intro, setIntro) }} name='workplace' type={'text'} placeholder='Workplace' />
                                <Input onChange={(e) => { handleChange(e, intro, setIntro) }} name='university' type={'text'} placeholder='University' />
                                <Input onChange={(e) => { handleChange(e, intro, setIntro) }} name='school' type={'text'} placeholder='School' />
                                <Input onChange={(e) => { handleChange(e, intro, setIntro) }} name='homeTown' type={'text'} placeholder='Home town' />
                                <Input onChange={(e) => { handleChange(e, intro, setIntro) }} name='relationship' type={'text'} placeholder='Relationship status' />
                                <Button onClick={() => { handleSubmit(intro) }} type={'submit'} w={'100%'}>Add</Button>
                            </VStack>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Heading fontSize={20}>Hobbies and Interests</Heading>
                            <VStack mt={3}>
                                <Input onChange={(e) => { handleChange(e, hobbies, setHobbies) }} name='hobbies' type={'text'} placeholder='Hobbies' />
                                <Input onChange={(e) => { handleChange(e, hobbies, setHobbies) }} name='interest' type={'text'} placeholder='Interests' />
                                <Input onChange={(e) => { handleChange(e, hobbies, setHobbies) }} name='language' type={'text'} placeholder='Languages' />
                                <Button onClick={() => { handleSubmit(hobbies) }} type={'submit'} w={'100%'}>Add</Button>
                            </VStack>
                        </Box>

                        <Divider />

                        <Box m={'20px'}>
                            <Heading fontSize={20}>Social media Links</Heading>
                            <VStack mt={3}>
                                <Input onChange={(e) => { handleChange(e, website, setWebsite) }} name='website' type={'text'} placeholder='Website' />
                                <Input onChange={(e) => { handleChange(e, website, setWebsite) }} name='socialLink' type={'text'} placeholder='Social Link' />
                                <Button onClick={() => { handleSubmit(website) }} type={'submit'} w={'100%'}>Add</Button>
                            </VStack>
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

