import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native';

import { Font } from '@/components/icon';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Index(){
    return(
        <ScrollView>
            <Image
            source={require('../assets/banner.jpg')}
            style={styles.banner}
            resizeMode='cover'
            />

            <Font
            style={styles.font}
            />
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

    font: {
        fontSize: 24,
        fontWeight: 700
    }
})