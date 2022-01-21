import { Box, Button, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`http://localhost:1234/groups`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setGroup(res)
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <Box minH={'660px'} bg={'#f0f2f5'} pb={'80px'} border={'1px solid #f0f2f5'}>
            <Box w={'1100px'} m={'auto'} >
                <Heading fontSize={20} my={5}>Popular near you</Heading>
            </Box>
            <SimpleGrid columns={3} spacing={7} w={'1100px'} m={'auto'} minH={200}>

                {group.map(({ _id, title, src }) => (
                    <GroupBox title={title} src={src} />
                ))}

            </SimpleGrid>
        </Box>
    );
};

//"https://via.placeholder.com/350x200"