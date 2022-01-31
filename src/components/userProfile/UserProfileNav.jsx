
import { AlertDialogFooter, Box, Button, Divider, Flex, Heading, HStack, Image, Spacer, useToast } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getData } from "../../utils/getData";
import { Heroku } from "../../utils/herokuLink";
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
  const currUser=loadData("user")
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });
  const { firstName, lastName } = userData;


 
  
  const [pic,setPic]=useState(`https://via.placeholder.com/200`)
  const [mycpic,setMycpic]=useState(`https://via.placeholder.com/200`)
  const [alreadyfrd,setAlreadyfrd]=useState(false)
  const [sent,setSent]=useState(false)

  const displayToast = useToast();
  const toast = (title, description, status) => displayToast({ title, description, status, position: 'top', duration: 7000, isClosable: true, });



  function sendrequest(senderid, receiverid) {
   
    var t={};
    // receiver array editing
    fetch(`${Heroku}/user/${id}`).then(d => d.json()).then((res) => {
           
          t=res;
          
          t.friend_request_in_ids.push(senderid)
          console.log(t, "mai t hu")
          
           
    fetch(`${Heroku}/user/${id}`, {method: "PATCH",body: JSON.stringify(t),headers: {
      'Content-Type': "application/json"
      }}).then((d) => d.json()).then((res) => { console.log("Response:", res, " I am response from patch request receiver");setSent(true)})
     .catch((err) => {console.log(err);});   



          
        
        }).catch(err => { console.log(err) })   
         


function editsenderarr(){
  var obj={}

 fetch(`${Heroku}/user/${_id}`).then(d => d.json()).then((res) => {
            obj=res;
            obj.friend_request_out_ids.push(receiverid)

  fetch(`${Heroku}/user/${_id}`, {method: "PATCH",body: JSON.stringify(obj),headers: {
'Content-Type': "application/json"
}}).then((d) => d.json()).then((res) => { console.log("Response:", res, " I am response from patch request sender");})
.catch((err) => {console.log(err);});


}).catch(err => { console.log(err) })
}
editsenderarr()

}
  

function getsetprofile(id) {fetch(`${Heroku}/profpic/${id}`).then(res => res.json()).then(res => { setPic(res.img);
   }).catch(err => {console.log(err)})}

 function getsetcover(id){
  fetch(`${Heroku}/coverpic/${id}`).then(res=>res.json()).then(res=>{setMycpic(res.img);}).catch(err=>{
    console.log(err)})}



function getsetAlreadyfrd(){
  var alf={}
  fetch(`${Heroku}/user/${id}`).then((d) => d.json()).then((res) => {
    alf=res;
     
    alf.friend_request_in_ids.includes(_id)?setAlreadyfrd(true):setAlreadyfrd(false)
    
    
    })
   .catch((err) => {console.log(err);});  
   
   }

  function getsetcover(id) {
    fetch(`${Heroku}/coverpic/${id}`).then(res => res.json()).then(res => {
      setMycpic(res.img);



    }).catch(err => {
      console.log(err)
    })



  }



  useEffect(() => {
    getsetprofile(id)
    getsetcover(id)
    getsetAlreadyfrd()
    getData(id, setUserData);
  }, [id]);

  return (
    <>
      <Box h={"570px"} bg={"white"}>
        <Box w={"950px"} h={"570px"} m={"auto"}>
          <Box overflow={"hidden"} h={"300px"} rounded={10} border={'2px solid #ececec'}>
            <Image
              w={"950px"}
              src={`uploadImgs/${mycpic}`}
            />
          </Box>

          <Box h={"190px"} mt={3}>
            <Flex>
              <Box w={'180px'} h={'180px'} rounded={'full'} overflow={"hidden"} border={'2px solid #ececec'}>
                <Image src={`uploadImgs/${pic}`} />
              </Box>
              <Box p={5} mt={10}>
                <Heading p={5} mt={7}>
                  {firstName} {lastName}
                </Heading>
              </Box>
              <Spacer />
              <Box>
                <Button
                  colorScheme={"blue"}
                  m={"120px 50px"}
                  onClick={() => {
                    toast('Friend Request Send', '','success')
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
              {/* <NewButton title={"Photos"} path={"/userprofile/photos"} /> */}
            </HStack>
          </Box>
        </Box>
      </Box>

      <Outlet />
    </>
  );
};
