import { StatusBar } from 'expo-status-bar';

// Import do navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';

// Import das fonts
import { useFonts } from 'expo-font';
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,

} from '@expo-google-fonts/quicksand';
import {
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,

} from '@expo-google-fonts/montserrat-alternates';

// Import dos components
import { Login } from './src/screens/Login/Login';
import { RecuperarSenha } from './src/screens/RecuperarSenha/RecuperarSenha';
import { CriarConta } from './src/screens/CriarConta/CriarConta';
import { VerificarEmail } from './src/screens/VerificarEmail/VerificarEmail';
import { RedifinirSenha } from './src/screens/RedifinirSenha/RedifinirSenha';
import { Perfil } from './src/screens/Perfil/Perfil';
import { Home } from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Quicksand_400Regular,
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

        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ title: "Recuperar Senha" }}
        />

        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={{ title: "Criar Conta" }}
        />
        
        <Stack.Screen
          name="VerificarEmail"
          component={VerificarEmail}
          options={{ title: "Verificar Email" }}
        />
        
        <Stack.Screen
          name="RedifinirSenha"
          component={RedifinirSenha}
          options={{ title: "Redifinir Senha" }}
        />
        
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
