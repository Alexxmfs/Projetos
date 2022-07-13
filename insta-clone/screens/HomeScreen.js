import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTabs from '../components/home/BottomTabs';
import { bottomTabIcons } from '../components/home/BottomTabs';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} key={index}/>
          ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen