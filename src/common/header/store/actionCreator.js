import {  SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
import { constants } from '.';

export const searchFocus = () => ({
     type: SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: SEARCH_BLUR
});

export const onMouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const onMouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

const change_list = (data)=> ({
    type: CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) =>{
            const data = res.data;
            // const action = change_list(data.data);
            dispatch(change_list(data.data));
        }).catch(() =>{
            console.log('error')
        })
    }
};