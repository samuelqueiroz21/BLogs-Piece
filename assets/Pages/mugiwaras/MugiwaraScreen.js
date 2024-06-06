
import { View, Text, StyleSheet, Image,ScrollView} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function MugiwarasScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  

  return (
    <ScrollView style={styles.container}>
        <View style={styles.conteudoImage}>
          <Image source={require('./mugiwarastripulacao.png')}/>
          <Text style={styles.title}>Os Piratas do Chapéu de Palha, liderados por Monkey D. Luffy, formam uma tripulação poderosa e leal no mundo de One Piece. Atualmente seu capitão é um dos quatros imperadores do mar e segue lutando para se tornar Rei dos piratas.</Text>
          
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0d0d0'
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
    marginTop: 15
  },
})