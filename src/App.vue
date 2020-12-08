<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-row class="ma-2 mb-3">
          <v-icon class="mx-4" large color="primary">mdi-shopping</v-icon>
          <v-toolbar-title class="align-center">
            <span class="title"> SuMall </span>
          </v-toolbar-title>
        </v-row>
        <v-list-item v-for="item in navlistitems" :key="item.title" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon v-on:click.native.passive="drawer = !drawer" />
      <v-icon
        class="mx-4"
        large
        color="primary"
        v-on:click.passive="changepage('/')"
        >mdi-shopping</v-icon
      >
      <v-toolbar-title class="mx-auto" v-on:click="changepage('/')">
        <span class="title"> SuMall </span>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        class="mx-auto"
        placeholder="Search..."
        single-line
        append-icon="mdi-magnify"
        color="secondary"
      />
      <v-spacer />
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          class="primary--text"
          text
          v-for="item in menuitems"
          :key="item.title"
          v-on:click="changepage(item.link)"
        >
          <v-spacer></v-spacer>
          <v-icon left dark>{{ item.icon }} </v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
   <router-view> </router-view>
  </v-app>
</template>

<script>
import Home from "./components/home";
import productpage from "@/components/productpage";
import login from "@/components/User/login";
import signup from "@/components/User/signup";
import profilepage from "@/components/User/profilepage";

export default {
  name: "App",

  components: {
    Home,
    productpage,
    login,
    signup,
    profilepage,
  },

  data: () => ({
    menuitems: [
      { icon: "mdi-login", title: "Log In", link: "login" },
      { icon: "mdi-pen", title: "Sign Up", link: "signup" },
      { icon: "mdi-account", title: "My Account", link: "profile" },
    ],
    navlistitems: [
      { icon: "mdi-trending-up", text: "Popular Products" },
      { icon: "mdi-sale", text: "Top Sales" },
      { icon: "mdi-heart", text: "My Favorites" },
      { icon: "mdi-laptop-chromebook", text: "Technology" },
      { icon: "mdi-hanger", text: "Clothing" },
      { icon: "mdi-flower", text: "Decoration" },
      { icon: "mdi-history", text: "History" },
    ],
    drawer: false,
    menu: false,
    menu2: false,
    menu3: false,
    theme: false,
  }),
  methods: {
    changepage(a) {
      //console.log('changepage')
      this.$router.push(a).catch(() => {});
    },
  },
};
</script>
