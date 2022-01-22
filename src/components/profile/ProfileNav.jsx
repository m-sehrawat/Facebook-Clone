import { Box, Button, Divider, Flex, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { loadData } from "../../utils/localstore";
import { EditProfile } from "./EditProfile";


const NewButton = ({ title, path }) => {
    return (
        <Button color={'#3a3a3a'} p={6} mr={2} bg={'white'}>
            <Link to={path}>{title}</Link>
        </Button>
    );
};


export const ProfileNav = () => {
    const [pic, setPic]=useState('')

    const {firstName, lastName} = loadData('user');

    return (
        <>
            <Box h={'570px'} bg={'white'}>
                <Box w={'950px'} h={'570px'} m={'auto'}>

                    <Box overflow={'hidden'} h={'300px'}>
                        <Image rounded={10} w={'950px'} src="https://via.placeholder.com/950x300" />
                    </Box>

                    <Box h={'200px'}>
                        <Flex>
                            <Box w={'200px'} h={'200px'} p={3} overflow={'hidden'}>
                                <Image rounded={'full'} src="https://via.placeholder.com/200" />
                            </Box>
                            <Box p={5} mt={7}>
                                <Heading>{firstName} {lastName}</Heading>
                                <Text color={'grey'}>{'Number of friends'}</Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <EditProfile m={'120px 50px'} title={'Edit Profile'} pic={pic} setPic={setPic} />
                            </Box>
                        </Flex>
                    </Box>
                    <Divider />

                    <Box h={'50px'} mt={3}>
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