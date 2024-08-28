import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList, } from 'react-native';
import { ListItem } from "./components/ListItem";
import { useEffect, useState } from 'react';
import axios from 'axios';


const URL = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=0c433aa615d94b718b08df0a47b706f2";

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem imageURL={item.urlToImage}  title={item.title} author={item.author} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
})