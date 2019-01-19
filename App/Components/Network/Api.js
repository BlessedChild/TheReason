import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: false,
            dataSource: [],
            updateTimeStatus: 1,
            // page: 1,
            // seed: 1,
            error: null,
            loadComplete: false,
            isdownloading: false,
            isFirstLoading: true
        };
    }

    componentDidMount() {
        this.doRemoteRequest();
    }

    doRemoteRequest = () => {
        const { updateTimeStatus, page, seed } = this.state;
        // const requestUrl = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        const requestUrl = 'https://raw.githubusercontent.com/BlessedChild/TheReason/master/Database/movies5.json';
        this.setState({ isLoading: true, loadComplete: false });

        setTimeout(() => {
            fetch(requestUrl)
                .then((response) => response.json())
                .then((responseJson) => {

                    this.setState({
                        // dataSource: responseJson.movies,
                        // dataSource: page === 1 ? res.results : [...this.state.data, ...res.results],
                        // dataSource: updateTimeStatus === 1 ? responseJson.movies : [...this.state.dataSource, ...responseJson.movies],
                        dataSource: responseJson.movies,
                        error: responseJson.error || null,
                        refreshing: false,
                        isLoading: false,
                        loadComplete: true,
                        isdownloading: false,
                        isFirstLoading: false
                    }, function () {

                    });

                })
                .catch((error) => {
                    this.setState({ error, loading: false });
                    console.error(error);
                });
        }, 1500);
    }

    // 向下拉取时刷新文章
    handleRefresh = () => {
        this.setState(
            {
                refreshing: true
            },
            () => {
                this.doRemoteRequest();
            }
        );
    };

    // 向上拉取时会加载更多的文章
    handleLoadMore = () => {
        this.setState(
            {
                // page: this.state.page + 1
                // updateTimeStatus: this.state.page + 1,
                isdownloading: true
            },
            () => {
                this.renderFooter();
            }
        );
    };

    /*
    // （顶部渲染）
    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };
    */

    // 向上拉取时底部的动画效果(底部渲染)
    renderFooter = () => {
        if (this.state.loadComplete && this.state.isloading && this.state.isdownloading) {
            return (
                <View
                    style={{
                        paddingVertical: 20,
                        borderTopWidth: 1,
                        borderColor: "#CED0CE"
                    }}
                >
                    <ActivityIndicator animating size="large" />
                </View>
            );
        } else {
            return null;
        }
    };

    render() {

        if (this.state.isFirstLoading) {
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
                    // ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refreshing} // 刷新
                    onRefresh={this.handleRefresh} // 视图开始刷新时调用
                    data={this.state.dataSource}
                    onEndReached={this.handleLoadMore} // 在所有行都已渲染并且列表已滚动到底部的onEndReachedThreshold内时调用。提供了本机滚动事件
                    onEndReachedThreshold={0.1} // 用于调用onEndReached的像素阈值（虚拟，非物理）。
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