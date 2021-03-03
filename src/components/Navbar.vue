<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="cerrarSesion">
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>fas fa-address-book</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer color="indigo" v-model="drawer" app>
      <v-layout column align-center mt-5>
          <v-flex>
              <v-avatar>
                  <img :src="usuario.foto" alt="avatar">
              </v-avatar>
          </v-flex>
          <v-flex>
              <p class="mt-3 white--text">{{usuario.nombre}}</p>
          </v-flex>
      </v-layout> 
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Nav",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Dashboard", icon: "fas fa-address-card", to: { name: "Home"} },
        { title: "Account", icon: "fas fa-address-card", to: { name: "Ingreso"} },
        { title: "Admin", icon: "fas fa-address-card", to: { name: "Admin" } },
        { title: "Chat", icon: "fas fa-address-card", to: { name: "Chat" } }
      ]
    };
  },
  methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed:{
    ...mapState(['usuario'])
  }
};
</script>