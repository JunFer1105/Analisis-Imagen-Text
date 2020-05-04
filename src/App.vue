<template>
  <v-app>
    <div>
      <v-toolbar
      dark
      prominent
      color="teal"
      >
      <v-toolbar-title>Analisis Imagen-Texto</v-toolbar-title>
    </v-toolbar>
  </div>

  <v-content>
    <v-container fluid>
      <v-layout>
        <router-view/>
      </v-layout>
    </v-container>
  </v-content>

  <v-footer
    color="teal lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="teal darken-4 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Juan Fernando Arango</strong>
      </v-col>
    </v-row>
  </v-footer>
</v-app>

</template>

<script>
export default {
  name: 'App',

  data: () => ({
    links: [
        'Home',
        'About Us',
        'GitHub',
      ],
  }),
};
</script>