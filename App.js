import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar } from "@react-native-material/core";

export default function App() {
  return (<View >
    <AppBar title="Screen title" />
    
      
      <Text>hiiii Huny app</Text>
      
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
