import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Indian() {
  return (
    <View style={styles.container}>
      <Text >Indian Food</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});