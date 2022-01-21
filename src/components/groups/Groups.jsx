import { Box, Button, Center, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const GroupBox = ({ title, src }) => {
    return (
        <Box rounded={8} bg={'white'} h={'340px'} overflow={'hidden'}>
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



    return (
        <>
            <Box minH={'660px'} bg={'#f0f2f5'} pb={'80px'} border={'1px solid #f0f2f5'}>
                <Box w={'1100px'} m={'auto'} >
                    <Heading fontSize={20} my={5}>Popular near you</Heading>
                </Box>
                <SimpleGrid columns={3} spacing={5} w={'1100px'} m={'auto'} minH={200}>

                    {[1, 2, 3, 4, 5, 6].map((e) => (
                        <GroupBox title={'Title'} src={"https://via.placeholder.com/350x200"} />
                    ))}

                </SimpleGrid>
            </Box>
        </>
    );
};