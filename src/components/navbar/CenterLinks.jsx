import { Button, Center } from "@chakra-ui/react";
import { VscHome } from "react-icons/vsc";
import { MdGroups } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Icon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const CenterButton = ({path, iconName }) => {
    return (
        <Center mx={1}>
            <Link to={path}>
                <Button colorScheme={'whiteAlpha'} w={'110px'} h={'50px'} _hover={{ bg: '#f0f2f5' }}><Icon as={iconName} w={7} h={7} color={'grey'} /></Button>
            </Link>
        </Center>
    );
};


export const CenterLinks = () => {

    return (
        <>
            <CenterButton path={'/'} iconName={VscHome} />
            <CenterButton path={'/groups'} iconName={MdGroups} />
            <CenterButton path={'/friends'} iconName={AiOutlineUserAdd} />
        </>
    );
};