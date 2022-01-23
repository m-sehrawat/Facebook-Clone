import React, { useEffect, useState } from "react"
import "./friendrequest.css";
import { Leftsidebar } from "./Leftsidebar";

import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { loadData } from "../../utils/localstore";
import { useNavigate } from "react-router-dom";
import { getDataInside, getDataIterate, getDataRequest } from "../../utils/getData";


const NewText = () => {
    return (
        <Flex  justify={'center'} mt={'50px'}>
            <Text fontSize={20} color={'grey'} fontWeight={800}>No friends to show</Text>
        </Flex>
    )
}


const FriendList = ({ title, src, element }) => {

    const { _id } = loadData('user');

    const confirmRequest = (receiver, senderObj) => {

    }

    return (
        <Box rounded={8} bg={'white'} h={'360px'} overflow={'hidden'} boxShadow={'lg'}>
            <Box h={'200px'} overflow={'hidden'}>
                <Image w={'100%'} src={src} />
            </Box>
            <Box h={'20px'} p={4} mb={5}>
                <Text fontWeight={500} fontSize={20}>{title}</Text>
            </Box>
            <Center h={'50px'} w={'100%'} p={4} mr={'5px'} >
                <Button onClick={() => { confirmRequest(_id, element) }} w={'100%'} bgColor={"#2e81f4"} color={"white"}>Confirm</Button>
            </Center>
            <Center h={'50px'} w={'100%'} p={4} mr={'5px'} >
                <Button w={'100%'}>Delete</Button>
            </Center>
        </Box>
    )
}


export const FriendRequest = () => {

    const [friendRequestId, setFriendRequestId] = useState([]);
    const [arr, setArr] = useState([]);
    const { _id } = loadData('user');
    const navigate = useNavigate();

    useEffect(() => {
        getDataRequest(_id, setFriendRequestId)
    }, []);


    useEffect(() => {
        friendRequestId.forEach((id) => {
            getDataIterate(id, arr, setArr)
        })
    }, [friendRequestId])

    const array = [
        {
            firstName: "Deepak",
            lastName: "Sharma"
        },
        {
            firstName: "Rashmi",
            lastName: "Jha"
        },
        {
            firstName: "Swarnika",
            lastName: "Singh"
        },
    ]


    const confirmRequest = () => {

    }


    return (
        <div>
            <Leftsidebar />
            <Box minH={'660px'} bg={'#f0f2f5'} pb={'80px'} border={'1px solid #f0f2f5'} ml={'300px'}>
                <Box w={'1100px'} m={'auto'} >
                    <Heading fontSize={20} my={5}>friend request</Heading>
                </Box>
                <SimpleGrid columns={5} spacing={3} w={'1100px'} m={'auto'} minH={200}>

                    {array.map((e) => (
                        <FriendList element={e} title={`${e.firstName} ${e.lastName}`} src={"https://tinyurl.com/555fszda"} />
                    ))}

                </SimpleGrid>
            </Box>

        </div>
    )
}
