import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Chinese() {
  return (
    <View style={styles.container}>
      <Text >Chinese Food</Text>
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