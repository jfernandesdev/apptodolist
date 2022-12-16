import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GRAY_300,
    paddingTop: 48,
  },
  clipboard: {
    marginBottom: 20,
  },
  text: {
    color: THEME.COLORS.GRAY_300,
    fontSize: 14,
    lineHeight: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
})