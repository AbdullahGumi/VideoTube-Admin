<template>
  <v-app class="custom__bg">
    <v-container >
      <v-row>
        <v-col cols="12" md="4">
          <v-card color="secondary">
            <v-card-text>
              <v-row class="">
                <v-col cols="2" class="">
                  <v-avatar color="#fbc200">
                    <v-icon color="white">
                      mdi-message-text
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="5" class="">
                  <div class="ml-4 mt-1">
                    <p class="mb-0 card_con">8,212</p>
                    <p style="color: #808080">Comments</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card color="secondary">
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  <v-avatar color="#e53030">
                    <v-icon color="white">
                      mdi-file-video
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="5" class="">
                  <div class="ml-4 mt-1">
                    <p class="mb-0 card_con">3,892</p>
                    <p style="color: #808080">Posted</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card color="secondary">
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  <v-avatar color="#e530c1">
                    <v-icon color="white">
                      mdi-account-group
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="5" class="">
                  <div class="ml-4 mt-1">
                    <p class="mb-0 card_con">2,839</p>
                    <p style="color: #808080">Users</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="8">
          <v-card color="secondary">
            <v-card-text class="pa-7">
              <v-row>
                <div>
                  <p class="mb-0 h2-text card_con">Revenue</p>
                  <p class="third_header"></p>
                </div>
                <v-spacer></v-spacer>
                <div>
                  <span>
                    <v-icon color="white">mdi-refresh</v-icon>
                    <v-icon color="white">mdi-dots-vertical</v-icon>
                  </span>
                </div>
              </v-row>
              <div>
                <v-sparkline
                  :fill="fill"
                  color="white"
                  height="190"
                  :gradient="gradient"
                  :line-width="width"
                  :padding="padding"
                  :smooth="radius || false"
                  :value="value"
                  :labels="labels"
                  auto-draw
                >
                </v-sparkline>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card color="secondary">
            <v-card-text class="pa-7">
              <p class="mb-0 h2-text card_con">Wallet</p>
              <p class="third_header"></p>
              <h3 class="white--text" style="font-weight: 700; font-size: 32px; padding-top: 10px;">$12,000</h3>
              <p style="color: #808080; padding-top: 5px;">balance</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="custom__overflow " max-height="400" color="secondary">
            <v-card-text>
              <div>
                <p class=" card_con">Contents waiting for approval</p>
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

                  <v-list-item-title class="custom__size white--text">
                    {{ item.description }}
                  </v-list-item-title>

                  <v-btn
                    small
                    elevation=""
                    color="transparent"
                    class="mx-2 green--text"
                    >Approve</v-btn
                  >
                  <v-btn small elevation="" color="transparent" class="white--text"
                    >Decline</v-btn
                  >
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card max-height="400" color="secondary">
            <v-card-text class="pa-4">
              <div class="ml-3">
                <p class="mb-0 card_con">Stats</p>
              </div>
              <v-divider class=""></v-divider>

              <v-list color="secondary">
                <v-list-item v-for="item in stats" :key="item.name">
                  <v-list-item-icon>
                    <v-icon color="#21a70c">mdi-chart-bar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="white--text">
                      {{ item.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-list-item-icon>
                    <span class="custom__col">
                      <v-icon color="#21a70c">mdi-arrow-up</v-icon>
                      {{ item.percent }}
                    </span>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
const gradients = [
  ["#f69227"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "Home",
  components: {},
  data() {
    return {
      fill: false ,
      gradients,
      padding: 0,
      radius: 25,
      value: [2, 9, 5, 10, 15, 8, 5, 16, 17],
      labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      width: 2,
      drawer: true,
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
      columnChartData: [
        ["Days", "Times"],
        ["Monday", 45],
        ["Tuesday", 60],
        ["Wednesday", 30],
        ["Thursday", 30],
        ["Friday", 55],
        ["Saturday", 0],
        ["Sunday", 0],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
      stats: [
        {
          name: " App download",
          percent: "50%",
        },
        {
          name: " Users satisfaction with the app",
          percent: "70%",
        },
        {
          name: " Users interactions with the app",
          percent: "30%",
        },
        {
          name: " Video upload",
          percent: "80%",
        },
      ],
      items: [
        {
          name: "angular",
          description: "video description"

        },
        {
          name: "groot",
          description: "video description"

        },
        {
          name: "Black Adam",
          description: "video description"

        },
        {
          name: "AOT",
          description: "video description"

        },
        {
          name: "Dolex",
          description: "video description"

        },
      ],
    };
  },
  
};
</script>

<style scoped>
.second_header {
  color: #576271;
  font-weight: bold;
}
.custom__size {
  font-size: 11px;
}
.custom__col {
  color: #21a70c;
}
.third_header {
  color: #e4e4e4;
  font-weight: 300;
  font-size: 17px;
}
.custom__bg {
  background: #2b273f;
}
.card_con {
  font-weight: bold;
  color: white;
}
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
