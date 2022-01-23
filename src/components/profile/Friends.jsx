import { Box, Center, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataInside, getDataIterate } from "../../utils/getData";
import { loadData, saveData } from "../../utils/localstore";


const FriendBox = ({ firstName, lastName, src, onClick }) => {
    return (
        <Box onClick={onClick} border={'1px solid #e4e4e4'} h={'120px'} rounded={6} p={3}>
            <Flex>
                <Center w={'95px'} h={'95px'} overflow={'hidden'} rounded={10} mr={5}>
                    <Image w={'100%'} src={src} />
                </Center>
                <Center h={'95px'}>
                    <Heading cursor={'pointer'} fontSize={18}>{firstName} {lastName}</Heading>
                </Center>
            </Flex>
        </Box>
    );
};

const NewText = () => {
    return (
        <Flex justify={'center'} mt={'50px'}>
            <Text fontSize={20} color={'grey'} fontWeight={800}>No friends to show</Text>
        </Flex>
    )
}

export const Friends = () => {

    const [friendsId, setFriendsId] = useState([]);
    const [arr, setArr] = useState([]);
    const { _id } = loadData('user');
    const navigate = useNavigate();

    useEffect(() => {
        getDataInside(_id, setFriendsId)
    }, []);


    useEffect(() => {
        friendsId.forEach((id) => {
            getDataIterate(id, arr, setArr)
        })
    }, [friendsId])


    const viewProfile = (id) => {
        saveData('viewProfileId', id);
        navigate('/userprofile');
    }




    return (
        <>
            <Box bg={'#f0f2f5'} minH={'300px'} pt={5} pb={'100px'} >

                <Box w={'950px'} m={'auto'} bg={'white'} rounded={6} minH={'200px'} p={5}>

                    <Heading fontSize={23}>Friends</Heading>
                    {friendsId.length === 0 ? <NewText /> : <SimpleGrid columns={2} spacing={10} mt={8}>

                        {arr.map((e) => (
                            <FriendBox onClick={() => { viewProfile(_id) }} key={e._id} firstName={e.firstName} lastName={e.lastName} src={"https://tinyurl.com/3jtyuzje"} />
                        ))}

                    </SimpleGrid>}

                </Box>
            </Box>
        </>
    );
};

//"https://via.placeholder.com/200"