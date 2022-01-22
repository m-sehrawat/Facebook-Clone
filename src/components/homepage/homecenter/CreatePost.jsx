import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Divider, Textarea, VStack, Input, HStack, Text, } from '@chakra-ui/react'

import { useState } from 'react';
import { useRef } from 'react';
import { loadData } from '../../../utils/localstore';
export const CreatePost = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [text,setText]=useState("");

    const photo=useRef()
    const  {_id}=loadData('user')
    console.log(_id)


    const makepost = () => {

        
        var formData = new FormData();
        console.log(photo ,"mai he hu bta")
       formData.append('user_id',_id)
       formData.append('title',text)
       formData.append('post_img', photo.current.files[0])

      console.log(photo.current.files[0], "cat")

        for (var data of formData.entries()){console.log(data,"i am for loop")}

              
         
       
      
        fetch(`http://localhost:1234/post/${_id}`, {
            method: 'POST',
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
            <Button w={'80%'} rounded={'full'} mt={1} py={'20px'} onClick={onOpen}>what's on your mind ?</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Post</ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <VStack gap={3} mb={'20px'}>
                            <Textarea minH={'200px'} fontSize={23} placeholder="what's on your mind ?" onChange={e=>setText(e)} />
                            <HStack>
                                <Text fontSize={20} fontWeight={500}>Add Image: </Text>
                                <input ref={photo} type={'file'} accept="image/png, image/jpeg" />
                            </HStack>
                            <Button colorScheme={'blue'} w={'100%'} onClick={()=>makepost()}>Post</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};