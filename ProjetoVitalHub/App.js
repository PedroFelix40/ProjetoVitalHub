import { StatusBar } from 'expo-status-bar';

// Import do navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';

// Import das fonts
import { useFonts } from 'expo-font';
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,

} from '@expo-google-fonts/quicksand';
import {
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,

} from '@expo-google-fonts/montserrat-alternates';
import { Login } from './src/screens/Login/Login';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //Estrututura 
    // Container
    // Navigator
    // Screen - Tela
    //name: nome da tela
    //component: componente que será chamado
    //options(title): titulo da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{ title: "Navegacao" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
