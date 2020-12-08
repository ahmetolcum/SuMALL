<template>
  <v-content>
    <v-col>
      <v-card class="mx-auto" max-width="800">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-text-field
                class="mt-24"
                placeholder="E-Mail"
                single-line
                append-icon="mdi-email"
                color="primary"
              />
              <div></div>
              <v-text-field
                class="mt-24"
                placeholder="Password"
                single-line
                append-icon="mdi-key"
                color="primary"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer />
        <v-btn color="primary" text right><v-icon>mdi-login</v-icon> Log In! </v-btn>
      </v-card>
    </v-col>
  </v-content>
</template>