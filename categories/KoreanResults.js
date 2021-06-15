import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Korean() {
  return (
    <View style={styles.container}>
      <Text >Korean Food</Text>
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