import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text>Coffee Shop Address</Text>
      <Text>Address -: India</Text>
      <Text>Menu</Text>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})