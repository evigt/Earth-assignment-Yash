import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import Network from '../Network/Network';
const MORE_ICON = 'dots-horizontal';
import { styles } from '../Content/cont';

const Content = () => {
  return (
    <>
      <View style={styles.container}>
        <Appbar.Action style={styles.threedots} icon={MORE_ICON}  />
        <Text style={styles.text}>Earth Association</Text>
        <Text style={styles.Amount}>$209,092.22</Text>
        <Text style={styles.profit}>+12.34%</Text>
        <Network/>
      </View>
    </>
  );
};
export default Content;
