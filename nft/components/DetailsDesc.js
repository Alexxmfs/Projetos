import { useState } from 'react'
import { View, Text } from 'react-native'

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  return (
    <>
      <View>
        <NFTTitle 
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.extraLarge}
        subTitleSize={SIZES.font}
        />

        
      </View>
    </>
  )
}

export default DetailsDesc