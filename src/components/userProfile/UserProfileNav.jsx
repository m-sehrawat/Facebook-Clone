import { Box, Button, Divider, Flex, Heading, HStack, Image, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getData } from "../../utils/getData";
import { loadData } from "../../utils/localstore";


const NewButton = ({ title, path }) => {
    return (
        <Button color={'#3a3a3a'} p={6} mr={2} bg={'white'}>
            <Link to={path}>{title}</Link>
        </Button>
    );
};


export const UserProfileNav = () => {

    const id = loadData("viewProfileId");
    const {_id}=loadData("user")
    const [userData, setUserData] = useState({ firstName: "", lastName: "" });
    const { firstName, lastName } = userData;
    
    function sendrequest( senderid, receiverid){
        
        
        console.log("senderid",senderid);

        console.log("receiverid",receiverid)

    }

    useEffect(() => {
        getData(id, setUserData);
    }, []);


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
                            <Box p={5} mt={10}>
                                <Heading>{firstName} {lastName}</Heading>
                            </Box>
                            <Spacer />
                            <Box >
                                <Button colorScheme={'blue'} m={'120px 50px'} onClick={()=>{sendrequest( _id,id)}}>Send Request</Button>
                            </Box>
                        </Flex>
                    </Box>
                    <Divider />

                    <Box h={'50px'} mt={3}>
                        <HStack>
                            <NewButton title={'Post'} path={'/userprofile'} />
                            <NewButton title={'About'} path={'/userprofile/about'} />
                            <NewButton title={'Photos'} path={'/userprofile/photos'} />
                        </HStack>
                    </Box>
                </Box>
            </Box>

            <Outlet />
        </>
    );
};