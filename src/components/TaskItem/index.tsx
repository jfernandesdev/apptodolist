import { 
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { Check, Trash } from 'phosphor-react-native'

import { styles } from './styles'

interface TaskItemProps {
  id: string
  description: string
  isComplete: boolean
  handleToggleTaskCompletion: (id: string) => void
  handleRemoveTask: (id: string) => void
}

export function TaskItem({
  id,
  description,
  isComplete,
  handleToggleTaskCompletion,
  handleRemoveTask
}: TaskItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => handleToggleTaskCompletion(id)}
        style={[
          styles.checkbox, 
          (isComplete) ? styles.doneCheckbox : styles.emptyCheckbox
        ]}
      >
        {(isComplete) && (<Check size={12} color="#F2F2F2" weight="bold" />)}
      </TouchableOpacity>

      <Text
        style={[styles.description, (isComplete) && styles.completed]}
        numberOfLines={2}
      >
        {description}
      </Text>

      <TouchableOpacity onPress={() => handleRemoveTask(id)}>
        <Trash size={20} color="#808080"/>
      </TouchableOpacity>
    </View>
  )
}