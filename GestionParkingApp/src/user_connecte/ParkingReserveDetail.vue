<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Parking</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
            <ion-img src="https://th.bing.com/th/id/OIP.gYPuKLoPprTQ_CUMhz8s3QHaE1?w=254&h=180&c=7&o=5&dpr=1.75&pid=1.7"></ion-img>
        </ion-item>
        <ion-item>
            <ion-label>Titre parking</ion-label>
            <ion-label>Place disponible:10</ion-label>
        </ion-item>
      </ion-list>
      <ion-list>
        <ion-item>
          <ion-label position="floating">date debut</ion-label>
        </ion-item>
        <ion-item>
          <ion-label position="floating">heure</ion-label>
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
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonImg,
  IonLabel,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonImg,
    IonLabel,
  },
});
</script>

<style scoped>
</style>