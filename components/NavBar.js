import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, Touchable, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const navBarData = [
    {
        id: "1",
        title: "Home",
        screen: "HomeScreen",
        image: '../assets/cottage_black_24dp.svg',
    },

]

const NavBar = () => {
    const navigation = useNavigation();

    return(

        <FlatList 
            data={navBarData}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={styles.button}
                >
                <Image source={require(item.image)} />
                <Text style={styles.text}> {item.title} </Text>
                </TouchableOpacity>
            )}      
        
        
        />

    );
};

export default NavBar;

const styles = StyleSheet.create({

    text: {
        fontSize: 10,
    },

    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },

    button: {
        padding: 3,
        margin: 2,
    },

})