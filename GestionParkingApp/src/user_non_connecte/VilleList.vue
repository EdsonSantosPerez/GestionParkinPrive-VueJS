<template>
    <ion-select>

        <ville-list-item  v-for="ville in villes" v-bind:key="ville.id" :ville="ville">
        </ville-list-item>

    </ion-select>
</template>

<script>
import { IonSelect } from "@ionic/vue";
import VilleListItem from "./VilleListItem.vue"

export default {
    props : ["villes"],
    components: {
        IonSelect,
        VilleListItem
    }
}
</script>
