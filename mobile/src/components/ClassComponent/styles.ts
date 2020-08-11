import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    classCard: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: -20,
        marginBottom: 40
    },

    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 25,
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        marginLeft: 20,
        fontSize: 20,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        marginLeft: 20,
        fontSize: 12,
    },

    bio: {
        fontFamily: 'Poppins_400Regular',
        margin: 25,
        fontSize: 14,
    },

    cardFooter: {
        marginTop: 15,
        backgroundColor: '#FAFAFC',
        padding: 20,
    },

    favorite: {
        width: 55,
        height: 55,
        backgroundColor: '#8257E5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contact: {
        flexDirection: 'row',
        backgroundColor: '#04D361',
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 10
    }
});

export default styles;