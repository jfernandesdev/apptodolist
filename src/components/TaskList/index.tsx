import { useState } from 'react'
import uuid from 'react-native-uuid'
import { PlusCircle } from 'phosphor-react-native'

import { 
  View, 
  Text,
  TextInput, 
  TouchableOpacity,
  FlatList,
} from 'react-native'

import { TaskItem } from '../TaskItem'
import { ListEmpty } from '../ListEmpty'

import { THEME } from '../../theme'
import { styles } from './styles'

interface Task {
  id: string,
  description: string,
  isComplete: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskDescription, setNewDescription] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  function handleCreateNewTask() {
    if(!newTaskDescription) return

    const newTask = {
      id: uuid.v4().toString(),
      description: newTaskDescription,
      isComplete: false
    }

    setTasks([...tasks, newTask])
    setNewDescription('')
  }
  
  function handleToggleTaskCompletion(id: string) {
    const newTasks = tasks.map(task => 
      task.id === id ? {
        ...task,
        isComplete: !task.isComplete
      } : task
    )

    setTasks(newTasks)
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  } 

  const totalTasksCompleted = tasks.filter(
    task => task.isComplete === true,
  ).length

  return(
    <View style={styles.container}>
      <View style={styles.newTaskForm}>
        <TextInput 
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor="#808080"
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          onChangeText={text => setNewDescription(text)}
          value={newTaskDescription}
          style={[styles.input, isFocused && { borderColor: '#5E60CE' }]}
        />

        <TouchableOpacity 
          onPress={handleCreateNewTask}
          style={styles.buttonAdd}
        >
          <PlusCircle size={22} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoHeader}>
        <View style={styles.counter}>
          <Text style={[styles.counterText, { color: THEME.COLORS.BLUE}]}>
          Criadas
          </Text>

          <View style={styles.counterNumberContainer}>
            <Text style={styles.counterNumber}>
              {tasks.length}
            </Text>
          </View>
        </View>

        <View style={styles.counter}>
          <Text style={[styles.counterText, { color: THEME.COLORS.PURPLE }]}>
            Concluídas
          </Text>

          <View style={styles.counterNumberContainer}>
            <Text style={styles.counterNumber}>
              {totalTasksCompleted}
            </Text>
          </View>
        </View>
      </View>

     <FlatList 
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item}) => {
          return (
            <TaskItem 
              id={item.id}
              description={item.description}
              isComplete={item.isComplete}
              handleToggleTaskCompletion={handleToggleTaskCompletion}
              handleRemoveTask={handleRemoveTask}
            />
          )
        }}
        ListEmptyComponent={<ListEmpty />}
     />
    </View>
  )
}