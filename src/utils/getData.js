export const getData = (id, setState) => {
    
    fetch(`http://localhost:1234/user/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setState(res);
        })
        .catch((err) => {
            console.log(err);
        })
}