<template>
    <div>
        CORDOVA Template
    </div>
</template>

<style></style>

<script>
export default {
  created () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  beforedDestroy () {
    document.removeEventListener('deviceready', this.onBeforeDestroy, false)
  },
  methods: {
    onDeviceReady () {
      console.log('Device ready')
    },
    onBeforeDestroy () {
      console.log('Device before destroy')
    }
  }
}
</script>