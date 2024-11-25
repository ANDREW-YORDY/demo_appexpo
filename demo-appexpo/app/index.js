import { View, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Bienvenido a la App
          </Text>
          <Text variant="bodyMedium">
            Esta es la pantalla principal de la aplicación.
          </Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => router.push('/screens/profile')}
        style={styles.button}
      >
        Ir al Perfil
      </Button>

      <Button
        mode="contained"
        onPress={() => router.push('/screens/settings')}
        style={styles.button}
      >
        Ir a Configuración
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
});