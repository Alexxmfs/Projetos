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
        <PostCaption post={post} />
        <PostImage post={post} />
        <PostLikes post={post} />
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

const PostCaption = ({post}) =>(
    <View>
        <Text style={{paddingHorizontal:10}}>{post.caption}</Text>
    </View>
)

const PostImage = ({post}) =>(
    <View style={{
        width: "100%",
        height: 400,
        padding: 5
    }}>
        <Image source={{uri: post.upload_img}} 
        style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover"
        }}
        />
    </View>
)

const PostLikes =({post}) =>(
    <View>
        <Image source={{uri:
         "https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png"    }}
         style={{width:30,height:30,borderRadius:50}}
    />
    </View>
)
export default Post