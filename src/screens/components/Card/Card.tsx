import React from 'react';
import {View,Image,Text} from 'react-native';
import { Card, Title } from 'react-native-paper';
import {styles} from '../../components/Card/styles';
import crypto from '../../../../assets/crypto.png';
 const Module = () =>{
    return(
        <View>
        <Card style={styles.container}>
          <Card.Content style={styles.flexbox}>
            <Image style={styles.crypto} source={crypto} />
            <View style={styles.column}>
            <Title style={styles.text}>
               Internet Computer
            </Title>
            <Text style={styles.assets}>5 Assets</Text>
            </View>
            <View style={styles.column}>
            <Title style={styles.amount}>
            $39,092.22 USD
            </Title>
            <Text style={styles.profit}>+0.34%</Text>
            </View>
          </Card.Content>
        </Card>
        <View
       style={{
       borderBottomColor: '#ffffff',
       opacity:0.1,
       borderBottomWidth: 1,
  }}
/>
        </View>
    )
    }
    export default Module;