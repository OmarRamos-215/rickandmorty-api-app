import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    character:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    spacing:{
        flex: 1,
        flexDirection: "row",
        paddingRight: 10,
        paddingTop: 20,
        paddingLeft: 10,
    },
    image:{
        position: 'relative',
        width: 180,
        height: 180,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
    },
    character_info:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "flex-start",
        paddingLeft: 10,
        height: "100%",
        backgroundColor:"#3c3e44",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        
    },
    character_name:{
        height:50,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color: "#fefefe",
        fontSize:20,
        fontWeight: "bold",
        textAlignVertical: "center",
    },
    character_status:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "flex-start",
    },
    status_indicator_container: {
        height: 17,
    },
    character_alive:{
        backgroundColor: "#55cc44",
    },
    character_dead: {
        backgroundColor: "#d63d2e",
    },
    character_status_indicator: {
        flex: 1,
        marginTop: 7,
        height: 10,
        width: 10,
        borderRadius: 10,
    },
    character_status_text: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 16,
    },
    character_data: {
        marginBottom: 10,
    },

    data_title: {
        color: "#8a8b8c",
        fontSize: 15,
    },

    data_text: {
        color: "#fff",
        fontSize: 16,
    },

})

export default styles