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
        <Image source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }} 
        style={[
            styles.icon, icon.name == 'Profile' ? styles.profilePic : null,
            activeTab == 'Profile' && icon.name == activeTab
            ? styles.profilePic(activeTab)
            : null,
            ]} />
        </TouchableOpacity>
    )
    return (
    <View style={styles.wrapper}> 
        <Divider width={1} orientation='vertical' /> 
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#000'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor: '#fff'
    }),
})

export default BottomTabs
