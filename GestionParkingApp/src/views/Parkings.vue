<template>
  <ion-page>
    <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button color="danger" defaultHref="/home"></ion-back-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

    <ion-content :fullscreen="true">

      <ion-list>
        
        <ion-item v-for="parking in parkings" v-bind:key="parking.id">
            <div>
            <ion-img src="https://desinformemonos.org/wp-content/uploads/2019/04/Cort%C3%A9s-y-Quetzalc%C3%B3atl.jpg"></ion-img>
            </div>
          <div>
            <ion-label>{{ parking.name }}</ion-label>
            </div>
            <div>
            <ion-button :router-link="`/parking/${parking.id}`" color="primary">Voir</ion-button>
          </div>
        </ion-item>

      </ion-list>
      
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonList,
  IonItem,
  IonImg,
  IonLabel,
  IonButton,
  IonBackButton,
  IonButtons
} from "@ionic/vue";

import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonList,
    IonItem,
    IonImg,
    IonLabel,
    IonButton,
    IonBackButton,
    IonButtons
  },
  computed: {
    parkings() {
      return this.$store.getters.parks;
    }
  }
});
</script>

<style scoped>

</style>