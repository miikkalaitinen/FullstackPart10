import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { Heading } from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.background,
    padding: 10,
    paddingBottom: 20,
  },
  appbar: {
    marginLeft: 10,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
      <AppBarTab>Login</AppBarTab>
    </View>
  )
}

const AppBarTab = ({ children }) => {
  return (
    <Pressable style={styles.appbar}>
      <Heading textAppbar>{children}</Heading>
    </Pressable>
  )
}

export default AppBar
