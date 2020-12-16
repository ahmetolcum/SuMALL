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
            v-model="Name"
            />
            <div></div>
            <v-text-field
              placeholder="Surname"
              single-line
              append-icon="mdi-account"
              color="deep-purple lighten-2"
            v-model="Surname"
            />
            <div></div>
            <v-text-field
              placeholder="E-Mail"
              single-line
              append-icon="mdi-email"
              color="deep-purple lighten-2"
            v-model="Email"
            />
            <div></div>
            <v-text-field
              placeholder="Password"
              single-line
              append-icon="mdi-key"
              color="deep-purple lighten-2"
            v-model="Password"

            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-action>
        <v-spacer />
        <v-btn flat right color="deep-purple lighten-1" text v-on:click="register(Name,Surname,Email,Password)"><v-icon>mdi-pen</v-icon>
          Sign Up!
        </v-btn>
        <div class="success" v-if="isSuccessful">
          {{ text.message }}
          Please go to your mail to confirm!
        </div>
        <div class="error" v-if="!isSuccessful" position-x="center">
          {{ text.message }}
        </div>
      </v-card-action>
    </v-card>
  </v-content>
</template>

<script>
import login from "./login";
export default {
data: ()=> ({
  isSuccessful: false,
  text: {message: ""},
  
}),
methods:{
  register(Name, Surname, Email, Password ){

    const requestOption={
      method:"POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({email: Email , name:Name, surname:Surname, password:Password})
    };
    fetch("http://localhost:5000/api/user/register", requestOption)
    .then(async response=>{  const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        //console.log(response);
        console.log(data);
        
        this.text.message = data.errors[0].msg;
        
        return Promise.reject(error);     
      }
      else{
        this.isSuccessful=true;
        this.text.message = "User Successfully Signed Up!";
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
    
    //

  },
  
}

};
</script>