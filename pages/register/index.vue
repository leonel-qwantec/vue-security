<template>
  <form method="post" @submit.prevent="register">
    <v-text-field
      v-validate="'required|max:10'"
      v-model="username"
      :counter="10"
      :error-messages="errors.collect('username')"
      label="Username"
      data-vv-name="username"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required|email'"
      v-model="email"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-text-field
      v-validate="'required'"
      v-model="password"
      :error-messages="errors.collect('password')"
      label="Password"
      data-vv-name="password"
      required
    ></v-text-field>
    <v-select
      v-validate="'required'"
      :items="roles"
      v-model="rol"
      :error-messages="errors.collect('rol')"
      label="Rol"
      data-vv-name="rol"
      required
    ></v-select>

    <v-btn @click="submit">Register</v-btn>
    <v-btn @click="clear">Clear</v-btn>
  </form>
</template>

<script>
import Notification from "~/components/Notification";

export default {
  components: {
    Notification
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null,
      rol: null,
      roles: [
        'Admin',
        'Guest'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          username: {
            required: () => 'Username can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          rol: {
            required: 'Rol field is required'
          }
        }
      }
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post("register", {
          username: this.username,
          email: this.email,
          password: this.password
        });

        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },

    async submit() {
      this.$validator.validateAll();
    },

    async clear() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.rol = null;
      this.checkbox = null;
      this.$validator.reset();
    }
  }
};
</script>