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


export const getDataInside = (id, setState) => {

    fetch(`http://localhost:1234/user/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setState(res.friend_ids);
        })
        .catch((err) => {
            console.log(err);
        })
}


export const getDataRequest = (id, setState) => {

    fetch(`http://localhost:1234/user/${id}`)
        .then((res) => res.json())
        .then((res) => {
            setState(res.friend_request_in_ids);
        })
        .catch((err) => {
            console.log(err);
        })
}


export const getDataIterate =(id, state, setState) => {

    fetch(`http://localhost:1234/user/${id}`)
    .then((res) => res.json())
    .then((res) => {
        state.push(res);
        setState([...state]);
    })
    .catch((err) => {
        console.log(err);
    })
}