import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://i0.wp.com/abglt.org.br/wp-content/uploads/2020/10/wallpaper-pc1-scaled-1.jpg?fit=2560%2C1440&ssl=1',
        user: USERS[0].user,
        likes: '7,870',
        caption: 'Train Ride to Hogwarts. :) 🧙‍♂️',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Gato America',
                comment: 'Wow! This build hooks fire. Super excited'
            },
            {
                user: 'Passaro Jack',
                comment: "Once I wake up, I'll finaly be to code this up",
            },
        ],
    },
    {
        imageUrl: 'https://i.pinimg.com/originals/74/ce/71/74ce716aaa0871130c7318b591a062ea.jpg',
        user: USERS[1].user,
        likes: '3,500',
        caption: 'Train Ride to Hogwarts. :)',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Gato America',
                comment: 'Wow! '
            },
            {
                user: 'Passaro Jack',
                comment: "yo",
            },
        ],
    },
]