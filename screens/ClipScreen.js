import { StyleSheet, SafeAreaView, FlatList, View, Text, } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem } from '../components/ListItem';

export const ClipScreen = ({ navigation }) => {
    const clips = useSelector((state) => state.user.clips);

    return ( 
        <SafeAreaView style={styles.container}>
            {clips.length > 0 ? (
                <FlatList
                    data={clips}
                    renderItem={({ item }) => (
                        <ListItem
                            imageURL={item.urlToImage}
                            title={item.title}
                            author={item.author}
                            onPress={() => navigation.navigate("Article", { article: item })}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>クリップしている記事がありません。</Text>
                </View>
            )}
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
    },
})