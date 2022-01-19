import { Box, Button, Divider, HStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const NewButton = ({ title, path }) => {
    return (
        <Button color={'#3a3a3a'} p={6} mr={2} bg={'white'}>
            <Link to={path}>{title}</Link>
        </Button>
    );
};


export const ProfileNav = () => {


    return (
        <>

            <Box border={'1px solid red'} h={'570px'} bg={'white'}>
                <Box border={'1px solid red'} w={'950px'} h={'570px'} m={'auto'}>

                    <Box border={'1px solid red'} h={'300px'}>

                    </Box>

                    <Box border={'1px solid red'} h={'200px'}>

                    </Box>
                    <Divider />

                    <Box border={'1px solid red'} h={'50px'} mt={3}>
                        <HStack>
                            <NewButton title={'Post'} path={'/profile'} />
                            <NewButton title={'About'} path={'/profile/about'} />
                            <NewButton title={'Friends'} path={'/profile/friends'} />
                            <NewButton title={'Photos'} path={'/profile/photos'} />
                        </HStack>
                    </Box>
                </Box>
            </Box>

            <Outlet />
        </>
    );
};