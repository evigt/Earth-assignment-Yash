import react from 'react';
import { StyleSheet } from 'react-native';
import { scaledValue } from '../../Utils/CommonUtils';
export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: scaledValue(327),
        backgroundColor: '#3C5367',
        borderColor: '#3C5367',
        borderRadius: scaledValue(14),
      },
      threedots:{
          color:"#ffffff",
          display: "flex",
          marginLeft:scaledValue(282),
        },
      text: {
        textAlign: 'center',
        color: '#FAFBFB',
        borderColor: '#2496FF',
        backgroundColor: '#2496FF',
        width: scaledValue(159),
        alignSelf: 'center',
        padding: scaledValue(7),
        borderRadius:scaledValue(25),
      },
      Amount: {
        textAlign: 'center',
        marginTop: scaledValue(16),
        fontSize:scaledValue(32),
        color: '#FAFBFB',
        fontWeight: '400',
      },
      profit: {
        fontWeight: '500',
        fontSize: scaledValue(16),
        textAlign: 'center',
        color: '#55D171',
        marginTop:scaledValue(7),
      },
})