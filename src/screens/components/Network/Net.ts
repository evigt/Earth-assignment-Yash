import React from 'react';
import { StyleSheet } from 'react-native';
import { scaledValue } from '../../Utils/CommonUtils';
 export const styles = StyleSheet.create({
    network:{
      marginTop:scaledValue(21),
      backgroundColor:'#282D3F',
      padding:scaledValue(10),
      borderRadius:scaledValue(12),
    },
    forflex:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    headertext:{
        color: '#ffffff',
        fontSize:scaledValue(16),
        fontWeight:'500',
        marginTop:scaledValue(17),
    },
    img:{
       height: scaledValue(30),
       width:scaledValue(30),
    },
    
})