import React from "react"
import "./friendrequest.css";
import {Leftsidebar} from "./Leftsidebar";
import { FriendList } from "./FriendList";
import { Box, Button, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";


export const FriendRequest = () => {
    return (
        <div>
           <Leftsidebar />
           <Box minH={'660px'} bg={'#f0f2f5'} pb={'80px'} border={'1px solid #f0f2f5'} ml={'300px'}>
            <Box w={'1100px'} m={'auto'} >
                <Heading fontSize={20} my={5}>friend request</Heading>
            </Box>
            <SimpleGrid columns={5} spacing={3} w={'1100px'} m={'auto'} minH={200}>

                {[1, 2, 3, 4, 5, 6].map((e) => (
                    <FriendList title={'Title'} src={"https://via.placeholder.com/350x200"} />
                ))}

            </SimpleGrid>
        </Box>
     
        </div>
    )
}
