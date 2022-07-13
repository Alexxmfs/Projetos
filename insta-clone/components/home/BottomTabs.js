import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-filled/60/ffffff/booking.png', 
        inactive:
        'https://img.icons8.com/ios/60/ffffff/booking.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/60/ffffff/search--v1.png',
        inactive: 
        'https://img.icons8.com/ios/60/ffffff/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/60/ffffff/instagram-reel.png',
        inactive: 
        'https://img.icons8.com/ios/60/ffffff/instagram-reel.png'
    },
    {
        name: 'Shop',
        active:
        'https://img.icons8.com/ios-filled/60/ffffff/online-shop.png',
        inactive: 
        'https://img.icons8.com/ios/60/ffffff/online-shop.png'
    },
    {
        name: 'Profile',
        active: 
        'https://static.tudointeressante.com.br/uploads/2014/11/gato-17.jpg',
        inactive:
        'https://static.tudointeressante.com.br/uploads/2014/11/gato-17.jpg'
    }
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image source={{ uri: icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )
    return (
        <View>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    }
})

export default BottomTabs