// import {  SEARCH_FOCUS, SEARCH_BLUR } from './constants';
import {constants} from '../store';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list:[],
    page: 1,
    totalPage: 1,
    mouseIn: false, 
});

export default (state= defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({
                'totalPage': action.totalPage,
                'list': action.data,
            })
            // return state.set('list', action.data).set('totalPage', action.totalPage);   
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:   
            return state;  
    }
        
    // if (action.type===constants.SEARCH_FOCUS){
    //     return state.set('focused', true);       
    // }
    // if (action.type===constants.SEARCH_BLUR){
    //     return state.set('focused', false);
    // }
    // if (action.type===constants.CHANGE_LIST){
    //     return state.set('list', fromJS(action.data));        
    // }
   
}