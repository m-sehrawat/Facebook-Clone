import { ArrowForwardIcon, ChatIcon, MoonIcon, QuestionIcon, Search2Icon, SettingsIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Avatar, Button, Center, Divider, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Spacer, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import { VscHome } from "react-icons/vsc";
import { MdGroups } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";

export const Navbar = () => {

    return (
        <>
            <Flex h={'57px'} boxShadow={'lg'}>
                <Center mx={4}>
                    <Image boxSize='40px' borderRadius='full' alt="fbLogo" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" />
                </Center>
                <Center>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none' children={<Search2Icon color='gray.300' />} />
                        <Input rounded={'full'} placeholder="Search Facebook" bg={'#f0f2f5'} w={'270px'} />
                    </InputGroup>
                </Center>

                <Spacer />

                <Center>
                    <Button colorScheme={'whiteAlpha'} w={'110px'} h={'50px'} _hover={{ bg: '#f0f2f5' }}><Icon as={VscHome} w={7} h={7} color={'grey'} /></Button>
                </Center>
                <Center mx={2}>
                    <Button colorScheme={'whiteAlpha'} w={'110px'} h={'50px'} _hover={{ bg: '#f0f2f5' }}><Icon as={MdGroups} w={7} h={7} color={'grey'} /></Button>
                </Center>
                <Center>
                    <Button colorScheme={'whiteAlpha'} w={'110px'} h={'50px'} _hover={{ bg: '#f0f2f5' }}><Icon as={AiOutlineUserAdd} w={7} h={7} color={'grey'} /></Button>
                </Center>

                <Spacer />
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
                                <MenuItem icon={<SettingsIcon w={6} h={6} />}>
                                    <Text fontWeight={500}>Settings & privacy</Text>
                                </MenuItem>
                                <MenuItem icon={<QuestionIcon w={6} h={6} />}>
                                    <Text fontWeight={500}>Help & support</Text>
                                </MenuItem>
                                <MenuItem icon={<MoonIcon w={6} h={6} />}>
                                    <Text fontWeight={500}>Display & accessibility</Text>
                                </MenuItem>
                                <MenuItem icon={<ArrowForwardIcon w={6} h={6} />}>
                                    <Text fontWeight={500}>Log Out</Text>
                                </MenuItem>
                              
                                <Text px={5} color={'grey'} fontSize={13}>Privacy · Terms · Advertising · Ad choices · Cookies · More · Meta © 2022</Text>
                                
                            </VStack>
                        </MenuList>
                    </Menu>
                </Center>
            </Flex>
        </>
    );
};