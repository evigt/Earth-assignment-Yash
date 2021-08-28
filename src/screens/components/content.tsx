import React from 'react'
import {StyleSheet,View,Text} from 'react-native';

const Content = () => {
     return(
         <>
        <View style={styles.container}>
          <Text style={styles.text}>hii there</Text>
          <Text style={styles.Amount}>$209,092.22</Text>
          <Text style={styles.profit}>+12.34%</Text>
         </View>
         </>
     )
}
 const styles = StyleSheet.create({
container:{
    position: 'absolute',
      width: 327,
      backgroundColor:"#3C5367",
      borderColor:"#3C5367",
      borderRadius:14
},
text:{
    textAlign:"center",
    color:"#FAFBFB",
    borderColor:"#2496FF",
    backgroundColor:"#2496FF",
    marginTop:29,
},
Amount:{
    textAlign:'center',
    marginTop:16,
    fontSize:32,
    color:'#FAFBFB',
    fontWeight:'400',
},
profit:{
fontWeight:'500',
fontSize:16,
textAlign:'center',
color:'#55D171',
marginTop:7,

}
 })
 export default Content;