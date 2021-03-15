<template>
    <ion-page>
        <ion-tabs>
            <ion-tab-bar slot="bottom">

                <ion-tab-button tab="home" href="/tabs/home">
                    <ion-icon :icon="home"/>
                    <ion-label>Accueil</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="ville" href="/tabs/villes">
                    <ion-icon :icon="business"/>
                    <ion-label>Ville</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="parking" href="/tabs/parkings">
                    <ion-icon :icon="car"/>
                    <ion-label>Parkings</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="account" href="/tabs/account">
                    <ion-icon :icon="personCircle"/>
                    <ion-label>Compte</ion-label>
                </ion-tab-button>

            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script>
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from "@ionic/vue"
import { home, personCircle, business, car } from "ionicons/icons"
export default {
    data () {
        return {
            home,
            personCircle, 
            business,
            car
        }
    },
    components: {
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonLabel,
        IonIcon
    }
}
</script>