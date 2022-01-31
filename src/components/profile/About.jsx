import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { loadData } from "../../utils/localstore";
import { EditProfile } from "./EditProfile";
import { AiFillHeart } from "react-icons/ai";
import { MdMapsHomeWork, MdPlace, MdSkateboarding, MdAccountBalance, MdSchool, MdPermContactCalendar, MdQrCodeScanner, MdImportContacts, MdDvr, MdVolumeUp } from "react-icons/md";
import { useEffect, useState } from "react";
import { Heroku } from "../../utils/herokuLink";

const IntroText = ({ icon, title }) => {
    return (
        <Flex my={3}>
            <Icon as={icon} w={6} h={6} color={'grey'} mr={4} />
            <Text fontSize={18}>{title}</Text>
        </Flex>
    );
};

export const About = () => {

    const { _id } = loadData("user");
    const [data, setData] = useState({ university: "", school: "", currentCity: "", homeTown: "", relationship: "", hobbies: "", date: "", interest: "", language: "", website: "", socialLink: ""});
    const { university, school, currentCity, homeTown, relationship, hobbies, date, interest, language, website, socialLink } = data;
    
    const getUserData = () => {
        fetch(`${Heroku}/user/${_id}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <Box bg={'#f0f2f5'} minH={'300px'} pt={5} pb={'100px'}>

                <Box w={'950px'} m={'auto'} >

                    <Grid templateColumns='32% 66%' gap={5}>

                        <Box minH={20} bg={'white'} rounded={6} p={5} boxShadow={'lg'}>
                            <Heading fontSize={23}>About</Heading>
                            {university ? <Text my={3} fontSize={18}>University / College</Text> : null}
                            {school ? <Text my={3} fontSize={18}>School</Text> : null}
                            {currentCity ? <Text my={3} fontSize={18}>Current City / Town</Text> : null}
                            {homeTown ? <Text my={3} fontSize={18}>Home Town</Text> : null}
                            {relationship ? <Text my={3} fontSize={18}>Relationship Status</Text> : null}
                            {hobbies ? <Text my={3} fontSize={18}>Hobbies</Text> : null}
                            {interest ? <Text my={3} fontSize={18}>Interests</Text> : null}
                            {language ? <Text my={3} fontSize={18}>Languages Known</Text> : null}
                            {date ? <Text my={3} fontSize={18}>Date of Birth</Text> : null}
                            {website ? <Text my={3} fontSize={18}>Website</Text> : null}
                            {socialLink ? <Text my={3} fontSize={18}>Socialmedia Links</Text> : null}

                            <EditProfile w={'100%'} m={'15px auto 5px'} title={'Edit About Section'} getUserData={getUserData} />
                        </Box>

                        <Box bg={'white'} rounded={6} p={5} boxShadow={'lg'} pt={'50px'}>
                            {university ? <IntroText title={`Studied at ${university}`} icon={MdSchool} /> : null}
                            {school ? <IntroText title={`Went to ${school}`} icon={MdAccountBalance} /> : null}
                            {currentCity ? <IntroText title={`Lives in ${currentCity}`} icon={MdMapsHomeWork} /> : null}
                            {homeTown ? <IntroText title={`From ${homeTown}`} icon={MdPlace} /> : null}
                            {relationship ? <IntroText title={relationship} icon={AiFillHeart} /> : null}
                            {hobbies ? <IntroText title={hobbies} icon={MdSkateboarding} /> : null}
                            {interest ? <IntroText title={interest} icon={MdImportContacts} /> : null}
                            {language ? <IntroText title={language} icon={MdVolumeUp} /> : null}
                            {date ? <IntroText title={date} icon={MdPermContactCalendar} /> : null}
                            {website ? <IntroText title={website} icon={MdDvr} /> : null}
                            {socialLink ? <IntroText title={socialLink} icon={MdQrCodeScanner} /> : null}

                        </Box>

                    </Grid>
                </Box>

            </Box>
        </>
    );
};