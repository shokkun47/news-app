import { StyleSheet, SafeAreaView, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const ClipScreen = () => {
    return ( 
        <SafeAreaView style={styles.container}>
            <Text>clip screen</Text>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})