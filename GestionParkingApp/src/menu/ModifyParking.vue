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
          <div>
            <ion-img
              src="https://th.bing.com/th/id/OIP.gYPuKLoPprTQ_CUMhz8s3QHaE1?w=254&h=180&c=7&o=5&dpr=1.75&pid=1.7"
            ></ion-img>
          </div>
          <div></div>
        </ion-item>
      </ion-list>

      <form @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Titre</ion-label>
            <ion-input v-model="name" type="text" />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Places disponible</ion-label>
            <ion-input v-model="capacite" type="number" />
          </ion-item>
          <ion-item>
            <ion-select placeholder="Ville" class="box" v-model="selected_value">
              <ion-select-option v-for="ville in villes" v-bind:key="ville.id" :value="`${ville.id}`">
                {{ ville.city }}
              </ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>

        <ion-button type="submit" expand="full" color="warning">
          <ion-icon :icon="pencil" slot="start"/>
          Modifier
        </ion-button>
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
import { defineComponent } from "vue";
import { pencil } from "ionicons/icons";

export default defineComponent({
  name: "Home",
  data() {
    return {
      pencil,
      parkId: this.$route.params.id,
      name: "",
      capacite: "",
      selected_value: ""
    };
  },
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
  computed: {
    parking() {
      return this.$store.getters.park2(this.parkId);
    },
    villes() {
      return this.$store.getters.villes;
    },
  },
  watch: {
    $route(currentRoute) {
      this.parkId = currentRoute.params.id;
    },
  },
  methods: {
    submitForm() {
      const modData = {
        name: this.name,
        capacite: this.capacite,
        city: this.selected_value,
        id: this.parkId
      };
      
      this.$store.dispatch("modPark",modData);
      this.$router.replace("/tabs/parkings");
    },
  },
});
</script>

<style scoped>
</style>