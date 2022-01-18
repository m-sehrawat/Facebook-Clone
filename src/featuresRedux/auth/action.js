import {LOGIN_SUCCESS, LOGIN_FAILURE} from "./actionType.js"


export const loginfailure=(err)=>{

    return {
        type:LOGIN_FAILURE,
        payload:err
    }
}   

export const loginsuccess=(token)=>{

        return {
            type:LOGIN_SUCCESS,
            payload:token
        };

    }
