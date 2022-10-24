import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 10
    }}>
        <View>
            <TouchableOpacity>
            <Image source={require("../../assets/logo.png")}
            style={{
                width: 100,
                height: 50,
                resizeMode: 'contain'
            }}
            />
            </TouchableOpacity>
        </View>
        
        < View style={{
          flexDirection: "row"
        }}> 
        < TouchableOpacity>
        <Image source={require("../../assets/search.jpg")} style={{width:50, height:50, resizeMode:"contain"}}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require("../../assets/navbar.jpg")} style={{width:50, height:50, resizeMode:"contain"}}/>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header








