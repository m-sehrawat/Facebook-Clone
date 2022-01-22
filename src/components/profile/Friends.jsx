import { Box, Center, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";

export const Friends = () => {
    return (
        <>
            <Box bg={'#f0f2f5'} minH={'300px'} pt={5} pb={'100px'} >

                <Box w={'950px'} m={'auto'} border={'1px solid red'} bg={'white'} rounded={6} minH={'300px'} p={5}>

                    <Heading fontSize={23}>Friends</Heading>

                    <SimpleGrid columns={2} spacing={10} mt={8}>
                        <Box border={'1px solid grey'} h={'120px'} rounded={6} p={3}>
                            <Flex>
                                <Box>
                                    <Image />
                                </Box>
                                <Center h={'100%'}>
                                    <Heading fontSize={18}>{'firstName'} {'lastName'}</Heading>
                                </Center>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>

            </Box>
        </>
    );
};