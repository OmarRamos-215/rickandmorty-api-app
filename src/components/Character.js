import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles/CharacterStyles'
import { getEpisodeName } from '../api/characters'

export default function Character({ character, navigation }){
    const [episode, setEpisode] = useState()

    const fetchEpisodeData= async()=>{
        const request= await getEpisodeName(character.episode[0])
        setEpisode(request)
    }

    useEffect(()=>{
        fetchEpisodeData()
    })

    return(
        <TouchableWithoutFeedback onPress={()=>{
            navigation.navigate("CharacterDetails", {character})
            
            }}>

            <View style={styles.character}>
                <View style={styles.spacing}>
                    <Image source={{ uri: character.image }} style={styles.image} />
                    <View style={styles.character_info}>
                        <Text style={styles.character_name}>{character.name}</Text>
                        <View style={styles.character_status}>
                            <View style={styles.status_indicator_container}>
                                <View style={[ styles.character_status_indicator,
                                        character.status === 'Alive'
                                        ? styles.character_alive
                                        : styles.character_dead ]} />
                            </View>

                            <Text style={styles.character_status_text}>{`${character.status} - ${character.species}`}</Text>
                        </View>
                        <View style={styles.character_data}>
                            <Text style={styles.data_title}>Last known location: </Text>
                            <Text style={styles.data_text}>{character.location.name}</Text>
                            <Text style={styles.data_title}>First seen in: </Text>
                            <Text style={styles.data_text}>{episode}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

