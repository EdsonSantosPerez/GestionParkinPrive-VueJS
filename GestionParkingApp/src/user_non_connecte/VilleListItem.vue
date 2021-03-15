<template>
    <ion-select-option :value="`${ville.id}`">
        {{ ville.city }}
    </ion-select-option>
</template>

<script>
import { IonSelectOption } from "@ionic/vue";
export default {
    props : ["ville"],
    components: {
    IonSelectOption
  }
}
</script>
