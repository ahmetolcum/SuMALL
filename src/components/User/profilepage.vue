<template>
  <v-content>
    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> Name Surname </v-list-item-title>
            <v-list-item-subtitle>
              Cart : number of items
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch v-model="theme" color="grey darken-2" />
          </v-list-item-action>
          <v-list-item-title>Dark Mode</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-content>
</template>

<script>
export default {
    watch: {
      theme: function (next) {
        this.$vuetify.theme.dark = next;
      },
    },
};
</script>