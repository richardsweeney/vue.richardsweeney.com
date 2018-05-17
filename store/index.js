import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      post: null,
    },
    mutations: {
      populatePosts(state, data) {
        state.posts = data;
      },
      populatePost(state, data) {
        state.post = data;
      },
    },
    actions: {
      getPosts(context) {
        return new Promise((resolve, reject) => {
          axios.get('https://richardsweeney.com/wp-json/wp/v2/posts?_embed')
            .then(data => {
              context.commit('populatePosts', data.data);
              resolve();
            }).catch(error => {
              reject(error);
            });
        });
      },

      getPost(context, slug) {
        context.commit('populatePost', null);
        return new Promise((resolve, reject) => {
          axios.get(`https://richardsweeney.com/wp-json/rico-api/v1/${slug}?_embed`)
            .then(data => {
              context.commit('populatePost', data.data);
              resolve();
            }).catch(error => {
              reject(error);
            });
        });
      },
    },
  });
}

export default createStore;
