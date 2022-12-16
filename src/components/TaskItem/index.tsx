import { 
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Check, Trash } from 'phosphor-react-native'

import { styles } from './styles'

export function TaskItem() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
    >
      <View style={[styles.checkbox, styles.doneCheckbox]}>
        <Check size={12} color="#F2F2F2" weight="bold" />
      </View>

      <Text
        style={[styles.description, styles.completed]}
        numberOfLines={2}
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity>
        <Trash size={20} color="#808080"/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}