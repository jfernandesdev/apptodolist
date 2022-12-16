import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_500,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_400,
    borderRadius: 8,
    padding: 12,
    height: 64,
    shadowColor: 'rgba(0,0,0,0.6)',
    elevation: 8,
    marginBottom: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyCheckbox: {
    borderWidth: 2,
    borderColor: THEME.COLORS.BLUE,
  },
  doneCheckbox: {
    backgroundColor: THEME.COLORS.PURPLE_DARK,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: THEME.COLORS.GRAY_100,
    maxWidth: '82%',
    overflow: 'hidden',
    flex: 1,
  },
  completed: {
    color: THEME.COLORS.GRAY_300,
    textDecorationLine: 'line-through',
  }
})