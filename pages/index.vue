<template>
  <CarList />
</template>

<script lang="ts">
import Vue from "vue";
import CarList from "~/components/CarList.vue";

export default Vue.extend({
  name: "IndexPage",
  components: { CarList },
});
</script>
