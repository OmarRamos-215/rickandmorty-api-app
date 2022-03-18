import { StyleSheet } from "react-native"

const styles= StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#2E0454",
    },
    content: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        margin: 20,
        borderRadius: 30,
        shadowColor: "gray",
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#540449",
        marginBottom: 20,
    },
    image: {
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
        position: "relative",
        alignSelf: "center",
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: "gray",
        borderWidth: 3,
    },
    property: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        marginBottom: 5,
    },
    property_name: {
        fontSize: 20,
        alignSelf: "flex-start",
        color: "#8a8b8c",
        marginLeft: 40,
    },
    property_value: {
        height: "100%",
        color: "#ECECEC",
        fontSize: 18,
        alignSelf: "flex-start",
        marginLeft: 60,
    },
})

export default styles