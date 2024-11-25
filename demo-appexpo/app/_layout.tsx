import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function Layout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Inicio',
          }}
        />
        <Stack.Screen
          name="screens/profile"
          options={{
            title: 'Perfil',
          }}
        />
        <Stack.Screen
          name="screens/settings"
          options={{
            title: 'Configuración',
          }}
        />
      </Stack>
    </PaperProvider>
  );
}