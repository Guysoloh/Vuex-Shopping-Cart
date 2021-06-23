import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
Vue.use(Vuex)

export const store= new Vuex.Store({
    modules:{
        cart,
        products
    },
    state:{ //=data
       // products: [],
    //    cart:[]
            
    },
    getters:{ //=Computed properties
        
    },
    actions: actions,
  

        
        
    mutations:{ //Setting and Updating an state
        
    }
})