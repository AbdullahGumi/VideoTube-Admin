<template>
  <v-app class="custom__bg">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <Adscard />
        </v-col>
        <v-col cols="12" md="6">
          <Postcard />
        </v-col>
        <v-col cols="12" md="12">
          <v-card max-height="600" class="custom__overflow" color="secondary">
            <v-card-text>
              <v-card-subtitle class="pa-0">
                <h5 class="white--text">Videos posted by Admin</h5>
              </v-card-subtitle>
              <v-list v-for="item in videolist" :key="item.title" color="secondary">
                <v-list-item class="pa-0">
                  <v-list-item-icon class="pa-0">
                    <v-sheet
                      rounded
                      color="black"
                      width="50"
                      height="35"
                      class=" d-flex  align-center justify-center "
                    >
                      <v-sheet color="red" width="20" height="19">
                        <v-icon
                          color="white"
                          class="d-flex align-center justify-center"
                          size="20"
                          >mdi-play</v-icon
                        >
                      </v-sheet>
                    </v-sheet>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="custom__size mt-3 white--text">
                      {{ item.title }}
                    </p>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-menu bottom left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                          <v-icon color="white">mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item>
                          <v-list-item-action>
                            <v-btn>
                              Edit
                            </v-btn>
                          </v-list-item-action>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-action>
                            <v-btn>
                              Delete
                            </v-btn>
                          </v-list-item-action>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-list-item-action>
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Adscard from "../components/Ads_card";
import Postcard from "../components/post_card";

export default {
  components: {
    Adscard,
    Postcard
  },
  data: () => ({
    menus: [
      {
        title: "Edit",
      },
      {
        title: "Delete",
      },
    ],
    videolist: [
      {
        title:
          " Learn how to play chess",
        divider: true,
        inset: true,
      },
      {
        title:
          " Learn how to study at home",
      },
      {
        title:
          " learn like a pro",
      },
      {
        title:
          "learn geography",
      },
    ],
  }),
};
</script>

<style scoped>
.custom__bg {
  background: #2b273f;
}
.custom__text {
  color: #707070;
}
.custom__size {
  font-size: 10px;
}
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
