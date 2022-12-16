import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  newTaskForm: {
    width: '100%',
    flexDirection: 'row', 
    marginTop: -24,
  },
  input: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_500,
    borderColor: THEME.COLORS.GRAY_700,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    borderWidth: 1,
    color: THEME.COLORS.GRAY_100,
    height: 54,
    borderRadius: 6,
    padding: 16,
    fontSize: THEME.FONT_SIZE.LG,
    marginRight: 4,
  },
  buttonAdd: {
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.BLUE_DARK,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingVertical: 20,
  },
  counter: {
    flexDirection: 'row',
  },
  counterText: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  counterNumberContainer: {
    backgroundColor: THEME.COLORS.GRAY_400,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    marginLeft: 8,
  },
  counterNumber: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.GRAY_200,
  }
})