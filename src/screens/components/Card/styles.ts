import react from 'react'
import {StyleSheet} from 'react-native'
import { scaledValue } from '../../Utils/CommonUtils'

export  const styles = StyleSheet.create({
    container:{
        backgroundColor:'#282D3F',
    },
    flexbox:{
        display: 'flex',
        flexDirection:'row',  
        justifyContent:'space-between',
    },
    crypto:{
        width: scaledValue(36),
        height:scaledValue(37),
        marginLeft:scaledValue(-15),  
    },
    text:{
        fontWeight:'400',
        fontSize:scaledValue(14),
        lineHeight:scaledValue(15),
        color: '#FAFBFB'
    },
    amount:{
        fontSize:scaledValue(12),
        fontWeight:'500',
        lineHeight:scaledValue(16),
        color: '#FAFBFB'

    },
    column:{
        display:'flex',
        flexDirection:'column'
    },
    assets:{
        opacity: 0.54,
        color: '#FAFBFB',
        fontSize:scaledValue(12),
        fontWeight:'400',
        lineHeight:scaledValue(12),
        marginTop:scaledValue(5),
    },
    profit:{
        color: '#55D171',
        fontSize:scaledValue(12),
        fontWeight:'500',
        lineHeight:scaledValue(12),
        marginTop:scaledValue(5),
        alignSelf:'flex-end'
    }
})