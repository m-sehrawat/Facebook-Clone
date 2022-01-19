import { Button, Center } from "@chakra-ui/react";
import { VscHome } from "react-icons/vsc";
import { MdGroups } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Icon } from "@chakra-ui/icons";

const CenterButton = ({ iconName }) => {
    return (
        <Center mx={1}>
            <Button colorScheme={'whiteAlpha'} w={'110px'} h={'50px'} _hover={{ bg: '#f0f2f5' }}><Icon as={iconName} w={7} h={7} color={'grey'} /></Button>
        </Center>
    );
};


export const CenterLinks = () => {

    return (
        <>
            <CenterButton iconName={VscHome} />
            <CenterButton iconName={MdGroups} />
            <CenterButton iconName={AiOutlineUserAdd} />
        </>
    );
};