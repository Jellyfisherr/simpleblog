import axios from "axios";
import *as constants from './constants';

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        // detail.json?id=1&name=aa&age=23 
        axios.get('/api/detail.json?id=' + id+'&name='+id).then((res) =>{
            const result = res.data.data;
           dispatch(changeDetail(result.title, result.content));
           console.log(res.data.data)
        })
    }
};