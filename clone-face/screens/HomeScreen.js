import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Home/Header';
import NavbarTab from '../components/Home/NavbarTab';
import Post from '../components/Home/Post';
import PostOption from '../components/Home/PostOption';
import Stories from '../components/Home/Stories';
import { POSTS } from '../Data/Post';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Header />
            <NavbarTab />

            <ScrollView showsHorizontalScrollIndicator={false}>
            <PostOption />
            <Stories />
            {POSTS.map((post,index) =>(
            <Post post={post} key={index}/>
            ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen