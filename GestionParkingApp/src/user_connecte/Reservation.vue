<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Parking</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <div>
            <ion-img
              src="https://th.bing.com/th/id/OIP.gYPuKLoPprTQ_CUMhz8s3QHaE1?w=254&h=180&c=7&o=5&dpr=1.75&pid=1.7"
            ></ion-img>
          </div>
          <div>
            <ion-label>{{ parking.name }}</ion-label>
            <ion-label>Place disponible: {{ parking.capacite }} </ion-label>
          </div>
        </ion-item>
      </ion-list>
      <form>
        <ion-list>
          <ion-item>
            <ion-label position="floating">date debut</ion-label>
            <ion-input v-model="date" type="text" />
          </ion-item>
          <ion-item>
            <ion-label position="floating">heure</ion-label>
            <ion-input v-model="heure" type="text" />
          </ion-item>
          <ion-item>
            <ion-label position="floating">plaque immatriculation</ion-label>
            <ion-input v-model="plaque" type="text" />
          </ion-item>
          <div class="container">
            <ion-select
              placeholder="Type vehicule"
              v-model="vehicule"
              class="scrollLigne"
            >
              <ion-select-option>Compacte</ion-select-option>
              <ion-select-option>Pickup</ion-select-option>
              <ion-select-option>Leger de marchandise</ion-select-option>
              <ion-select-option>Camion</ion-select-option>
              <ion-select-option>Moto</ion-select-option>
            </ion-select>
          </div>
        </ion-list>
        <div style="text-align: center">
          <ion-button type="submit" color="success">Reserver</ion-button>
        </div>
      </form>
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
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/vue";

export default {
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
    IonSelect,
    IonSelectOption,
    IonButton,
  },
  data() {
    return {
      date: "",
      heure: "",
      plaque: "",
      vehicule: "",
      parkId: this.$route.params.id,
    };
  },
  computed: {
    parking() {
      return this.$store.getters.park(this.parkId);
    },
    user() {
      return this.$store.getters.user();
    }
  },
  watch: {
    $route(currentRoute) {
      this.parkId = currentRoute.params.id;
    },
  },
  methods: {
    submitForm() {
      const resData = {
        user_id: this.user.id,
        vehicle: this.vehicule,
        licensePlate: this.plaque,
        checkin: this.date,
        checkout: this.date,
        id_park: this.parkId
      };
      this.$store.dispatch("reserver", resData);
      this.$router.replace("/home");
    },
  },
};
</script>

<style scoped>
</style>