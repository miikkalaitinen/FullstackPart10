import { Text as NativeText, StyleSheet } from 'react-native'

import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  colorTextAppBar: {
    color: theme.colors.textAppbar,
  },
})

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color == 'textAppBar' && styles.colorTextAppBar,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ]

  return <NativeText style={textStyle} {...props} />
}

export const Heading = ({ children, textAppbar }) => {
  return (
    <Text fontSize={20} color={textAppbar && 'textAppBar'} fontWeight="bold">
      {children}
    </Text>
  )
}

export const SubHeading = ({ children }) => {
  return (
    <Text fontSize={15} fontWeight="bold" color="textSecondary">
      {children}
    </Text>
  )
}

export default Text
