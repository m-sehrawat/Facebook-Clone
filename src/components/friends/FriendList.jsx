import "./friendlist.css";
import { Box, Button, Center, Image, Text, Flex } from "@chakra-ui/react";

export const FriendList = ({title,src, mutual}) => {
    return (
       <Box rounded={8} bg={'white'} h={'360px'} overflow={'hidden'}>
            <Box h={'160px'}  overflow={'hidden'}>
                <Image w={'100%'} src={src} />
            </Box>
            <Box h={'20px'} p={4}>
                <Text fontWeight={500} fontSize={20}>{title}</Text>
            </Box>
            <Box h={'70px'} p={4}>
                <Text fontWeight={500} fontSize={12}>{`${mutual} mutual friends`}</Text>
            </Box>
            <Center h={'50px'} w={'100%'} p={4} mr={'5px'} >
                <Button w={'100%'} bgColor={"blue"} color={"white"}>Confirm</Button>
            </Center>
            <Center h={'50px'} w={'100%'} p={4} mr={'5px'} >
                <Button w={'100%'}>Delete</Button>
            </Center>
        </Box>
    )
}
