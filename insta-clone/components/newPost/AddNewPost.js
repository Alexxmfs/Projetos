import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader';

const NewPostScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <FormikPostUploader navigation={navigation} />
        {/* <PostForm /> */}
    </View>
    );
}

const Header = ({navigation}) => {
    return (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.push('HomeScreen')}>
    <Image 
        source={{ uri: 'https://img.icons8.com/ios-filled/60/ffffff/back.png' }}
        style={{ width: 30, height: 30, marginTop: 30 }}
    />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10, 
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 23,
        marginTop: 30,
    }
})

export default NewPostScreen