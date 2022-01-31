import { Avatar, Button, Center, Divider, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag, TagLabel, Text, useToast, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon, ChatIcon, MoonIcon, QuestionIcon, SettingsIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { loadData } from "../../utils/localstore";
import { saveData } from "../../utils/localstore";
import { useState ,useEffect} from "react";
import { Heroku } from "../../utils/herokuLink";

const Item = ({ iconName, title }) => {
    return (
        <MenuItem icon={iconName}>
            <Text fontWeight={500}>{title}</Text>
        </MenuItem>
    );
};

export const Option = () => {

    const navigate = useNavigate();
    const [pic,setPic]=useState("");
    const displayToast = useToast();
    const toast = (title, status) => {
        return displayToast({
            title,
            status,
            position: 'top',
            duration: 7000,
            isClosable: true,
        });
    }

    const handleLogout = () => {
        saveData("token", "");
        saveData("auth", false);
        saveData("user", {});
        toast('Logout Successful', 'success');
        navigate("/login");
    }



    const { firstName, lastName, _id } = loadData('user') || { firstName: "", lastName: "" ,_id:""};



     useEffect(()=>{



        fetch(`${Heroku}/profpic/${_id}`).then(res=>res.json()).then(res=>{setPic(res.img);
    
        console.log(res, "I am profile picture")
    
        }).catch(err=>{

            console.log(err)
        })

     },[_id])
         


    return (
        <>
            <Center mr={4}>
                <Link to={'/profile'}>
                    <Tag size='lg' colorScheme='white' borderRadius='full' _hover={{ bg: "#f0f2f5" }} h={10}>
                        <Avatar size='sm' name={`${firstName} ${lastName}`} ml={-1} mr={2} src={`uploadImgs/${pic}`} />
                        <TagLabel>{firstName}</TagLabel>
                    </Tag>
                </Link>
            </Center>

            <Center mr={4}>
                <Button rounded={'full'}><ChatIcon /></Button>
            </Center>

            <Center mr={4}>
                <Menu>
                    <MenuButton as={IconButton} aria-label='Options' icon={<TriangleDownIcon />} rounded={'full'} />
                    <MenuList w={'360px'} boxShadow={'2xl'}>
                        <VStack gap={2} fontSize={17}>

                            <MenuItem onClick={() => navigate('/profile')} icon={<Avatar name={`${firstName} ${lastName}`} size={'lg'}/>}>
                                <Text fontSize={20} fontWeight={500} >{firstName} {lastName}</Text>
                                <Text fontSize={14} color={'grey'}>See your profile</Text>
                            </MenuItem>

                            <Divider />
                            <MenuItem icon={<ChatIcon w={6} h={6} />}>
                                <Text fontWeight={500}>Give feedback</Text>
                                <Text color={'grey'} fontSize={12}>Help us improve the new facebook</Text>
                            </MenuItem>
                            <Divider />

                            <Item iconName={<SettingsIcon w={6} h={6} />} title={'Settings & privacy'} />
                            <Item iconName={<QuestionIcon w={6} h={6} />} title={'Help & support'} />
                            <Item iconName={<MoonIcon w={6} h={6} />} title={'Display & accessibility'} />

                            <MenuItem onClick={handleLogout} icon={<ArrowForwardIcon w={6} h={6} />}>
                                <Text fontWeight={500}>Log Out</Text>
                            </MenuItem>

                            <Text px={5} color={'grey'} fontSize={13}>Privacy · Terms · Advertising · Ad choices · Cookies · More · Meta © 2022</Text>

                        </VStack>
                    </MenuList>
                </Menu>
            </Center>
        </>

    );
};