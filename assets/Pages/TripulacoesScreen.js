
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function TripulacoesScreen() {
  const navigation = useNavigation()
  
  const handleMugiwaraPage = () => {
    navigation.navigate('Mugiwaras')
  }
  const handleWhiteBeardPage = () => {
    navigation.navigate('WhiteBeards')
  }
  const handleBlackBeardPage = () => {
      navigation.navigate('BlackBeards')
    }
  const handleKaidoPage = () => {
      navigation.navigate('Feras')
    }
  const handleBigMomPage = () => {
      navigation.navigate('Big Mom')
    }
  const handleRuivoPage = () => {
    navigation.navigate('Ruivos')
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.conteudo}>
        <TouchableOpacity onPress={handleMugiwaraPage}>
          <View style={styles.quadrado}>
            <Image source={require('./mugiwaras/mugiwaras.png')} style={styles.image}/>
            <Text style={styles.text}>Mugiwaras</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleWhiteBeardPage}>
          <View style={styles.quadrado}>
            <Image source={require('./whitebeards/whitebeard.png')} style={styles.image}/>
            <Text style={styles.text}>Piratas do Barba Branca</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.conteudo}>
        <TouchableOpacity onPress={handleBlackBeardPage}>
          <View style={styles.quadrado}>
            <Image source={require('./blackbeards/blackbeard.png')} style={styles.image}/>
            <Text style={styles.text}>Piratas do Barba Negra</Text>
          </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={handleKaidoPage}>
          <View style={styles.quadrado}>
            <Image source={require('./kaido/kaido.png')} style={styles.image}/>
            <Text style={styles.text}>Piratas fera</Text>
          </View>
        </TouchableOpacity>
      </View>

       <View style={styles.conteudo}>
        <TouchableOpacity onPress={handleBigMomPage}>
          <View style={styles.quadrado}>
            <Image source={require('./bigmom/bigmom.png')} style={styles.image}/>
            <Text style={styles.text}>Piratas da Big Mom</Text>
          </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={handleRuivoPage}>
          <View style={styles.quadrado}>
            <Image source={require('./shanks/shanks.png')} style={styles.image}/>
            <Text style={styles.text}>Piratas do Ruivo</Text>
          </View>
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
  quadrado:{
    marginVertical: 30,
    margin: 5,
    width: 150,
    height: 150,
    borderRadius: 10
  },
  image:{
    width: '90%',
    height: '90%',
    borderRadius: 10
  },
  text:{
    marginHorizontal: 15,
    marginRight: 25,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  conteudo:{
    flexDirection: 'row',
    marginLeft: 15
  },
})