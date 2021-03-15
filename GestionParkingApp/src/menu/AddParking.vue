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

      <form @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Titre</ion-label>
            <ion-input v-model="nameP" type="text" />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Places disponible</ion-label>
            <ion-input v-model="capacite" type="text" />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Type</ion-label>
            <ion-input v-model="type" type="text" />
          </ion-item>
          <ion-item>
            <ion-select placeholder="Ville" class="box" v-model="selected_value">
              <ion-select-option v-for="ville in villes" v-bind:key="ville.id" :value="`${ville.id}`">
                {{ ville.city }}
              </ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>

        <ion-button type="submit" expand="full" color="success"
          ><ion-icon :icon="pencil" slot="start" />Ajouter</ion-button
        >
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
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/vue";

import { pencil } from "ionicons/icons";

export default {
  
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
  },
  data() {
    return {
      pencil,
      name: "",
      type: "",
      cityId: "",
      capacite: ""
    };
  },
  computed: {
    villes() {
      return this.$store.getters.villes;
    },
    user() {
      return this.$store.getters.user();
    }
  },
  methods: {
    submitForm() {
      const resData = {
      name: this.nameP,
      type: this.type,
      cityId: this.selected_value,
      capacite: this.capacite,
      user_id: this.user.id
      };
      this.$store.dispatch("addPark", resData);
      this.$router.replace("/tabs/home");
    },
  },
};
</script>

<style scoped>
</style>