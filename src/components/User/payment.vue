<template>
  <v-content>
    <v-card class="mx-auto" max-width="800">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              placeholder="Address First Line"
              double-line
              append-icon="mdi-office-building"
              color="deep-purple lighten-2"
            v-model="Address"
            />
            <div></div>
             <v-text-field
              placeholder="Address Second Line"
              double-line
              append-icon="mdi-office-building"
              color="deep-purple lighten-2"
            v-model="Address"
            />
            <div></div>
            <v-text-field
              placeholder="Credit Card No"
              single-line
              integeronly
              append-icon="mdi-credit-card-outline"
              color="deep-purple lighten-2"
            v-model="Credit_Card_No"
            />
            <div></div>
            <v-text-field
              placeholder="CVV"
              single-line
              append-icon="mdi-key"
              color="deep-purple lighten-2"
            v-model="CVV"
            />
            <div></div>
            <v-text-field
              placeholder="Credit Card Owners Name"
              single-line
              append-icon="mdi-account"
              color="deep-purple lighten-2"
            v-model="card_owner"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-action>
        <v-spacer />
        <v-btn flat right color="deep-purple lighten-1" text v-on:click="(Adress,Credit_Card_No,CVV,card_owner)"><v-icon>mdi-currency-usd</v-icon>
          Pay!
        </v-btn>
      </v-card-action>
    </v-card>
  </v-content>
</template>