import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    header: {
        width: '100%',
        backgroundColor: '#8257E5',
        paddingBottom: 50
    },

    headerTopLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 30,
        marginTop: 30
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 30
    },

});

export default styles;