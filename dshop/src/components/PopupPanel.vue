<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <div class="container_logo">
          <img class="logo" src="../assets/DShop_logo.jpeg" />
        </div>
        <slot name="content"></slot>
        <v-card-actions>
          <v-btn  color="success" @click="Emit()">
            Iniciar sesión
          </v-btn>
          <v-btn color="success" outlined @click="Emit()">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'PopupPanel',
  data() {
    return {
      dialog: true,
    }
  },
  methods:{
    Emit(){
      this.dialog= false,
      this.$emit('UpdateDialog',this.dialog)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 200px;
  height: 200px;
  justify-self: center;
}
.container_logo {
  text-align: center;
}

::v-deep .v-dialog {
  width: 400px;
  height: 455px;
}

button {
  margin: 7px;
}

.v-card__actions{
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
