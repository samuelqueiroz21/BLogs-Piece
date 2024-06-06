
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()
  const handleEnterButton = () => {
    navigation.navigate('Tripulacoes')
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.conteudo}>
        <Image source={require('./luffy.gif')} style={styles.gif}/>
        <Text style={styles.title}>Seja bem-vindo ao Blogs Piece, um aplicativo que mostra as tripulações do universo de One Piece</Text>
        <TouchableOpacity onPress={handleEnterButton} style={styles.button}>
          <Text style={styles.buttontext}>Entrar</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d0d0d0'
  },
  conteudo:{
    padding: 30
  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  gif:{
    width: '100%',
    height: '150%',
    },
  button:{
    backgroundColor: '#8A2BE2',
    width: 150,
    height: 40,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
  buttontext:{
    fontWeight: 'bold',
    fontSize: 15
  },
  
})