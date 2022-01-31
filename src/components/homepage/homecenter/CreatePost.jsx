import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Divider, Textarea, VStack, Input, HStack, Text, useToast, } from '@chakra-ui/react'

import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { loadData } from '../../../utils/localstore';
import {Heroku} from '../../../utils/herokuLink';

export const CreatePost = ({getpost}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [text, setText] = useState("");

    const photo = useRef()
    const { _id, firstName } = loadData('user')
    const [pic,setPic]=useState("") 

    const displayToast = useToast();
    const toast = (title, description, status) => displayToast({ title, description, status, position: 'top', duration: 7000, isClosable: true, });

    function getsetprofile(id){

        fetch(`${Heroku}/profpic/${id}`).then(res=>res.json()).then(res=>{setPic(res.img);
        
        
    
        }).catch(err=>{
            console.log(err)
        })
    
     }
   useEffect(()=>{

    getsetprofile(_id)


   },[_id])



    console.log(loadData('user'), "mai use data hu")

    const makepost = () => {
        
        


        var formData = new FormData();
        formData.append('user_id', _id)
        formData.append('title', text)
        formData.append('username', firstName)
        formData.append('post_img', photo.current.files[0])
        formData.append('userimg',pic)

        fetch(`${Heroku}/post/${_id}`, {
            method: 'POST',
            body: formData
        })
            .then(d => d.json())
            .then((res) => {
                getpost();
                toast('Task Done', 'Post created successfully', 'success')
                onClose();
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
                            <Textarea minH={'200px'} fontSize={23} placeholder="what's on your mind ?" onChange={e => setText(e.target.value)} />
                            <HStack>
                                <Text fontSize={20} fontWeight={500}>Add Image: </Text>
                                <input ref={photo} type={'file'} accept="image/png, image/jpeg" />
                            </HStack>
                            <Button colorScheme={'blue'} w={'100%'} onClick={() => makepost()}>Post</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

