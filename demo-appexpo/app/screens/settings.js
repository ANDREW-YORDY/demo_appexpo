import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Switch, Divider } from 'react-native-paper';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Preferencias</List.Subheader>
        
        <List.Item
          title="Notificaciones"
          description="Recibir notificaciones push"
          left={props => <List.Icon {...props} icon="bell" />}
          right={props => (
            <Switch
              value={notifications}
              onValueChange={setNotifications}
            />
          )}
        />
        <Divider />
        
        <List.Item
          title="Modo Oscuro"
          description="Cambiar tema de la aplicación"
          left={props => <List.Icon {...props} icon="theme-light-dark" />}
          right={props => (
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
            />
          )}
        />
        <Divider />
        
        <List.Item
          title="Ubicación"
          description="Permitir acceso a la ubicación"
          left={props => <List.Icon {...props} icon="map-marker" />}
          right={props => (
            <Switch
              value={location}
              onValueChange={setLocation}
            />
          )}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Información</List.Subheader>
        <List.Item
          title="Versión de la app"
          description="1.0.0"
          left={props => <List.Icon {...props} icon="information" />}
        />
        <Divider />
        <List.Item
          title="Términos y condiciones"
          left={props => <List.Icon {...props} icon="file-document" />}
        />
        <Divider />
        <List.Item
          title="Política de privacidad"
          left={props => <List.Icon {...props} icon="shield-account" />}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});