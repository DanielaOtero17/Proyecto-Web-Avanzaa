<template>
  <div>
    <v-toolbar>
      <img class="logo" src="../assets/DShop_logo.jpeg" />
      <div class="buttons_section">
        <v-btn color="success" @click="showDialog">
          Iniciar Sesión
        </v-btn>
        <v-btn :to="{ name: 'Popup' }" dark>Registrarme</v-btn>
      </div>
    </v-toolbar>
    <img class="publicity" src="../assets/publicidad.png" />
    <PopupPanel @UpdateDialog="updateDialog" v-if="showPopup">
      <template v-slot:content>
        <div class='input_container'>
          <v-text-field
            label="Correo electrónico"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            encripted
            label="Contraseña"
            outlined
            dense
          ></v-text-field>
        </div>
      </template>
    </PopupPanel>
  </div>
</template>

<script>
import PopupPanel from './PopupPanel.vue'

export default {
  name: 'Main',
  data: () => {
    return {
      dialog: false,
    }
  },
  computed: {
    showPopup() {
      return this.dialog
    },
  },
  components: {
    PopupPanel,
  },
  methods: {
    updateDialog(dialog) {
      this.dialog = dialog
    },
    showDialog() {
      this.dialog = true
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  width: 150px;
}

.v-toolbar {
  box-shadow: none !important;
}

::v-deep .v-toolbar__content,
.v-toolbar,
.logo {
  height: 150px !important;
}

.buttons_section {
  margin-left: auto;
}

.v-btn {
  margin: 8px;
}

#login_btn {
  background-color: green;
}

.publicity {
  width: 100%;
}

.v-text-field {
  width: 50%;
}

.input_container {
    display: grid;
    justify-items: center;
}
</style>
