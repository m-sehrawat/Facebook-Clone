import { Box, Button, Divider, Flex, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { loadData } from "../utils/localstore";
import { EditProfile } from "./EditProfile";

const NewButton = ({ title, path }) => {
    return (
        <Button color={'#3a3a3a'} p={6} mr={2} bg={'white'}>
            <Link to={path}>{title}</Link>
        </Button>
    );
};


export const ProfileNav = () => {

    const {firstName, lastName} = loadData('user');



    return (
        <>

            <Box border={'1px solid red'} h={'570px'} bg={'white'}>
                <Box border={'1px solid red'} w={'950px'} h={'570px'} m={'auto'}>

                    <Box overflow={'hidden'} border={'1px solid red'} h={'300px'}>
                        <Image rounded={10} w={'950px'} src="https://via.placeholder.com/950x300" />
                    </Box>

                    <Box border={'1px solid red'} h={'200px'}>
                        <Flex>
                            <Box border={'1px solid red'} w={'200px'} h={'200px'} p={3} overflow={'hidden'}>
                                <Image rounded={'full'} src="https://via.placeholder.com/200" />
                            </Box>
                            <Box p={5} mt={7}>
                                <Heading>{firstName} {lastName}</Heading>
                                <Text color={'grey'}>{'Number of friends'}</Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <EditProfile />
                            </Box>
                        </Flex>
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