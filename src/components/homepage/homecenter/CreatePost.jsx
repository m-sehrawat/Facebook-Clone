import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Divider, Textarea, VStack, Input, HStack, Text, } from '@chakra-ui/react'


export const CreatePost = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

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
                            <Textarea minH={'200px'} fontSize={23} placeholder="what's on your mind ?" />
                            <HStack>
                                <Text fontSize={20} fontWeight={500}>Add Image: </Text>
                                <input type={'file'} accept="image/png, image/jpeg" />
                            </HStack>
                            <Button colorScheme={'blue'} w={'100%'} >Post</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};