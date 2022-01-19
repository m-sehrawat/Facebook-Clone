import { Search2Icon } from "@chakra-ui/icons";
import { Center, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const Search = () => {

    return (
        <>
            <Center mx={4}>
                <Image boxSize='40px' borderRadius='full' alt="fb Logo" src="https://tinyurl.com/46yb9h2c" />
            </Center>
            <Center>
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<Search2Icon color='gray.300' />} />
                    <Input rounded={'full'} placeholder="Search Facebook" bg={'#f0f2f5'} w={'270px'} />
                </InputGroup>
            </Center>
        </>
    );
};