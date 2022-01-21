import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Search } from "./Search";
import { Option } from "./Option";
import { CenterLinks } from "./CenterLinks";
import { Outlet } from "react-router-dom";

export const Navbar = () => {

    return (
        <>
            <Flex h={'57px'} boxShadow={'lg'} pos="fixed" w={'100%'} bg={'white'} zIndex={2}>

                <Search />

                <Spacer />

                <CenterLinks />

                <Spacer />

                <Option />

            </Flex>

            <Box pt={'57px'}>
                <Outlet />
            </Box>
        </>
    );
};