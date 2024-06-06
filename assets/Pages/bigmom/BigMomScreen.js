
import { View, Text, StyleSheet, Image} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function BigMomScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  

  return (
    <View style={styles.container}>
        <View style={styles.conteudoImage}>
          <Image source={require('./bigmomtripulacao.png')} style={styles.image}/>
          <Text style={styles.title}>São uma infame e poderosa tripulação pirata liderada pela Yonkou Charlotte Linlin, mais conhecida como “Big Mom”. Eles estão no controle da poderosa nação de Totto Land, com sua capitã governando-a como sua rainha, sendo que sua base de operações é a Ilha Whole Cake, a principal ilha do país1. Aqui estão mais detalhes sobre eles. Todos os participantes da tripulação da Big Mom são seus filho e netos.</Text>
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