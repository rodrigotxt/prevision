<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    app
    >
    <v-list dense>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-alert-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Sobre</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar
  app
  color="indigo"
  dark
  >
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  <v-toolbar-title>IonPrev</v-toolbar-title>
</v-app-bar>

<v-content>
  <v-container
  class="fill-height"
  fluid
  >
  <v-row
  align="center"
  justify="center"
  >
  <v-col class="text-center col-upload" :class="{'drag-active': ($refs.upload && $refs.upload.dropActive)}">
    <file-upload
    :post-action="url_api + '/consulta/upload'"
    class="w-100 py-5"
    ref="upload"
    v-model="files"
    :drop="true"
    @input-file="inputFile"
    @input-filter="inputFilter"
    accept="text/csv"
    >
    <h3 class="mb-3">Clique no botão ou arraste aqui seu arquivo .csv</h3>
    <v-btn depressed large color="primary"><v-icon>mdi-arrow-up-bold</v-icon> Enviar arquivo</v-btn>
  </file-upload>
</v-col>
</v-row>
</v-container>
</v-content>
<v-footer
color="indigo"
app
>
<span class="white--text">&copy; 2019 - Rodrigo Martins <a class="indigo--text text--lighten-3 " href="https://github.com/rodrigotxt/">@rodrigotxt</a></span>
</v-footer>
</v-app>
</template>

<style scoped>
.col-upload{
  transition: 1s all;
}
.drag-active {
  background: linear-gradient(to left, white,lightgreen,white);
  padding: 10vh 0;
}
</style>

<script>
// import HelloWorld from './components/HelloWorld';


export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    url_api: '../backend',
    drawer: true,
    files: [],
  }),
  methods: {
    inputFile: function (newFile, oldFile) {
      // Automatic upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (!this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    },
    inputFilter: function (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // console.log(newFile,oldFile);
        if (!/\.(csv)$/i.test(newFile.name)) {
          alert('Tipo de arquivo não permitido.')
          return prevent()
        }
      }
    }

  }
};
</script>
