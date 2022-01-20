import { Box, Button, Container, Divider, Grid, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { Signup } from './Signup';

import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useState ,useEffect} from "react"
import {useSelector} from "react-redux"

import { saveData } from "../../utils/localstore";
import { useDispatch } from "react-redux"
import { loginfailure, loginsuccess } from "../../featuresRedux/auth/action"

export const Login = () => {

    const {isAuth, token}=useSelector(state=> ({isAuth:state.isAuth, todos:state.token }));
    const navigate=useNavigate();
    const [form,setForm]=useState({});
    const dispatch=useDispatch()
  
  
   
   const handleChange=({target:{name,value}})=>{
       setForm({
           ...form,
           [name]:value
       })
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
                        <Container h={'350px'} maxW={'400px'} mt={'120px'} bg={'wh  ite'} boxShadow={'lg'} rounded={10} p={4}>
                            <VStack gap={2}>
                                <Input type='email' placeholder='Email address or phone number' h={'50px'}  onChange={handleChange} />
                                <Input type='password' placeholder='Password' h={'50px'}  onChange={handleChange}/>
                                <Button w={'100%'} type='submit' bg={'#1877f2'} color={'white'} fontWeight={500} size='lg' _hover={{ bg: '#2572d6' }} fontSize={20}
                                 onClick={()=>{

try{
fetch("https://reqres.in/api/login",{
method:"POST",
body:JSON.stringify(form), 
headers:{"Content-Type":"application/json"}
,
}).then(res=>res.json()).then(res=>{ dispatch(loginsuccess(res.token));console.log(res, "I am here"); navigate(-1)})

}
catch(e){console.log(e);dispatch(loginfailure(e))}



}

}

                                
                                
                                >Log In</Button>
                                <Text>Forgotten password?</Text>
                                <Divider />
                                <Signup />
                            </VStack>
                        </Container>
                    </Box>

                </Grid>

            </Box>

           
        </>
    );
};