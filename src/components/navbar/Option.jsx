import { Avatar, Button, Center, Divider, IconButton, Menu, MenuButton, MenuItem, MenuList, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon, ChatIcon, MoonIcon, QuestionIcon, SettingsIcon, TriangleDownIcon } from "@chakra-ui/icons";


const Item = ({ iconName, title }) => {
    return (
        <MenuItem icon={iconName}>
            <Text fontWeight={500}>{title}</Text>
        </MenuItem>
    );
};


export const Option = () => {

    return (
        <>
            <Center mr={4}>
                <Tag size='lg' colorScheme='white' borderRadius='full' _hover={{ bg: "#f0f2f5" }} h={10}>
                    <Avatar size='sm' name='Segun Adebayo' ml={-1} mr={2} src='https://bit.ly/sage-adebayo' />
                    <TagLabel>UserName</TagLabel>
                </Tag>
            </Center>

            <Center mr={4}>
                <Button rounded={'full'}><ChatIcon /></Button>
            </Center>

            <Center mr={4}>
                <Menu>
                    <MenuButton as={IconButton} aria-label='Options' icon={<TriangleDownIcon />} rounded={'full'} />
                    <MenuList w={'360px'} boxShadow={'2xl'}>
                        <VStack gap={2} fontSize={17}>

                            <MenuItem icon={<Avatar size={'lg'} src="https://bit.ly/sage-adebayo" />}>
                                <Text fontSize={20} fontWeight={500} >{'User Name'}</Text>
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
                            <Item iconName={<ArrowForwardIcon w={6} h={6} />} title={'Log Out'} />
                            <Text px={5} color={'grey'} fontSize={13}>Privacy · Terms · Advertising · Ad choices · Cookies · More · Meta © 2022</Text>

                        </VStack>
                    </MenuList>
                </Menu>
            </Center>
        </>

    );
};