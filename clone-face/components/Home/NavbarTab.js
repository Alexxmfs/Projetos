import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NAV_ICON = [
    {
        name: 'Home',
        image: "https://img.icons8.com/ios-filled/50/1a74e4/home.png"
    },
    {
        name: 'Friends',
        image:"https://img.icons8.com/ios/50/000000/user-group-man-man.png"
    },
    {
        name: "message",
        image:"https://img.icons8.com/ios/50/000000/facebook-messenger--v1.png"
    },
    {
        name: "notificacao",
        image: "https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-bell-back-to-school-kmg-design-detailed-outline-kmg-design.png"
    },
    {
        name: 'videos',
        image: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-play-basic-ui-elements-flatart-icons-outline-flatarticons.png"
    },
    {
        name: "pages",
        image: "https://img.icons8.com/ios/50/000000/flag--v1.png"
    }

]

const NavbarTab = () => {
  return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                {NAV_ICON.map((story, index) =>(
                    <TouchableOpacity>
                    <View key={index}>
                        <Image source={{uri: story.image}}
                        style={{
                            width: 25,
                            height: 25, 
                            resizeMode: "contain"
                        }}
                        />
                    </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
  }


export default NavbarTab