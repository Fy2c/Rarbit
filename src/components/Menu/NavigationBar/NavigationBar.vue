<template>
  <div style="position:fixed; width:100%;z-index:100">
    <v-toolbar color="#001e1f" dark flat>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../../assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink hidden-sm-and-down"
          contain
          src="../../../assets/text.png"
          width="60"
        />
      </div>

      <v-toolbar-items flat class="ml-5">
        <v-btn
          v-for="item in filteredNav"
          :key="item.text"
          :to="item.route"
          text
          depressed
          small
          :exact="item.exact"
          exact-active-class="nav-active"
      
          >{{ item.text }}</v-btn
        >
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items>
         <v-menu offset-y v-if="user.isAuthorized">
          <template v-slot:activator="{ on, attrs }"> 
            <v-btn
              style="background-color: transparent;"
              v-bind="attrs"
              v-on="on"
            >
              <span 
                class="my-auto user-text hidden-sm-and-down" 
                style="font-size: 0.9rem; font-weight:400;">
                {{user.name}}
              </span>
              <v-img
                alt="Uesr image"
                class="shrink user-image ml-3 my-auto"
                contain
                :src="user.avatar"
                width="35"
                height="35"
              />
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="logout">
              <v-list-item-title>
                <v-icon medium class="mr-3">$signout</v-icon>
                Logout
              </v-list-item-title>
                
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text depressed small @click="login" v-if="!user.isAuthorized">
          Login
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Auth } from '../../../store/modules/auth';
import { getModule } from 'vuex-module-decorators';

@Component
export default class NavigationBar extends Vue {
  public nav: Array<any> = [
    {
      route: "/",
      text: "Home",
      isAuth: false,
      exact: true
    },
    {
      route: "/my-list",
      text: "My List",
      isAuth: true,
      exact: true
    },
    {
      route: "/manage-shows",
      text: "Upload",
      isAuth: true,
      exact: true
    }
  ];
  get filteredNav() {
    return this.nav.filter(x => x.isAuth? this.user.isAuthorized : true);

  }

  private authModule: any;

  public async created() {
    this.authModule = getModule(Auth, this.$store);
  }

  get user() {
    return { 
            uid: this.authModule?.uid, 
            name: this.authModule?.name, 
            avatar: this.authModule?.avatar,
            isAuthorized: this.authModule.isAuthorized
    };
  }

  public logout(){
    this.authModule.Logout();
  }

  public login(){
    this.authModule.LoginByFaceBook();
  }
}
</script>

<style scoped lang="scss" src="./NavigationBar.scss"></style>
