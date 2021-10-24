<template>
  <v-app class="custom__bg">
    <div class="d-flex align-center justify-center mt-8 mb-8">
      <h4 class="white--text">Users Management</h4>
    </div>
    <v-container>
      <v-row>
        <v-row class="" style="padding-left: 20px; padding-right: 20px;">
          <v-col cols="12" md="6">
            <v-card max-height="500" class="custom__scroll" color="secondary">
              <v-card-text>
                <div>
                  <p class="third_header icon-text white--text">
                    Normal Users
                  </p>
                </div>
                <v-list color="secondary">
                  <v-list-item
                    class="pa-0"
                    v-for="item in items"
                    :key="item.name"
                  >
                    <v-list-item-avatar>
                      <v-avatar color="red">
                        <img src="../assets/captain.jpeg" alt="alt" />
                      </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title class="custom__size white--text">
                      {{ item.name }}
                    </v-list-item-title>

                    <v-list-item-title class="pa-0 ma-0 custom__report">
                      <span>{{ item.rnumber }}</span> Reported
                    </v-list-item-title>

                    <v-btn
                      small
                      elevation=""
                      color="red"
                      class="mx-2 white--text"
                      >suspend</v-btn
                    >
                    <v-btn
                      small
                      elevation=""
                      color="#707070"
                      class="white--text"
                      >Block</v-btn
                    >
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card max-height="500" class="custom__scroll" color="secondary">
              <v-card-text>
                <div>
                  <p class="third_header icon-text white--text">
                    Content Creators
                  </p>
                </div>
                <v-list class="" color="secondary">
                  <v-list-item
                    class="pa-0"
                    v-for="item in items"
                    :key="item.name"
                  >
                    <v-list-item-avatar>
                      <v-avatar color="red">
                        <img src="../assets/captain.jpeg" alt="alt" />
                      </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title class="custom__size white--text">
                      {{ item.name }}
                    </v-list-item-title>

                    <v-list-item-title class="pa-0 ma-0 custom__report">
                      <span>{{ item.rnumber }}</span> Reported
                    </v-list-item-title>

                    <v-btn
                      small
                      elevation=""
                      color="red"
                      class="mx-2 white--text"
                      >suspend</v-btn
                    >
                    <v-btn
                      small
                      elevation=""
                      color="#707070"
                      class="white--text"
                      >Block</v-btn
                    >
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "umar rg",
        color: "red",

        rcolor: "red",
        rnumber: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "Ibrahim",
        color: "red",

        rcolor: "red",
        rnumber: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "usman",
        color: "red",

        rcolor: "red",
        rnumber: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "Ismail",
        color: "red",

        rcolor: "red",
        rnumber: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "John doe",
        color: "red",

        rcolor: "red",
        rnumber: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "shagi",
        color: "red",

        rcolor: "red",
        rnumber: "0",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
    ],
  }),
};
</script>

<style scoped>
.custom__bg {
  background: #2b273f;
}
.second_header {
  color: #576271;
  font-weight: bold;
}
.custom__col {
  color: #21a70c;
}

.custom__report {
  color: #21a70c;
  font-size: 11px;
}
.third_header {
  color: #576271;
  font-weight: 300;
  font-size: 15px;
}
.custom__scroll {
  overflow-x: hidden;
  overflow-y: auto;
}
.third_header {
  color: #576271;
  font-weight: 300;
  font-size: 17px;
}
.second_header {
  color: #576271;
  font-weight: bold;
}
.custom__size {
  font-size: 11px;
}
</style>
