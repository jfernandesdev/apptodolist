import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput, 
  TouchableOpacity,
} from 'react-native'

import { PlusCircle } from 'phosphor-react-native'

import { TaskItem } from '../TaskItem'

import { THEME } from '../../theme'
import { styles } from './styles'

export function TaskList() {
  const [isFocused, setIsFocused] = useState(false)

  return(
    <View style={styles.container}>

      <View style={styles.newTaskForm}>
        <TextInput 
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor="#808080"
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          style={[styles.input, isFocused && { borderColor: '#5E60CE' }]}
        />

        <TouchableOpacity style={styles.buttonAdd}>
          <PlusCircle size={22} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoHeader}>
        <View style={styles.counter}>
          <Text style={[styles.counterText, { color: THEME.COLORS.BLUE}]}>
          Criadas
          </Text>

          <View style={styles.counterNumberContainer}>
            <Text style={styles.counterNumber}>0</Text>
          </View>
        </View>

        <View style={styles.counter}>
          <Text style={[styles.counterText, { color: THEME.COLORS.PURPLE }]}>
            Concluídas
          </Text>

          <View style={styles.counterNumberContainer}>
            <Text style={styles.counterNumber}>0</Text>
          </View>
        </View>
      </View>

      <View>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </View>
    </View>
  )
}