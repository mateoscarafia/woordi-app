const URLS = require("./urls");

export default apiEndpoints = {

    apiFullCall: async () => {

        const categoriesApiCall = await fetch(URLS.GET_CATEGORIES_URL);
        const articlesApiCall = await fetch(URLS.GET_ARTICLES_URL, {
            method: 'POST',
            body: JSON.stringify({
                id: null,
                param: "main",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc1NjM1Mjc5fQ.FPBRv8J6JvGucO5bDhSvnUvI5fR6bCWL3MEyoURrD4Y"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const latestArticlesApiCall = await fetch(URLS.GET_LATEST_ARTICLES_URL, {
            method: 'POST',
            body: JSON.stringify({
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc1NjM1Mjc5fQ.FPBRv8J6JvGucO5bDhSvnUvI5fR6bCWL3MEyoURrD4Y"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const categories = await categoriesApiCall.json();
        const articles = await articlesApiCall.json();
        const latestArticles = await latestArticlesApiCall.json();

        return { categories: categories, articles: articles, latestArticles: latestArticles }

    },

    getArticle: async (id) => {
        const artobject = await fetch(URLS.GET_ARTICLE, {
            method: 'POST',
            body: JSON.stringify({
                id: id.toString(),
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc1NjM1Mjc5fQ.FPBRv8J6JvGucO5bDhSvnUvI5fR6bCWL3MEyoURrD4Y"
            }),
            headers: {
                'Content-Type': 'application/json',
                cookieforstore: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJfZ2E9R0ExLjIuMzE0NjY3NTA3LjE1ODM4MDk2NTE7LV9naWQ9R0ExLjIuODkwNzgiLCJzZWNyZXQiOjU2NDY1NDc1MzgsImlhdCI6MTU5MDA3Mzc2MX0.Bg5w5NAtwNEXDxLCpuvBprfq9Ax0Yp_fv9KP4sfwGaU'
            }
        });
        const article = await artobject.json();
        return article
    },

    getUserArticles: async (id) => {
        const artobject = await fetch(URLS.GET_USER_ARTICLES, {
            method: 'POST',
            body: JSON.stringify({
                id: id.toString(),
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc1NjM1Mjc5fQ.FPBRv8J6JvGucO5bDhSvnUvI5fR6bCWL3MEyoURrD4Y"
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const userArticles = await artobject.json();
        return userArticles
    },

    getUser: async (id) => {
        const artobject = await fetch(URLS.GET_USER, {
            method: 'POST',
            body: JSON.stringify({
                id: id.toString(),
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc1NjM1Mjc5fQ.FPBRv8J6JvGucO5bDhSvnUvI5fR6bCWL3MEyoURrD4Y"
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const userObject = await artobject.json();
        return userObject
    }
}

module.exports = apiEndpoints