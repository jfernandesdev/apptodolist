import { View } from 'react-native'
import { styles } from './styles'

import { Header } from '../../components/Header'
import { TaskList } from '../../components/TaskList'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TaskList />
    </View>
  )
}