import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Card, List } from 'react-native-paper';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileContent}>
          <Avatar.Icon size={80} icon="account" style={styles.avatar} />
          <Text variant="headlineMedium" style={styles.name}>
            Usuario Ejemplo
          </Text>
          <Text variant="bodyMedium" style={styles.email}>
            usuario@ejemplo.com
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <List.Section>
            <List.Item
              title="Teléfono"
              description="+1 234 567 890"
              left={props => <List.Icon {...props} icon="phone" />}
            />
            <List.Item
              title="Ubicación"
              description="Ciudad Ejemplo"
              left={props => <List.Icon {...props} icon="map-marker" />}
            />
            <List.Item
              title="Miembro desde"
              description="Enero 2024"
              left={props => <List.Icon {...props} icon="calendar" />}
            />
          </List.Section>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  profileCard: {
    marginBottom: 16,
  },
  profileContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    backgroundColor: '#6200ee',
    marginBottom: 16,
  },
  name: {
    marginBottom: 4,
  },
  email: {
    opacity: 0.7,
  },
  infoCard: {
    flex: 1,
  },
});