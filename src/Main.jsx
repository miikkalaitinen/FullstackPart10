import { StyleSheet, View } from 'react-native'
import AppBar from './components/AppBar'
import RepositoryList from './components/RepositoryList'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <RepositoryList />
      </View>
    </>
  )
}

export default Main
