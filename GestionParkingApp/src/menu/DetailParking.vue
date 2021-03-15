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

        <ion-item >
            <div>
            <ion-img src="https://th.bing.com/th/id/OIP.gYPuKLoPprTQ_CUMhz8s3QHaE1?w=254&h=180&c=7&o=5&dpr=1.75&pid=1.7%22%3E"></ion-img>
            </div>
          <div>
            <ion-label>{{ parking.name }}</ion-label>
            <ion-label>Place disponible: {{ parking.capacite }} </ion-label>
            </div>
            <div>
            <ion-button :router-link="`modify/${parking.id}`" color="primary">Modifier</ion-button>
            <form @submit.prevent="submitForm">
            <ion-button color="primary" router-link="">Supprimerr</ion-button>
            </form>
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
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonImg,
  IonLabel,
  IonButton
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
    IonButton
  },
  data() {
        return {
            parkId: this.$route.params.id
        }
    },
    computed: {
        parking() {
            return this.$store.getters.park2(this.parkId);
        }
    },
    watch: {
        '$route'(currentRoute) {
            this.parkId = currentRoute.params.id
        }
    },
    methods: {
    submitForm() {
      this.$store.dispatch("delPark", this.parkId);
      this.$router.replace("/tabs/home");
    },
  }
});
</script>

<style scoped>

</style>