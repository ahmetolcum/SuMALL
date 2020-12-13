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
                v-model="Email"
              />
              <div></div>
              <v-text-field
                class="mt-24"
                placeholder="Password"
                single-line
                append-icon="mdi-key"
                color="primary"
                v-model="Password"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer />
        <v-btn color="primary" text right v-on:click="login(Email, Password)"><v-icon>mdi-login</v-icon> Log In! </v-btn>
      </v-card>
    </v-col>
  </v-content>
</template>

<script>
export default {
  methods:{
    login(Email, Password){
      const requestOption={
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email: Email, password:Password})
      };
      fetch("http://localhost:5000/api/user/login", requestOption)
      .then(async response=>{  const data = await response.json();

        // check for error response
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
        .then(
          response=> {var r = JSON.parse(context.getVariable('response'))
          delete r.params
          context.setVariable('response', JSON.stringify(r))
        });
      
    },
  }
};
</script>