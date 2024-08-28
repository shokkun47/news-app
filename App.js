import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';
import { ListItem } from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem 
        imageURL={"https://picsum.photos/id/10/300/300"}
        title="aaaaaaaaaaaaaaaaaaaaaaaaa"
        author="1つめのニュース"
      />
      <ListItem 
        imageURL={"https://picsum.photos/id/20/300/300"}
        title="iiiiiiiiiiiiiiiii"
        author="2つ目のニュース"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
})