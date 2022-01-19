import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, } from '@chakra-ui/react'
import { RiEdit2Fill } from 'react-icons/ri';

export const EditProfile = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button leftIcon={<RiEdit2Fill />} m={'120px 50px'} onClick={onOpen}>Edit Profile</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odio temporibus eligendi dolore repellendus et velit voluptas assumenda quas alias.</p>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    );
};