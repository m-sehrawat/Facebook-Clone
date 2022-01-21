import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Input, VStack, } from '@chakra-ui/react'
import { useState } from 'react';

export const CreateGroup = ({ postData }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [form, setForm] = useState({ title: "", src: "https://tinyurl.com/45c449j4" });

    const handleChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });

    const handleSubmit = () => postData(form,onClose);

    return (
        <>
            <Button colorScheme={'blue'} onClick={onOpen}>Create Group</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Group</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack gap={2} mb={6}>
                            <Input onChange={handleChange} name='src' placeholder='Paste Group pic image url (optional)' />
                            <Input onChange={handleChange} name='title' placeholder='Group Name' />
                            <Button onClick={handleSubmit} w={'100%'} > Create </Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};



