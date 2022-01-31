import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Spacer, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CreateGroup } from "./CreateGroup";
import {Heroku} from "../../utils/herokuLink"

const GroupBox = ({ title, src }) => {
    return (
        <Box rounded={8} bg={'white'} h={'340px'} overflow={'hidden'} boxShadow={'xl'}>
            <Box h={'200px'} overflow={'hidden'}>
                <Image w={'100%'} src={src} />
            </Box>
            <Box h={'70px'} p={4}>
                <Text fontWeight={500} fontSize={20}>{title}</Text>
            </Box>
            <Center h={'70px'} w={'100%'} p={4}>
                <Button w={'100%'}>Join Group</Button>
            </Center>
        </Box>
    );
};

export const Groups = () => {

    const [group, setGroup] = useState([]);
    const displayToast = useToast();
    const toast = (title, description, status) => displayToast({ title, description, status, position: 'top', duration: 7000, isClosable: true, });

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`${Heroku}/groups`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setGroup(res)
            })
            .catch((err) => { console.log(err) })
    }

    const postData = (data, onClose) => {
        fetch(`${Heroku}/groups`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((res) => {
                getData();
                toast('Task Done', 'Group Created Successfully', 'success')
                onClose();
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <Box minH={'660px'} bg={'#f0f2f5'} pb={'80px'} border={'1px solid #f0f2f5'}>
            <Flex w={'1100px'} m={'auto'} my={7} >
                <Heading fontSize={20} >Popular near you</Heading>
                <Spacer />
                <CreateGroup postData={postData} />
            </Flex>
            <SimpleGrid columns={3} spacing={7} w={'1100px'} m={'auto'} minH={200}>

                {group.map(({ _id, title, src }) => (
                    <GroupBox title={title} src={src} key={_id} />
                ))}

            </SimpleGrid>
        </Box>
    );
};
