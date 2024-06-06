import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import TripulacoesScreen from '../Pages/TripulacoesScreen'
import HomeScreen from '../Pages/HomeScreen'
import MugiwaraScreen from '../Pages/mugiwaras/MugiwaraScreen'
import WhiteBeardScreen from '../Pages/whitebeards/WhiteBeardScreen'
import BlackBeardScreen from '../Pages/blackbeards/BlackBeardScreen'
import KaidoScreen from '../Pages/kaido/KaidoScreen'
import BigMomScreen from '../Pages/bigmom/BigMomScreen'
import ShanksScreen from '../Pages/shanks/ShanksScreen'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Blogs Piece',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold'
        },
        
      }}/>
      <MainStack.Screen name='Tripulacoes' component={TripulacoesScreen} options={{
        title: 'Blogs Piece',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold'
        },
        
      }}/>
      <MainStack.Screen name='Mugiwaras' component={MugiwaraScreen} options={
        ({route})=>({
          title: route.params?.name,
          
          headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold',       
        },
        
        })
      }/>

      <MainStack.Screen name='WhiteBeards' component={WhiteBeardScreen} options={
        ({route})=>({
          title: route.params?.name,
          
          headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold',
                   
        },
        })
      }/>
      
      <MainStack.Screen name='BlackBeards' component={BlackBeardScreen} options={
        ({route})=>({
          title: route.params?.name,
          
          headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold',   
        },
        })
      }/>
      
      <MainStack.Screen name='Feras' component={KaidoScreen} options={
        ({route})=>({
          title: route.params?.name,
          
          headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold',    
        },
        })
      }/>

      <MainStack.Screen name='Big Mom' component={BigMomScreen} options={
        ({route})=>({
          title: route.params?.name,
          
          headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold',
                   
        },
        })
      }/>

      <MainStack.Screen name='Ruivos' component={ShanksScreen} options={
        ({route})=>({
          title: route.params?.name,
          
          headerStyle: {
          backgroundColor: '#8A2BE2',
          height: 100,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold',
                   
        },
        })
      }/>
    </MainStack.Navigator>
  )
}