<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nom Ville</ion-title>
          <ion-button slot="end">
            <ion-icon :icon="add" />
          </ion-button>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="ville in villes" v-bind:key="ville.id">
          <ion-label> {{ ville.city }} </ion-label>
          <form @submit.prevent="submitForm(ville.id)">
            <ion-button type="submit" color="primary" slot="end">
              <ion-icon :icon="trash" />
            </ion-button>
          </form>
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
  IonLabel,
  IonButton,
} from "@ionic/vue";

import { add, trash } from "ionicons/icons";

export default {
  data() {
    return {
      add,
      trash,
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
    IonLabel,
    IonButton,
  },
  computed: {
    villes() {
      return this.$store.getters.villes;
    },
  },
  methods: {
    submitForm(idCity) {
      this.$store.dispatch("deleteCity", idCity);
      this.$router.replace("/tabs/villes");
    },
  },
};
</script>

<style scoped>
.button {
}
</style>