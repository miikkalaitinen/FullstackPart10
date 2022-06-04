import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
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
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">SignIn</AppBarTab>
      </ScrollView>
    </View>
  )
}

const AppBarTab = ({ children, to }) => {
  return (
    <Link style={styles.appbar} to={to}>
      <Heading textAppbar>{children}</Heading>
    </Link>
  )
}

export default AppBar
