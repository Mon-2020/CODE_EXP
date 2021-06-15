import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Thai() {
  return (
    <View style={styles.container}>
      <Text >Thai Food</Text>
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