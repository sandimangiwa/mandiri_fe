<template>
  <div>
    <Header />
    <div class="container-fluid" style="padding-top:70px">
      <div class="row">
        <div class="sidebar col-lg-2">
          <div class="position">
            <Sidebar />
          </div>
        </div>
        <div class="col ">
          <div class="container-fluid dashboard p-3">
            <h5 class="dashboard-title ">Dashboard</h5>
            <!-- <div class=" mt-3"> -->
            <div class="row mt-3">
              <div class="col-8">
                <div class="dashboard-container bg-white p-4 ">
                  <div class="row text-center">
                    <div class="col">
                      <span class="text-danger">Urgent</span>
                      <h3 class="text-danger">232.232</h3>
                    </div>
                    <div class="col dashboard-center text-warning ">
                      <span class="">Waiting</span>
                      <h3 class="">232.232</h3>
                    </div>
                    <div class="col text-dark">
                      <span class="">Spam</span>
                      <h3 class="r">232.232</h3>
                    </div>
                  </div>
                </div>

                <!-- chart -->
                <div class="dashboard-container bg-white p-4 mt-4">
                  <figure class="highcharts-figure">
                    <div id="container"></div>
                    <div class="highcharts-description d-flex justify-content-center"></div>
                  </figure>
                </div>
              </div>
              <div class="col-4">
                <div class="notification-new bg-white p-3">
                  <h6 class="notification-title">Notification</h6>
                  <div class="notification-detail container-fluid">
                    <router-link to="/ChatCustomer" class="text-decoration-none">
                      <div class="info-user row">
                        <img src="../assets/avatar.png" alt="avatar" class="" width="50" height="50" />
                        <div class="info-user-detail col-10">
                          <div>
                            <span class="name">Joshua tege </span> <br />
                            <p class="isi-chat">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, neque?</p>
                            <p class="time"><b-icon icon="clock-history"></b-icon> 12:12</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="/ChatCustomer" class="text-decoration-none">
                      <div class="info-user row">
                        <img src="../assets/avatar.png" alt="avatar" class="" width="50" height="50" />
                        <div class="info-user-detail col-10">
                          <div>
                            <span class="name">Joshua tege </span> <br />
                            <p class="isi-chat">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, neque?</p>
                            <p class="time"><b-icon icon="clock-history"></b-icon> 12:12</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
Exporting(Highcharts);
export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      chart: 2,
    };
  },
  mounted() {
    Highcharts.chart("container", {
      chart: {
        type: "spline",
      },

      legend: {
        symbolWidth: 40,
      },

      title: {
        text: "Grafik Pengaduan Customer",
      },

      yAxis: {
        title: {
          text: "Total Pengaduan",
        },
        accessibility: {
          description: "Total Pengaduan",
        },
      },

      xAxis: {
        title: {
          text: "Status Pengaduan",
        },
        accessibility: {
          description: "Status Pengaduan Dari December 2010 Sampai September 2019",
        },
        categories: ["December 2010", "May 2012", "January 2014", "July 2015", "October 2017", "September 2019"],
      },

      tooltip: {
        valueSuffix: "%",
      },

      plotOptions: {
        series: {
          point: {
            events: {
              click: function() {
                window.location.href = this.series.options.website;
              },
            },
          },
          cursor: "pointer",
        },
      },

      series: [
        {
          name: "Urgent",
          data: [34.8, 43.0, 51.2, 41.4, 64.9, 72.4],
          website: "https://www.nvaccess.org",
          color: "#dc3545",
          accessibility: {
            description: "This is the most used screen reader in 2019",
          },
        },

        {
          name: "Waiting",
          data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],
          website: "http://www.zoomtext.com/products/zoomtext-magnifierreader",
          dashStyle: "ShortDot",
          color: "#ffc107",
        },
        {
          name: "Selesai",
          data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
          website: "http://www.disabled-world.com/assistivedevices/computer/screen-readers.php",
          dashStyle: "ShortDash",
          color: "#17a2b8",
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 550,
            },
            chartOptions: {
              chart: {
                spacingLeft: 3,
                spacingRight: 3,
              },
              legend: {
                itemWidth: 150,
              },
              xAxis: {
                categories: ["Dec. 2010", "May 2012", "Jan. 2014", "July 2015", "Oct. 2017", "Sep. 2019"],
                title: "",
              },
              yAxis: {
                visible: false,
              },
            },
          },
        ],
      },
    });
  },
};
</script>
