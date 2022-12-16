import { View, Text } from 'react-native'

import Clipboard from '../../assets/clipboard.svg'

import { styles } from './styles'

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.clipboard}>
        <Clipboard />
      </View>
      <Text style={[styles.text, styles.textBold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}