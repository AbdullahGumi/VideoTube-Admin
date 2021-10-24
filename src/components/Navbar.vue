<template>
  <nav>
    <v-app-bar max-height="150" color="primary" prominent app>
      <v-app-bar-nav-icon
        dark
        color="white"
        small
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge content="3" color="red" bordered overlap>
          <v-icon color="grey">mdi-chat</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark app color="primary" width="250">
      <v-layout column align-center>
        <v-flex class="mt-3 mb-4">
          <div>
            <p class="white--text">VideoTube</p>
          </div>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          active-class="border"
          v-for="item in items"
          :key="item.icon"
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          active-class="border"
          v-for="link in services"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon >{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
     

      <template v-slot:append>
        <div class=" d-flex justify-center mb-5 align-center">
          <v-row align="center" justify="center">
            <v-col cols="2" class="px-2 py-0">
              <v-avatar size="40">
                <img src="../assets/captain.jpeg" alt="super admin picture" />
              </v-avatar>
            </v-col>
            <v-col cols="5" class="px-2 py-0">
              <div>
                <v-btn small text to="/super">
                  <p class="mt-4 white--text">Super Admin</p>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    items: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-account-circle", text: "Users", route: "/user" },

      { icon: "fas fa-share-square ", text: "Post", route: "/post" },
    ],
  }),
};
</script>
