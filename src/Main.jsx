import { StyleSheet, View } from 'react-native'
import { Route, Redirect } from 'react-router-native'
import AppBar from './components/AppBar'
import RepositoryList from './components/RepositoryList'
import SignIn from './components/SignIn'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Route path="/" exact>
        <RepositoryList />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </View>
  )
}

export default Main
