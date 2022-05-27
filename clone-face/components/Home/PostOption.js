import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PostOption = () => {
  return (
    <View
    style={{
        paddingHorizontal: 10,
        top: 10
    }}>
        <View
            style={{
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: "space-around",
            }}>
            <View>
                <TouchableOpacity>
                <Image source={{uri: "https://educasc.com.br/wp-content/uploads/2021/12/wandavision-1.jpg"}}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50
                }}
                />
                </TouchableOpacity>
            </View>
            <View style={{    
                justifyContent: "flex-start"
                }}>
                <TouchableOpacity>
                <Image source={require("../../assets/placeholder.jpg")} 
                style={{
                    width: 270,
                    height: 50,
                    resizeMode: "contain"
                }}
                />
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
                <Image source={require("../../assets/photo.jpg")} 
                style={{
                    height: 50,
                    width: 50,
                    resizeMode: "contain"
                }}
                />
            </TouchableOpacity>
            </View>
        </View>

        <View style={{
            marginTop: -25
        }}>
            <TouchableOpacity>
            <Image source={require("../../assets/activity.jpg")} 
            style={{
                width: "100%",
                resizeMode: "contain"
            }}
            />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default PostOption