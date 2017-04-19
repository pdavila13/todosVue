<template>
    <div>
        <form novalidate>
            <md-input-container>
                <md-icon>remove_from_queue</md-icon>
                <label>Cordova</label>
                <md-input v-model="cordova" disabled></md-input>
            </md-input-container>

            <md-input-container>
                <md-icon>input</md-icon>
                <label>Model</label>
                <md-input v-model="model" disabled></md-input>
            </md-input-container>

            <md-input-container>
                <md-icon>android</md-icon>
                <label>Platform</label>
                <md-input v-model="platform" disabled></md-input>
            </md-input-container>

            <md-input-container>
                <md-icon>info</md-icon>
                <label>Uuid</label>
                <md-input v-model="uuid" disabled></md-input>
            </md-input-container>

            <md-input-container>
                <md-icon>system_update_at</md-icon>
                <label>Version</label>
                <md-input v-model="version" disabled></md-input>
            </md-input-container>

            <md-input-container>
                <md-icon>check_circle</md-icon>
                <label>isVirtual</label>
                <md-input v-model="isVirtual" disabled></md-input>
            </md-input-container>

            <md-input-container>
                <md-icon>developer_mode</md-icon>
                <label>serial</label>
                <md-input v-model="serial" disabled></md-input>
            </md-input-container>
        </form>
    </div>
</template>
<style>
</style>
<script>
export default{
  data () {
    return {
      cordova: '',
      model: '',
      platform: '',
      uuid: '',
      version: '',
      manufacturer: '',
      isVirtual: '',
      serial: ''
    }
  },
  created () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  beforeDestroy () {
    document.removeEventListener('deviceready', this.onBeforeDestroy, false)
  },
  methods: {
    onDeviceReady () {
      this.cordova = window.device.cordova
      this.model = window.device.model
      this.platform = window.device.platform
      this.uuid = window.device.uuid
      this.version = window.device.version
      this.manufacturer = window.device.manufacturer
      this.isVirtual = window.device.isVirtual
      this.serial = window.device.serial
    },
    onBeforeDestroy () {
      console.log('Device onBeforeDestroy!')
    }
  }
}
</script>