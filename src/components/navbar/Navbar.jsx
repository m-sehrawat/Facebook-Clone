import { Flex, Spacer } from "@chakra-ui/react";
import { Search } from "./Search";
import { Option } from "./Option";
import { CenterLinks } from "./CenterLinks";
import { Outlet } from "react-router-dom";

export const Navbar = () => {

    return (
        <>
            <Flex h={'57px'} boxShadow={'lg'}>

                <Search />

                <Spacer />

                <CenterLinks />

                <Spacer />

                <Option />

            </Flex>

            <Outlet />
        </>
    );
};