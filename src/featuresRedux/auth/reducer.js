import { loadData, saveData } from "../../utils/localstore.js";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType.js";


const initState = { token: loadData("token") || "", isAuth: !loadData("token") ? false : true }

export const reducer = (state = initState, { type, payload }) => {

    switch (type) {

        case LOGIN_SUCCESS:
            saveData("token", payload)
            return {
                ...state,
                isAuth: true,
                token: payload,

            };
        case LOGIN_FAILURE: {
            saveData("token", "")
            saveData("auth", false)
            return {
                ...state,
                isAuth: false,
                token: ""
            }
        }
        default:
            return state;

    }
};