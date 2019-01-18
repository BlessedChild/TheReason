import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/BlessedChild/TheReason/master/Database/movies4.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        // 中间的内容页
        // 文章简介+作者+更新时间+图片
        return (
            <View style={{ flex: 1, paddingTop: 0 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <View>
                            <View style={styles.eachArticleBar}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.titleText}>{item.title}</Text>
                                    <View style={styles.titleFootText}>
                                        <Text style={styles.authorText}>{item.title}</Text>
                                        <Text style={styles.updateTimeText}>{item.releaseYear}</Text>
                                    </View>
                                </View>
                                <Image
                                    source={{ uri: item.imgUri }}
                                    style={{ width: 100, height: 100, resizeMode: 'cover' }}
                                />
                            </View>
                            <View style={styles.separationLine}>

                            </View>
                        </View>
                    }
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    eachArticleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        margin: '4%'
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: 110
    },
    titleText: {
        paddingTop: 12,
        fontSize: 17,
        fontWeight: '700'
    },
    titleFootText: {
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    authorText: {
        fontSize: 12,
        color: '#b3b3b3'
    },
    updateTimeText: {
        marginLeft: 12,
        fontSize: 12,
        color: '#b3b3b3'
    },
    separationLine: {
        marginLeft: '4%',
        marginRight: '4%',
        height: 0.4,
        backgroundColor: '#f2f2f2'
    }
});