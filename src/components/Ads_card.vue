<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-card class="pa-0" v-bind="attrs" v-on="on" color="secondary">
        <v-list class="pa-0" color="secondary">
          <v-list-item class="">
            <v-list-item-icon>
              <v-avatar color="#f7f9fb">
                <v-icon color="#707070">mdi-image-multiple</v-icon>
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="mt-5 custom__text white--text">
                Post promotional Ads/banners here
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
    <v-card>
      <v-card-text>
        <v-card-title class="pt-8">
          <v-row>
            <h6 class="headline">Post Ads</h6>
            <v-spacer></v-spacer>
            <v-btn color="#e39200" class="" icon @click="dialog = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-divider class="mb-4"></v-divider>

        <v-container>
          <v-row>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <span>Type</span>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Select Type of Post"
                  outlined
                  required
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <span>Page</span>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Select page to show the post"
                  outlined
                  required
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <span>Title</span>
                <p>the value will be text ad</p>

                <v-text-field outlined label="Enter Title"> </v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-icon class="pa-0">
                      <v-file-input
                          accept="image/*"
                          label=""
                        prepend-icon="mdi-video-plus"
                          color="white"
                          hide-input
                        ></v-file-input>
                    </v-list-item-icon>
                    <v-list-item-title class="pa-0 custom__size">
                      select a video file
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-icon>
                        <v-file-input
                          accept="image/*"
                          label=""
                        prepend-icon="mdi-image-multiple"
                          color="white"
                          hide-input
                        ></v-file-input>
                    </v-list-item-icon>
                    <v-list-item-title class="custom__size">
                      select image file
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="ma-0">
        <v-spacer></v-spacer>

        <v-btn color="secondary" class="white--text" @click="dialog = false">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
<style scoped>
.custom__size {
  font-size: 11px;
}
.mdi-video-plus::before {
  color: white;
}

</style>
