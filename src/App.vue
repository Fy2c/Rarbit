<template>
  <v-app>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "@/components/Menu/NavigationBar/NavigationBar.vue";
import Component from "vue-class-component";

@Component({
  name: "App",
  components: { NavigationBar }
})
export default class extends Vue {
  constructor(){
    super();
  }
}
</script>

<style>
.theme--dark.v-application {
  background: #001e1f !important;
}

.v-application .black {
  background-color: rgba(0, 0, 0, 0.7) !important;
  border-color: rgba(0, 0, 0, 0.7) !important;
}

.v-card {
  border: none;
  box-shadow: none !important;
}

.v-ripple__container {
  display: none !important;
}

.sub-menu {
  margin-top: 64px !important;
}

.small-title {
  font-size: middle;
  color: #707070;
}

.sort-dropdown .v-input__slot {
  background: transparent !important;
  border: solid 1px rgb(27, 69, 70);
  border-radius: 6px !important;
  min-height: 36px;
  font-size: 0.85rem !important;
}

.sort-dropdown-menu .v-list {
  border: solid 1px rgb(27, 69, 70);
  background: #001e1f !important;
  color: #ffffff;
  margin-top: 9px;
}

.sort-dropdown-menu .v-list .v-list-item--active {
  color: #58c4c7;
}

.sort-dropdown-menu .v-list-item--active::before {
  opacity: 0 !important;
}

.theme--dark.v-select .v-select__selection--comma {
  color: #bbbbbb !important;
  font-weight: 500 !important;
}

.edit-form .sort-dropdown .v-input__slot .v-label {
  color: #bbbbbb !important;
  font-weight: 500 !important;
  line-height: 18px;
  font-size: 0.85rem !important;
  transform: translateY(0) scale(1);
  word-spacing: normal;
}

.edit-form .v-input .v-label,
.edit-form .v-select-header {
  color: #fff;
  font-size: 19px;
  font-weight: 500;
  height: 25px;
  transform: translateY(-18px) scale(1);
  word-spacing: 4px;
}

.edit-form .v-input input {
  margin-top: 13px;
}

.edit-form .v-textarea textarea {
  margin-top: 14px;
}

.v-btn__content {
  font-weight: normal;
  letter-spacing: 0 !important;
}

.v-btn.nav-active .v-btn__content {
  font-weight: 500 !important;
}

.theme--dark.v-toolbar.v-sheet {
  background-color: #001e1f !important;
}

.theme--dark.v-input input,
.theme--dark.v-input textarea {
  font-size: 0.85rem !important;
}

.custom-dropzone .dz-preview {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 1;
}

.custom-dropzone .dz-preview .dz-image {
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.custom-dropzone .dz-preview .dz-image img {
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease, -webkit-filter 0.3s;
  transition: filter 0.3s, transform 0.3s ease;
  transition: filter 0.3s, transform 0.3s ease, -webkit-filter 0.3s;
}

.custom-dropzone .dz-preview .dz-details,
.custom-dropzone .dz-error-mark,
.custom-dropzone .dz-success-mark,
.custom-dropzone .dz-progress {
  display: none !important;
}

::selection {
  background-color: #f1c40f !important;
  /* text-shadow: none; */
}
</style>
