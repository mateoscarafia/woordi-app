import React, { useEffect, setState, useState } from 'react';
import { View, ImageBackground, Dimensions, ScrollView,SafeAreaView ,StyleSheet, Image, FlatList, TouchableOpacity, Text, ActivityIndicator, TouchableHighlight } from 'react-native';

import apiEndpoints from '../utils/api'
import { WebView } from 'react-native-webview';

export default Article = (props) => {

    const [article, setArticle] = useState(null);

    useEffect(() => {
        (async () => {
            let response = await apiEndpoints.getArticle(props.articleId)
            setArticle(response)
        })()
    });

    const styles = StyleSheet.create({
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
        },
        imageProfile: {
            height: 80, width: 80, borderRadius: 40
        },
        infoDiv: {
            height: 100, width: '100%', position: 'absolute', backgroundColor: '#000', opacity: 0.8, bottom: 0,
            padding: 10
        },
        mainDiv: {
            height: 300, marginTop: 10, marginBottom: 5
        },
        mainDivProfile: {
            height: 80, width: 80, margin: 10
        },
        contentDiv: {
            marginTop: 5, marginBottom: 5
        },
        text: {
            color: '#fff',
            marginBottom: 5,
        },
        username: {
            position: 'absolute',
            top: 30,
            left: 110,
            fontSize: 16,
            fontWeight: 'bold'
        },
        arttitle: {
            margin: 5, fontSize: 17, fontWeight: 'bold'
        },
        text: {
            fontSize: 15,
            lineHeight: 17,
            textAlign: 'justify',
            padding:10,
            paddingBottom:100
        }

    });

    return (
        article && (
            <ScrollView style={styles.contentDiv}>
                <TouchableHighlight onPress={() => props.changePage('PROFILE', null, article[0].user_id)} style={styles.mainDivProfile}>
                    <Image
                        style={styles.imageProfile}
                        source={{ uri: 'http://www.woordi.com:3000/network_images/' + article[0].profile_img_url }}
                    />
                </TouchableHighlight>

                <Text onPress={() => props.changePage('PROFILE', null, article[0].user_id)} style={styles.username}>{article[0].username}</Text>
                <View style={styles.mainDiv}>
                    <ImageBackground source={{ uri: 'http://www.woordi.com:3000/network_images/' + article[0].img_url }} style={styles.image}>
                    </ImageBackground>
                </View>
                <Text style={styles.arttitle}>{article[0].title}</Text>
                <Text style={styles.text}>{article[0].content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, '')}</Text>
            </ScrollView>
        )
    )

}