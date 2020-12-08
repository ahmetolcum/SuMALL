<template>
  <v-content>
    <v-card class="mx-auto" max-width="800">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              placeholder="Name"
              single-line
              append-icon="mdi-account"
              color="deep-purple lighten-2"
            />
            <div></div>
            <v-text-field
              placeholder="Surname"
              single-line
              append-icon="mdi-account"
              color="deep-purple lighten-2"
            />
            <div></div>
            <v-text-field
              placeholder="E-Mail"
              single-line
              append-icon="mdi-email"
              color="deep-purple lighten-2"
            />
            <div></div>
            <v-text-field
              placeholder="Password"
              single-line
              append-icon="mdi-key"
              color="deep-purple lighten-2"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-action>
        <v-spacer />
        <v-btn flat right color="deep-purple lighten-1" text @click="menu3 = false" ><v-icon>mdi-pen</v-icon>
          Sign Up!
        </v-btn>
      </v-card-action>
    </v-card>
  </v-content>
</template>