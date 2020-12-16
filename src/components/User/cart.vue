<template>
<v-content>
  <v-container>
    <v-layout row wrap v-for="(item, index) in 4" :key="index" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="white">
          <v-container fluid shaped>
            <v-layout row >
              <v-flex xs5 sm4 md3>
                <v-img 
                  :src="`https://picsum.photos/500/300?image=${index + 1}`"
                  height="130px"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                    <div class="primary--text">$14.99 </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn absolute right top flat v-on:click="changepage('product')">
                    <v-icon >mdi-dots-horizontal</v-icon>
                    Details
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn absolute right bottom flat v-on:click="changepage('product')">
                    <v-icon >mdi-delete</v-icon>
                    Delete!
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
      <v-btn absolute right class="primary" classflat v-on:click="changepage('payment')">
        <v-icon left light>mdi-check</v-icon>
        Go To Payment!
    </v-btn>
  </v-container>
</v-content>
</template>


<script>
import productpage from "../productpage";
import login from "./login";
import signup from "./signup";
import profilepage from "./profilepage";
import payment from "./payment";
export default { 
    components: {
        productpage,
        login,
        signup,
        profilepage,
        payment,
  },
    methods:{
        changepage(a) {
        this.$router.push(a).catch(() => {});
        },
    }
}
</script>