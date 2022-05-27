import { USERS } from '../Data/Users';

export const POSTS = [

    {
        profile_img: USERS[0].profile_img,
        username: USERS[0].name,
        caption:"How cute this place",
        time: "Just Now",
        upload_img:"https://static.poder360.com.br/2020/11/homer-simpson.png",
        likes:"121",
        share:"11",
        comments:[
            {
                profile_img:USERS[4].profile_img,
                name: USERS[4].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[2].profile_img,
                name:USERS[2].name,
                comment:"wow"
            },
        ]
    },
   
    {
        profile_img: USERS[1].profile_img,
        username: USERS[1].name,
        time: "10 m.",
        caption:"How cute this place",
        upload_img:"https://static.poder360.com.br/2020/11/homer-simpson.png",
        likes:"147",
        share:"7",
        comments:[
            {
                profile_img:USERS[0].profile_img,
                name:USERS[0].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[3].profile_img,
                name:USERS[3].name,
                comment:"wow"
            },
        ]
    },

    {
        profile_img: USERS[2].profile_img,
        username: USERS[2].name,
        time: "1 h.",
        caption:"",
        upload_img:"https://static.poder360.com.br/2020/11/homer-simpson.png",
        likes:"1.2k",
        share:"7",
        comments:[
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[3].profile_img,
                name:USERS[3].name,
                comment:"wow"
            },
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"Beautifull"
            },
        ]
    },
    {
        profile_img: USERS[4].profile_img,
        username: USERS[4].name,
        time: "1 h.",
        caption:"",
        upload_img:"https://static.poder360.com.br/2020/11/homer-simpson.png",
        likes:"147",
        share:"7",
        comments:[
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[3].profile_img,
                name:USERS[3].name,
                comment:"wow"
            },
            {
                profile_img:USERS[0].profile_img,
                name:USERS[0].name,
                comment:"Cute"
            },
        ]
    },

    {
        profile_img: USERS[3].profile_img,
        username: USERS[3].name,
        time: "1 D.",
        upload_img:"https://static.poder360.com.br/2020/11/homer-simpson.png",
        likes:"147",
        caption:"Love is beautiful",
        share:"7",
        comments:[
            {
                profile_img:USERS[0].profile_img,
                name:USERS[0].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"wow"
            },
        ]
    },

]