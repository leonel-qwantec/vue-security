<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Nuxt.js + Vue-Kindergarten </v-card-title>
        <v-container fluid>
          <p>{{ role || 'null' }}</p>
          <v-radio-group
            v-model="role"
            :mandatory="false"
          >
            <v-radio 
              label="Admin" 
              value="admin"
              @change="onRoleChange"
            >
            </v-radio>
            <v-radio 
              label="Guest"
              value="guest"
              @change="onRoleChange"
            >
            </v-radio>
          </v-radio-group>
          <p>{{ user }}</p>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      role: 'admin',
    };
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
  mounted() {
    this.role = this.user.info.role
  },
  methods: {
    ...mapMutations([
      'changeRole',
    ]),
    onRoleChange() {
      this.changeRole(this.role);
    },
  },
}
</script>
