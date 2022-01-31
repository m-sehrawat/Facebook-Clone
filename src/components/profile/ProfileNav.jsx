import { Box, Button, Divider, Flex, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { loadData } from "../../utils/localstore";
import { EditProfilePic } from "./EditProfilePic";


const NewButton = ({ title, path }) => {
    return (
        <Button color={'#3a3a3a'} p={6} mr={2} bg={'white'}>
            <Link to={path}>{title}</Link>
        </Button>
    );
};


export const ProfileNav = () => {

    const [pic, setPic] = useState('https://via.placeholder.com/200')
    const [mycpic,setMycpic]=useState("https://via.placeholder.com/900x350")
    const { firstName, lastName, friend_ids } = loadData('user');

    return (
        <>
            <Box h={'570px'} bg={'white'}>
                <Box w={'950px'} h={'570px'} m={'auto'}>

                    <Box overflow={'hidden'} h={'300px'} rounded={10} border={'2px solid #ececec'}>
                        <Image  w={'950px'} src={`uploadImgs/${mycpic}`} />
                    </Box>

                    <Box h={'190px'} mt={3}>
                        <Flex>
                            <Box w={'180px'} h={'180px'} rounded={'full'} overflow={'hidden'} border={'2px solid #ececec'}>
                                <Image src={`uploadImgs/${pic}`} />
                            </Box>
                            <Box p={5} mt={7}>
                                <Heading>{firstName} {lastName}</Heading>
                                <Text color={'grey'}>{friend_ids.length} Friends</Text>
                            </Box>
                            <Spacer />
                            <Box>
                                <EditProfilePic m={'120px 50px'} title={'Edit Profile'} pic={pic} setPic={setPic}  mycpic={mycpic} setMycpic={setMycpic} />
                            </Box>
                        </Flex>
                    </Box>
                    <Divider />

                    <Box h={'50px'} mt={3}>
                        <HStack>
                            <NewButton title={'Post'} path={'/profile'} />
                            <NewButton title={'About'} path={'/profile/about'} />
                            <NewButton title={'Friends'} path={'/profile/friends'} />
                            {/* <NewButton title={'Photos'} path={'/profile/photos'} /> */}
                        </HStack>
                    </Box>
                </Box>
            </Box>

            <Outlet />
        </>
    );
};