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
          <ion-title size="large">Parkings</ion-title>
          <ion-button router-link="parkings/add" slot="end">
            <ion-icon :icon="add" />
          </ion-button>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        
          <ion-item v-for="park in parkings" v-bind:key="park.id">
            <div>
              <ion-img
                src="https://desinformemonos.org/wp-content/uploads/2019/04/Cort%C3%A9s-y-Quetzalc%C3%B3atl.jpg"
              ></ion-img>
            </div>
            <div>
              <ion-label> {{ park.name }} </ion-label>
            </div>
            <div>
              <ion-button :router-link="`parkings/detail/${park.id}`" color="primary">Voir</ion-button>
              
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
  IonLabel,
  IonButton,
} from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  data() {
    return {
      add,
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
    parkings() {
      return this.$store.getters.parks2;
    }
  }
};
</script>

<style scoped>
.button {
}
</style>