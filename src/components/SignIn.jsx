import Text from './Text'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { View, StyleSheet } from 'react-native'
import * as yup from 'yup'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import theme from '../theme'

/* Style */

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: 40,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: theme.colors.primary,
    padding: 5,
    marginTop: 10,
    borderRadius: 4,
  },
})

/* Formik form */

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Sign In</Text>
      </Pressable>
    </View>
  )
}

/* Signin Component */

const SignIn = () => {
  const onSubmit = (e) => {
    console.log(e)
  }

  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is requried'),
  })

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignIn
