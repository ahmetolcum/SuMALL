import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products:[],
        user:{
            id: 'tokenwillbethere',
            ProductsInCart: [],
        }
    },
    mutations:{},
    actions:{
        allproducts({commit}){
            //console.log("this is created")
            const requestOption={
            method:"GET",
            headers: {"Content-Type" : "application/json"},
            };
            fetch("http://localhost:5000/api/product/main", requestOption)
            .then(async response => {const data =await response.json();
            // check for error response
            //console.log(data[0])
            var i;
            for(i=0;i< data.length ;i++){
              this.state.products[i] = data[i]
            }
            console.log("this is actions")
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            })
            .catch(error => {
              this.errorMessage = error;
              console.error('There was an error!', error);
            }) 
        },
    },
    getters:{
        products (state) {
           this.allproducts();
        },
        products (state){
            return(productid) => {
                return state.products.find((product) => {
                    return product.product_id = productid
                })
            }
        }
    },
})

