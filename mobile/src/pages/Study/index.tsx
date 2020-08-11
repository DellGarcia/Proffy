import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ClassComponent from '../../components/ClassComponent';

import styles from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Study() {
    const navigation = useNavigation();

    function returnToLanding() {
        console.log('Voltando')
        navigation.navigate('Landing');
    }

    return (
        <View style={styles.container}>
            
            
            <SafeAreaView style={{flex: 1, width: '100%'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View style={styles.headerTopLine}>
                            <TouchableOpacity onPress={returnToLanding}>
                                <Image source={backIcon}/>
                            </TouchableOpacity>
                            <Image source={logo}/>
                        </View>
                        <Text style={styles.title}>Proffys {'\n'}Disponíveis</Text>
                    </View>
                    <ClassComponent />
                    <ClassComponent />
                    <ClassComponent />
                    <ClassComponent />
                    <ClassComponent />
                    <ClassComponent />
                    <ClassComponent />
                    <ClassComponent />
                    <ClassComponent />
                </ScrollView>
            </SafeAreaView>
            
        </View>
    );
}

export default Study;