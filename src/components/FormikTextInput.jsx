import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  errorText: {
    margin: 2,
    color: theme.colors.warning,
  },
  input: {
    alignSelf: 'stretch',
    borderColor: 'grey',
    padding: 5,
    marginBottom: 21,
    borderWidth: 1,
    borderRadius: 3,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        style={[
          styles.input,
          showError && { borderColor: 'red' },
          showError && { marginBottom: 0 },
        ]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
