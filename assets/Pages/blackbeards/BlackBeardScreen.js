
import { View, Text, StyleSheet, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function BlackBeardScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  

  return (
    <View style={styles.container}>
        <View style={styles.conteudoImage}>
          <Image source={require('./blackbeardtripulacao.png')} style={styles.image}/>
          <Text style={styles.title}>Os Piratas do Barba Negra são uma tripulação pirata extremamente infame e poderosa no universo de One Piece.O almirante e líder dos Piratas do Barba Negra é Marshall D. Teach, mais conhecido como “Barba Negra”. Ele é um dos Quatro Imperadores, uma elite de piratas extremamente poderosos.Originalmente, Barba Negra era membro dos Piratas do Barba Branca, liderados por Edward Newgate. No entanto, ele assassinou um de seus companheiros de tripulação para obter uma Akuma no Mi (Fruta do Diabo) e formou sua própria tripulação.</Text>
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