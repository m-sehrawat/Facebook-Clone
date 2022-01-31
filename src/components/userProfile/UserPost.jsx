import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { MdMapsHomeWork, MdPlace, MdSkateboarding, MdAccountBalance, MdSchool } from "react-icons/md";
import { useEffect, useState } from "react";
import { loadData } from "../../utils/localstore";
import { getData } from "../../utils/getData";
import { Homecenter } from "../homepage/homecenter/Homecenter";
import { Feed } from "../homepage/homecenter/Feed";
import { Heroku } from "../../utils/herokuLink";

const IntroText = ({ icon, title }) => {
    return (
        <Flex my={3}>
            <Icon as={icon} w={6} h={6} color={'grey'} mr={4} />
            <Text fontSize={18}>{title}</Text>
        </Flex>
    );
};

export const UserPost = () => {

    const id = loadData("viewProfileId");
    const [userData, setUserData] = useState({ bio: "", university: "", school: "", currentCity: "", homeTown: "", relationship: "", hobbies: "" });
    const { bio, university, school, currentCity, homeTown, relationship, hobbies } = userData;


    const getUserData = () => {
        fetch(`${Heroku}/user/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setUserData(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserData();
    }, []);


    const [arr, setArr] = useState([])

    useEffect(() => {
        getpost()
    }, [])


    const getpost = () => {
        fetch(`${Heroku}/post`)
            .then(d => d.json())
            .then((res) => {
                setArr(res.reverse());
            })
            .catch(err => { console.log(err) })
    }



    return (
        <>
            <Box bg={'#f0f2f5'} minH={'300px'} pt={5} pb={'100px'}>

                <Box w={'950px'} m={'auto'} >

                    <Grid templateColumns='38% 60%' gap={5}>
                        <Box bg={'white'} minH={20} maxH={'420px'} rounded={6} p={5} boxShadow={'lg'}>
                            <Heading fontSize={23}>Intro</Heading>
                            <Text fontSize={18} my={4}>{bio}</Text>
                            {university ? <IntroText title={`Studied at ${university}`} icon={MdSchool} /> : null}
                            {school ? <IntroText title={`Went to ${school}`} icon={MdAccountBalance} /> : null}
                            {currentCity ? <IntroText title={`Lives in ${currentCity}`} icon={MdMapsHomeWork} /> : null}
                            {homeTown ? <IntroText title={`From ${homeTown}`} icon={MdPlace} /> : null}
                            {relationship ? <IntroText title={relationship} icon={AiFillHeart} /> : null}
                            {hobbies ? <IntroText title={hobbies} icon={MdSkateboarding} /> : null}

                        </Box>
                        {/* <Box minH={20}>
                            {arr.map((e) => (
                                <div key={e._id}>
                                    <Feed mgtop={'7px'}
                                        ProfilePic={`uploadImgs/${e.userimg}`}
                                        message={e.title}
                                        timestamp={e.createdAt}
                                        username={e.username}
                                        image={`uploadImgs/${e.img}`}
                                        likeCount={2}
                                    />
                                </div>))}
                        </Box> */}
                    </Grid>
                </Box>

            </Box>
        </>
    );
};