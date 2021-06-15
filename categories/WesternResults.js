import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Western() {
  return (
    <View style={styles.container}>
      <Text >Western Food</Text>
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