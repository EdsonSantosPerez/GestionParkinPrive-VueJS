<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>User</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <form @submit.prevent="submitForm">
        <ion-item>
          <ion-label position="floating">Nom utilisateur</ion-label>
          <ion-input v-model="username" type="text" />
        </ion-item>
        <ion-button type="submit" color="primary">Se deconnecter</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script >
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      username: "",
    };
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonButton,
    IonInput,
  },
  computed: {
    user() {
      return this.$store.getters.user();
    },
  },
  methods: {
    submitForm() {
      const data = {
        username: this.username,
      };
      this.$store.dispatch("logout", data);
      this.$router.replace("/home");
    },
  },
});
</script>

<style scoped>
.container {
  text-align: center;
}
</style>