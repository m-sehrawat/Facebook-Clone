import { Box, Button, Container, Divider, Flex, Grid, Heading, Input, Text, useToast, VStack } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginfailure, loginsuccess } from "../../featuresRedux/auth/action"
import { Signup } from './Signup';
import { saveData } from '../../utils/localstore';
import { loadData } from '../../utils/localstore';
import { Heroku } from '../../utils/herokuLink';

export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({ email: "", password: "" });

    const displayToast = useToast();
    const toast = (title, description, status) => displayToast({ title, description, status, position: 'top', duration: 7000, isClosable: true, });

    const handleChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });


    const handleSubmit = (e) => {
        e.preventDefault();

        const getdata = async () => {
            try {
                const res = await fetch(`${Heroku}/login`, {
                    method: "POST",
                    body: JSON.stringify(form),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json();
                const dta = await data

                if (!dta.status) {
                    dispatch(loginsuccess(dta.token))
                    saveData("user", dta.user)
                    console.log(loadData("user"))
                    toast('Login Successful', 'Got to profile section to add more details', 'success');
                    navigate('/');

                } else {
                    console.log(dta)
                    dispatch(loginfailure(dta))
                    saveData("user", "")
                    toast('Invalid Details', 'Please check your email id or password', 'error');
                }

            } catch (err) {
                console.log(err)
                toast('Network Error', 'Please try again', 'error');
            }
        }

        getdata()

      

    }


    return (

        <>
            <Box bg={'#f0f2f5'} h={'700px'}>
                <Grid templateColumns='repeat(2, 1fr)' maxW={'1100px'} m={'auto'} h={'600px'} >

                    <Box mt={'160px'} py={5} ps={8} pe={2}>
                        <Heading color={'#1877f2'} fontSize={60} mb={4}>facebook</Heading>
                        <Text lineHeight={1.2} fontWeight={500} fontSize={26}>Facebook helps you connect and share with the people in your life.</Text>
                    </Box>

                    <Box >
                        <Container h={'350px'} maxW={'400px'} mt={'120px'} bg={'white'} boxShadow={'lg'} rounded={10} p={4}>
                            <form onSubmit={handleSubmit}>
                                <VStack gap={2}>
                                    <Input type='email' name='email' placeholder='Email address' h={'50px'} onChange={handleChange} />
                                    <Input type='password' name='password' placeholder='Password' h={'50px'} onChange={handleChange} />
                                    <Button type='submit' w={'100%'} bg={'#1877f2'} color={'white'} fontWeight={500} size='lg' _hover={{ bg: '#2572d6' }} fontSize={20}>Log In</Button>
                                    <Text>Forgotten password?</Text>
                                    <Divider />
                                </VStack>
                            </form>
                            <Flex justify={'center'} mt={6}>
                            <Signup />
                            </Flex>
                        </Container>
                    </Box>

                </Grid>
            </Box>
        </>
    );
};