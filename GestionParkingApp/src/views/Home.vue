<template>
  <ion-page>

    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Gestion Parking</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">

        <ville-list :villes="villes" v-model="selected_value" ></ville-list>

        <form @submit.prevent="submitForm">
        <ion-button type="submit" color="success">Voir les parkings</ion-button>
        </form>
      </div>

      <div class="container">
        <ion-button type="submit" color="danger">Se connecter Admin</ion-button>
      </div>
      {{ selected_value }}
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";

import VilleList from '@/user_non_connecte/VilleList.vue';

export default {
  
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    VilleList,
  },
  computed: {
    villes() {
      return this.$store.getters.villes;
    }
  },
  data () {
      return {
        selected_value: ""
      }
    },
    methods: {
      submitForm(){
        this.$store.dispatch("getParkingsInCity", this.selected_value)
        this.$router.replace("/parkings")
      }
    }
};
</script>

<style scoped>
.container {
  text-align: center;
}
.box {
  width: 200px;
  border: 2px solid gray;
}
.button {
}
</style>