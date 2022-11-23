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
     }],

        articleList: [{
        id: 1,
        title: 'The Truth About Overwhelming Emotions, According to a Highly Sensitive Therapist',
        desc: 'Highly sensitive people can be overwhelmed by intense emotions. Here s the secret to stopping that, according to an HSP therapist.',
        imgUrl: 'https://img.freepik.com/free-photo/aerial-view-beautiful-colorful-landscape-background-amazing-mountains_181624-22209.jpg?w=2000',
     },
     {
        id: 2,
        title: 'Why HSPs Struggle with Strong Emotions',
        desc: 'The strength of your emotions is not just “in your head.” Indeed, emotions do impact HSPs on a deeper level than non-HSPs! What it boils down to is this: Our highly sensitive brains are wired differently than non-HSP brains due to our sensory processing sensitivity (SPS).',
        imgUrl: 'https://images.unsplash.com/photo-1619284543027-7fe0bbaa6225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
     },
     {
        id: 3,
        title: 'How HSPs Can Stop Falling Into the People-Pleaser Trap',
        desc: 'HSPs feel like if we dont say "yes," we\'ll disappoint someone. But those “yes\'s” add up — and pretty soon you\'re your own lowest priority.',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrczfFHQ2vKw2hHZEY2IOpCx8lD_FTsXf92A&usqp=CAU',
     },
     {
        id: 4,
        title: 'Why HSPs Struggle with Strong Emotions',
        desc: 'The strength of your emotions is not just “in your head.” Indeed, emotions do impact HSPs on a deeper level than non-HSPs! What it boils down to is this: Our highly sensitive brains are wired differently than non-HSP brains due to our sensory processing sensitivity (SPS).',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPX_mWa-DgYNCAsk63HfF8KM4ePZbawddYw&usqp=CAU',
     },
     {
        id: 5,
        title: 'Why HSPs Struggle with Strong Emotions',
        desc: 'The strength of your emotions is not just “in your head.” Indeed, emotions do impact HSPs on a deeper level than non-HSPs! What it boils down to is this: Our highly sensitive brains are wired differently than non-HSP brains due to our sensory processing sensitivity (SPS).',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfeXqWXgePC-_9utpG54SUVafb8G0BNArcg&usqp=CAU',
     },
     {
        id: 6,
        title: 'Why HSPs Struggle with Strong Emotions',
        desc: 'The strength of your emotions is not just “in your head.” Indeed, emotions do impact HSPs on a deeper level than non-HSPs! What it boils down to is this: Our highly sensitive brains are wired differently than non-HSP brains due to our sensory processing sensitivity (SPS).',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8g6VgyqXfDAoPwxQ7pQNj9DNi4rvh9BS5w&usqp=CAU',
     }]
    });

export default (state= defaultState, action) => {
    switch(action.type) {       
        default:   
            return state;  
    }       
  
}