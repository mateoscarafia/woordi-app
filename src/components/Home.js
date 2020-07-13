import React from 'react';
import { View, ImageBackground, StyleSheet, Image, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

export default Home = (props) => {

    const styles = StyleSheet.create({
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        infoDiv: {
            height: 100, width: '100%', position: 'absolute', backgroundColor: '#000', opacity: 0.8, bottom: 0,
            padding: 10
        },
        mainDiv: {
            position: 'relative', height: 300, marginTop: 5, marginBottom: 5
        },
        text: {
            color: '#fff',
            marginBottom: 5,
        }
    });

    const renderItem = (data) => {
        return (
            <TouchableOpacity onPress={()=>props.changePage('ARTICLE',data.item.id, null)}>
                <View style={styles.mainDiv}>
                    <ImageBackground source={{ uri: 'http://www.woordi.com:3000/network_images/' + data.item.img_url }} style={styles.image}>
                        <View style={styles.infoDiv}>
                            <Text style={styles.text}>{data.item.username} - {data.item.name}</Text>
                            <Text style={styles.text}>{data.item.title}</Text>
                        </View >
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={props.articles.main_feed}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    )

}