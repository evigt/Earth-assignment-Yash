import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scaledValue } from './Utils/CommonUtils';
import { LinearGradient } from 'expo-linear-gradient';
import Content from './components/Content/content';

export default function EarthWallet() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#7DAFDF', 'transparent']}
        style={styles.background}
      />
      <Content/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:scaledValue(1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:scaledValue(700),
  },  
});
