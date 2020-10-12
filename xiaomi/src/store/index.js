import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: {}
      
    },
    actions: {
        getdata(context) {
            axios.get('/json/data.json')
                .then(res => {
                    console.log(res.data)
                    context.commit('getdatamut', res.data)
                })


        },
       
    },
    mutations: {
        getdatamut(state, obj) {
            state.data = obj
        }
    }
});
export default store