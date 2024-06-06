
import { View, Text, StyleSheet, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function WhiteBeardScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  

  return (
    <View style={styles.container}>
        <View style={styles.conteudoImage}>
          <Image source={require('./whitebeardtripulacao.png')} style={styles.image}/>
          <Text style={styles.title}> Os Piratas do Barba Branca foram uma das tripulações piratas mais fortes do mundo no universo de One Piece.Após a morte de Barba Branca e Ace, os membros restantes enfrentaram os Piratas do Barba Negra na Guerra do Acerto de Contas, resultando na derrota e na usurpação de Barba Branca como Yonkou por Teach. Atualmente, os demais membros estão sendo caçados por Edward Weevil e sua mãe Bakkin, que reivindicam ser filho e amante de Barba Branca</Text>
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
    marginTop: -100
  },
  title:{
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: -140
  },
})