import { Box, Button, Container, Divider, Grid, Heading, Input, Text, VStack } from '@chakra-ui/react';


export const Login = () => {

    return (
        <>
            <Box
                bg={'#f0f2f5'}
                h={'700px'}
            >
                <Grid templateColumns='repeat(2, 1fr)' maxW={'1100px'} m={'auto'} h={'600px'} >

                    <Box mt={'160px'} py={5} ps={8} pe={2}>
                        <Heading color={'#1877f2'} fontSize={60} mb={4}>facebook</Heading>
                        <Text lineHeight={1.2} fontWeight={500} fontSize={26}>Facebook helps you connect and share with the people in your life.</Text>
                    </Box>

                    <Box >
                        <Container h={'350px'} maxW={'400px'} mt={'120px'} bg={'white'} boxShadow={'lg'} rounded={10} p={4}>
                            <VStack gap={2}>
                                <Input type='email' placeholder='Email address or phone number' h={'50px'} />
                                <Input type='password' placeholder='Password' h={'50px'} />
                                <Button w={'100%'} type='submit' bg={'#1877f2'} color={'white'} fontWeight={500} size='lg' _hover={{ bg: '#2572d6' }} fontSize={20}>Log In</Button>
                                <Text>Forgotten password?</Text>
                                <Divider />
                                <Button size='lg' bg={'#42b72a'} fontWeight={500} color={'white'} _hover={{ bg: '#39a125' }}>Create New Account</Button>
                            </VStack>
                        </Container>
                    </Box>
                </Grid>


            </Box>
        </>
    );
};