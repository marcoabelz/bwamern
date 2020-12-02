import { FETCH_PAGE } from "../types";
import axios from "configs/axios"; //library untuk ngefetch api endpoint


export const fetchPage = (url, page) => (dispatch) => {
    return axios.get(url).then((response) => {
        dispatch({
            type: FETCH_PAGE,
            payload: {
                [page]: response.data,
            },
        });
    });
};