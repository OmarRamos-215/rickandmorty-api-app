import { StyleSheet, View, Text, Image } from "react-native";
import styles from "../components/styles/CharacterDetailsStyles";
import React from 'react'

export default function CharacterDetails(props){
    const { character }= props.route.params

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: character.image}} />
                <View style={styles.property}>
                    <Text style={styles.property_name}>Name: </Text>
                    <Text style={styles.property_value}>{character.name}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Status: </Text>
                    <Text style={styles.property_value}>{character.status}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Species: </Text>
                    <Text style={styles.property_value}>{character.species}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Type: </Text>
                    <Text style={styles.property_value}>{character.type || "NA" }</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Gender: </Text>
                    <Text style={styles.property_value}>{character.gender}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Origin: </Text>
                    <Text style={styles.property_value}>{character.origin.name}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Location: </Text>
                    <Text style={styles.property_value}>{character.location.name}</Text>
                </View>
            </View>
        </View>
    )
}

