import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useState } from 'react/cjs/react.development'

export default function App() {
  const [visible, setVisible] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Image
        style={{ display: visible ? 'flex' : 'none' }}
        source={require('./assets/favicon.png')}
      />
      <Text onPress={() => setVisible(!visible)}>
        {' '}
        Click to {visible ? 'hide' : 'show'} logo{' '}
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
  },
})
