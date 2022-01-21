import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { loadData } from "../utils/localstore";

const IntroText = ({ icon, title }) => {
    return (
        <Flex my={2}>
            <Icon as={icon} w={6} h={6} color={'grey'} mr={4} />
            <Text fontSize={18}>{title}</Text>
        </Flex>
    );
};

export const Post = () => {

    const {bio} = loadData('user');

    return (
        <>
            <Box bg={'#f0f2f5'} minH={'300px'} pt={3} pb={'100px'}>

                <Box w={'950px'} m={'auto'} border={'1px solid red'} >

                    <Grid templateColumns='40% 58%' gap={5} border={'1px solid red'}>
                        <Box border={'1px solid red'} bg={'white'} rounded={6} p={5} boxShadow={'lg'}>
                            <Heading fontSize={23}>Intro</Heading>
                            <Text fontSize={18} my={3}>{bio}</Text>
                            <IntroText title={'location'} icon={AiOutlineHome} />
                            <IntroText title={'location'} icon={AiOutlineHome} />
                            <IntroText title={'location'} icon={AiOutlineHome} />
                            <IntroText title={'location'} icon={AiOutlineHome} />
                            <IntroText title={'location'} icon={AiOutlineHome} />

                        </Box>
                        <Box border={'1px solid red'} h={20}>

                        </Box>
                    </Grid>
                </Box>

            </Box>
        </>
    );
};