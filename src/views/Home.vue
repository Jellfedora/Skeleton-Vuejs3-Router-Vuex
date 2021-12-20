<template>
  <h1 class="test">Hello Vue 3 + Vite</h1>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  />
  <p>Petit message de Vuex: {{storeState}}</p>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Home',
  setup () {

    const store = useStore()
    const storeState = computed(() => store.getters.getTest())

    return {
      storeState
    }
  }
}
</script>

