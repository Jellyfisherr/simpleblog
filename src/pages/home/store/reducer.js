import { fromJS } from 'immutable';

const defaultState = fromJS({
     topicList: [{
        id: 1,
        title: 'social hotpot',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4263857/34d7b217-7338-48fe-81a1-98367fecdbee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
     },
     {
        id: 2,
        title: 'hand drawing',
        imgUrl: '//upload.jianshu.io/users/upload_avatars/4263857/34d7b217-7338-48fe-81a1-98367fecdbee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
     }]
});

export default (state= defaultState, action) => {
    switch(action.type) {       
        default:   
            return state;  
    }       
  
}