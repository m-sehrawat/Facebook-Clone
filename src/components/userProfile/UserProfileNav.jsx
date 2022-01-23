import { Box, Button, Divider, Flex, Heading, HStack, Image, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getData } from "../../utils/getData";
import { loadData } from "../../utils/localstore";

const NewButton = ({ title, path }) => {
  return (
    <Button color={"#3a3a3a"} p={6} mr={2} bg={"white"}>
      <Link to={path}>{title}</Link>
    </Button>
  );
};

export const UserProfileNav = () => {
  const id = loadData("viewProfileId");
  const { _id } = loadData("user");
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });
  const { firstName, lastName } = userData;
  const [receiver, setReceiver] = useState({});
  const [pic,setPic]=useState("https://via.placeholder.com/200")

  function sendrequest(senderid, receiverid) {
    

    // receiver array editing
    fetch(`http://localhost:1234/user/${id}`).then(d => d.json()).then((res) => {
        setReceiver(res)
      
    }).catch(err => { console.log(err) })

       var arr=receiver.friend_request_in_ids
      
       console.log(arr,"mai he hu wo arry")

    fetch(`http://localhost:1234/user/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
      friend_request_in_ids:[]
      }),
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log("Response:", res, " I am response from patch reques");
      })
      .catch((err) => {
        console.log(err);
      });





  }

 function getsetprofile(id){

    fetch(`http://localhost:1234/profpic/${id}`).then(res=>res.json()).then(res=>{setPic(res.img);
    
    

    }).catch(err=>{
        console.log(err)
    })

 }


  useEffect(() => {
    getsetprofile(id)
    getData(id, setUserData);
  }, []);

  return (
    <>
      <Box h={"570px"} bg={"white"}>
        <Box w={"950px"} h={"570px"} m={"auto"}>
          <Box overflow={"hidden"} h={"300px"}>
            <Image
              rounded={10}
              w={"950px"}
              src="https://via.placeholder.com/950x300"
            />
          </Box>

          <Box h={"200px"}>
            <Flex>
              <Box w={"200px"} h={"200px"} p={3} overflow={"hidden"}>
                <Image rounded={"full"} src={`uploadImgs/${pic}`} />
              </Box>
              <Box p={5} mt={10}>
                <Heading>
                  {firstName} {lastName}
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Button
                  colorScheme={"blue"}
                  m={"120px 50px"}
                  onClick={() => {
                    sendrequest(_id, id);
                  }}
                >
                  Send Request
                </Button>
              </Box>
            </Flex>
          </Box>
          <Divider />

          <Box h={"50px"} mt={3}>
            <HStack>
              <NewButton title={"Post"} path={"/userprofile"} />
              <NewButton title={"About"} path={"/userprofile/about"} />
              <NewButton title={"Photos"} path={"/userprofile/photos"} />
            </HStack>
          </Box>
        </Box>
      </Box>

      <Outlet />
    </>
  );
};
