
import { View, Text, StyleSheet, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function KaidoScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  

  return (
    <View style={styles.container}>
        <View style={styles.conteudoImage}>
          <Image source={require('./kaidotripulacao.png')} style={styles.image}/>
          <Text style={styles.title}>são uma tripulação pirata extremamente infame e poderosa liderada por Kaidou, um dos Quatro Imperadores no universo de One Piece. Os Piratas das Feras estão sedeados no País de Wano, especificamente em Onigashima. Nos últimos vinte e cinco anos, a tripulação consolidou seu poder em Wano por meio de uma aliança com o shogun do país, Kurozumi Orochi. Atualmente, eles também têm uma nova aliança com os Piratas da Big Mom. Entretanto essa aliança foi destruída por Luffy, Kid e Law</Text>
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