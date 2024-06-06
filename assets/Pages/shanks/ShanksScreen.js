
import { View, Text, StyleSheet, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function ShanksScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  

  return (
    <View style={styles.container}>
        <View style={styles.conteudoImage}>
          <Image source={require('./shankstripulacao.png')} style={styles.image}/>
          <Text style={styles.title}>Os Piratas do Ruivo são uma infame e poderosa tripulação pirata que governa o Novo Mundo, liderada por seu capitão, Shanks “o Ruivo”. Como um dos Quatro Imperadores, Shanks lidera uma das quatro tripulações mais fortes do mundo. A recompensa de Rockstar é de 94 milhões, e outros membros têm recompensas desconhecidas.</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0'
  },
  image:{
    marginBottom: 150,
  },
  conteudoImage:{
    width: 310,
    height: 180,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 5,
    marginBottom: 150
  },
  title:{
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: -140
  },
})