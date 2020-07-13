import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

import apiEndpoints from './src/utils/api'

import Menu from './src/components/Menu'
import Home from './src/components/Home'
import Article from './src/components/Article'
import Profile from './src/components/Profile'
import Login from './src/components/Login'
import Register from './src/components/Register'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends PureComponent {

  state = {
    loading: true,
    page: 'HOME'
  }

  async componentDidMount() {
    const apiCallResponse = await apiEndpoints.apiFullCall()
    this.setState({
      categories: apiCallResponse.categories,
      articles: apiCallResponse.articles,
      latestArticles: apiCallResponse.latestArticles,
      loading: false
    });
  }

  changePage = async (page, articleId, userId) => {
    if (page == 'PROFILE') {
      var getUserResponse = await apiEndpoints.getUser(userId)
      var getUserArticlesResponse = await apiEndpoints.getUserArticles(userId)

      this.setState({
        page,
        getUserResponse: getUserResponse,
        getUserArticlesResponse: getUserArticlesResponse,
        articleId: articleId || null
      });

    }
    this.setState({
      page,
      articleId: articleId || null
    });
  }

  render() {
    const { categories, articles, latestArticles, loading } = this.state;
    return (
      <View>
        <Menu changePage={this.changePage} />
        {!this.state.loading && this.state.page === 'HOME' && <Home articles={articles} changePage={this.changePage} />}
        {this.state.page === 'ARTICLE' && this.state.articleId && <Article articleId={this.state.articleId} changePage={this.changePage} />}
        {this.state.page === 'PROFILE' && this.state.getUserResponse && this.state.getUserArticlesResponse && <Profile userArticles={this.state.getUserArticlesResponse} userInfo={this.state.getUserArticlesResponse} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
