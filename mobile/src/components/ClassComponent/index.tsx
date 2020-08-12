import React from 'react';
import { View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

import HeartOutline from '../../assets/images/icons/heart-outline.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';

function ClassComponent() {
    return (
        <View style={styles.classCard}>
                <View style={styles.cardHeader}>
                    <Image 
                        style={styles.avatar}
                        source={{ uri: "https://avatars3.githubusercontent.com/u/49599535?v=4"}}
                    />
                    <View>
                        <Text style={styles.name}>Lucas Del Puerto</Text>
                        <Text style={styles.subject}>Programação</Text>
                    </View>
                </View>

                <Text style={styles.bio}>
                    Entusiasta das melhores tecnologias de química avançada.
                    {'\n\n'}
                    Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                </Text>

                <View style={styles.cardFooter}>
                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                        <Text style={styles.cost}>Preco/hora{'  '}</Text>
                        <Text>R$ 20,00</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                        <TouchableOpacity style={styles.favorite}>
                            <Image source={HeartOutline}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.contact}>
                            <Image source={whatsapp} style={{marginRight: 20}}/>
                            <Text style={styles.button}>Entrar em contato</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}

export default ClassComponent;