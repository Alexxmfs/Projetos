import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 
    'https://img.icons8.com/ios/60/ffffff/like--v1.png',
    likedImageUrl: 'https://img.icons8.com/ios-filled/E74C3C/like--v1.png'
  },
  {
    name: 'Comment',
    imageUrl:
    'https://img.icons8.com/ios/60/ffffff/speech-bubble.png',
  },
  {
  name: 'Share',
  imageUrl:
  'https://img.icons8.com/ios/60/ffffff/paper-plane.png'
  },
  {
    name: 'Save',
    imageUrl:
    'https://img.icons8.com/pastel-glyph/ffffff/bookmark-ribbon.png'
  }
]




const Post = ({ post }) => {
  return (
    <View>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 30, marginTop: 5}}>
      <PostFooter />
      {/* <Likes post={post} /> */}
      <Caption post={post} />
      <CommentsSection post={post} />
      {/* <Comments post={post} /> */}
      </View>
    </View>
  )
}

const PostHeader = ({ post }) => {
  return(
  <View
   style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center'
      }}
    >
      <View style={{flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
          {post.user}
          </Text>
      </View>

      <Text style={{ color: 'white', fontWeight: '900'}}>...</Text>
  </View>
  )
}

const PostImage = ({ post }) => {
  return(
    <View
    style={{
      width: '100%',
      height: 450
    }}>
    <Image source={{uri: post.imageUrl}} 
    style={{height: '100%', resizeMode: 'cover'}}
     />
     </View>
  )
}

const PostFooter = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
     <View style={styles.leftFooterIconsContainer}> 
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
        <Icon 
          imgStyle={[styles.footerIcon, styles.shareIcon]} 
          imgUrl={postFooterIcons[2].imageUrl} />
      </View>

      <View style={{ flex: 1, alignItems: 'flex-end'}}>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
      </View>
    </View>
  )
}

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl}} />
  </TouchableOpacity>

)

// const Likes = ({ post }) => (
//   <View style={{ flexDirection: 'row', marginTop: 4}}>
//     <Text style={{ color: 'white', fontWeight: '600' }}>
//       {post?.likes_by_users.length.toLocaleString('en')} likes
//     </Text>
//   </View>
// )

const Caption = ({post}) => (
  <View style={{marginTop: 5 }}>
  <Text style={{ color: 'white' }}>
   <Text style={{ fontWeight: '600' }}>{post.user}</Text>
   <Text> {post.caption}</Text>
    </Text>
  </View>
)

const CommentsSection = ({ post }) => (
<View style={{marginTop: 5 }}>
  {!!post.comments?.length && (
  <Text style={{ color: 'gray' }}>
    View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{''}
    {post.comments.length > 1 ? ' comments' : ' comment'}
  </Text>
  )}
  </View>
)

// const Comments = ({ post }) => {
//   return (
// <>
//   {post.comments?.map((comment, index) => (
//     <View key={index} style={{flexDirection: 'row', marginTop: 2}}>
//       <Text style={{ color: 'white'}}>
//         <Text style={{fontWeight: '600'}}>{comment.user}</Text>{''}
//         {comment.comment}
//       </Text>
//     </View>
//   ))}
  
//   </>
//   )
// }

// A.) 0 comments 👉 Don't render component
// B.) 1 comment 👉 render component without "all" and singular comment
// B.) 2 comment 👉 render component with "all" and plural comments

const styles = StyleSheet.create({
  story: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginLeft: 6,
      borderWidth: 1.6,
      borderColor: '#62a8fc',
  },

  footerIcon: {
    width: 33,
    height: 33,
  },

  shareIcon: {
    transform: [{ rotate: '18deg'}],
    marginTop: -2
  },

  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'space-between',
  }
})

export default Post