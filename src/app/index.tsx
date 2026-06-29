import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Topic1, Topic2 } from '@/components/icon';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index(){
    return(
        <ScrollView style={styles.container}>
            <Image
            source={require('../assets/banner.jpg')}
            style={styles.banner}
            resizeMode='cover'
            />
        
        <View style={styles.div}>

            <Topic1
                style={styles.title}
            />
           
            <Text style={styles.paragraph}>
                The musician american corean, Natalie Jinju, was born in September 2006; started her artistic career while she was in High School. Natalie could focus more on her career after she entered The University of Southern California's Thornton School of Music. 
            </Text>

        </View>
        
        <View style={styles.div}>
            <Topic2
                style={styles.title}
            />

            <Text style={styles.paragraph}>
                Her first album was realesed in 2024, featuring some of her peviously realesed singles and new tracks; It is called Last September.
            </Text>

        </View>
            

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    banner: {
        height: windowHeight * 0.25,
        width: windowWidth,
        marginBottom: 20
    },

    title: {
        fontSize: 28,
        fontWeight: 700,
        textAlign: "center"
    },

    div: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 15
    },

    paragraph: {
        textAlign: "justify",
        fontSize: 16,
    }
})