import { View, Text, Image } from 'react-native'
import React from 'react'

const Post = ({post}) => {
  return (
    <View style={{
        padding: 5,
        borderTopColor: "#050500538",
        borderTopWidth: 1, 
        marginTop: 100
    }}>
        <PostHeader post={post} />
    </View>
  )
}

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row', 
        alignItems: 'flex-start',
        justifyContent:"space-between"}}>
        <View style={{
            flexDirection:"row",
        }}>
            <Image source={{uri: post.profile_img}}
            style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                borderColor: '#166ada',
                borderWidth: 2.5
            }}
            />    
                <View>
                    <Text>{" "}{post.username}</Text>
                    <Text>{}{post.time}</Text>
            </View>
        </View>

        <View>
            <Text style={{fontWeight: "900"}}>...</Text>
        </View>
    </View>
)

export default Post