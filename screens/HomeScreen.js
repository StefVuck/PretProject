import React from "react";
import NavBar from "../components/NavBar"
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getName } from "../components/UserDetails";

const HomeScreen = () => {

    return(
        <SafeAreaView style={styles.safeView}>
            <View style={styles.view}>
                <View style={topPretBar}>
                    <Image source={require=('../assets/PretLogo.svg')} style={styles.pretLogo}/>
                </View>

                <FlatList
                    data = {data}
                    renderItem={({item}) => (

                        <View>
                            <View style={styles.welcome}>
                            <Text style={styles.title}>Welcome {getName()}!</Text>
                            <Text style={styles.subtitle}>What would you like to do today?</Text>
                            </View>
                        </View>

                    )}
                />

            <NavBar /> 
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    safeView: {

    },
    mainView: {

    }, 
    pretLogo: {
        width: 300,
        height: 100,
        resizeMode: "contain",
    }
})