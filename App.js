import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './Screens/HomeScreen';
import { useState } from 'react'
import { CarrinhoScreen } from './Screens/CarrinhoScreen'
import { CarrinhoContexto } from './contextos/CarrinhoContexto';


const Stack = createStackNavigator();

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContexto.Provider value={[carrinho, setCarrinho]}>
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen  name="Ifome" component={HomeScreen} options={{
          headerStyle: {
          backgroundColor: '#FF0000'
          },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: 'bold' 
        }}/>
       <Stack.Screen  name="Carrinho" component={CarrinhoScreen} options={{
          headerStyle: {
          backgroundColor: '#FF0000'
          },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: 'bold' 
        }}/>
      </Stack.Navigator> 
    </NavigationContainer>
    </CarrinhoContexto.Provider>
  );
}
