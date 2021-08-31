import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import plus from '../../../../assets/add.png';
import  Module from '../Card/Card';
import { styles } from '../Network/Net';

const Network = () =>{
 return(
     <>
    <View style={styles.network}>
        <View style={styles.forflex}>
        <Text style={styles.headertext}>Networks</Text>
        <Image source={plus} style={styles.img}/>
        </View>
        <Module/>
        <Module/>
        <Module/>
    </View>
    </>
 )
}

export default Network