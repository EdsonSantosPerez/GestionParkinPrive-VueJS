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
          <ion-title size="large">{{  }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <form @submit.prevent="submitForm">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Nom utilisateur</ion-label>
            <ion-input v-model="username" type="text" />
          </ion-item>
          <ion-item>
            <ion-label position="floating">Mot de passe</ion-label>
            <ion-input v-model="password" type="password" />
          </ion-item>
        </ion-list>
        <div style="text-align: center;">
        <ion-button :router-link="`/reserver/${parkId}`" color="success">Connexion</ion-button>
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
  IonLabel,
  IonButton
} from "@ionic/vue";

export default {
  data(){
        return {
            username:"",
            password:"",
            parkId: this.$route.params.id
        }
    },
  watch: {
      '$route'(currentRoute) {
          this.parkId = currentRoute.params.id
      }
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
    IonButton
  },
   methods: {
      submitForm(){
        const data = {
        username: this.username,
        password: this.password
      };
        this.$store.dispatch("login", data)
        this.$router.replace("/reserver/"+ this.parkId)
      }
    }
};
</script>

<style scoped>
</style>