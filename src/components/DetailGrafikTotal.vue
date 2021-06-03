<template>
  <div>
    <!-- grafik -->
    <!-- {{ chartDetile }} -->

    <!-- {{ xdate }} -->
    <div class="container-fluid InputPengaduan-container bg-white p-4 mt-4">
      <h6 class="grafik-title">Total Pengaduan</h6>
      <figure class="highcharts-figure">
        <div id="container-fluid"></div>
        <div class="highcharts-description d-flex justify-content-center"></div>
      </figure>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
Exporting(Highcharts);

export default {
  name: "DetileGrafikTotal",

  data() {
    return {
      xCategories: [],
    };
  },
  mounted() {
    this.retrieveDataGrafik();
    this.setChart();
  },
  computed: {
    ...mapState(["data"]),
    chartDetile: function() {
      console.log(this.data?.grafik);
      return this.data?.grafik;
    },
    xdate: function() {
      // const xdata = [];
      if (this.data?.grafik) {
        const xdata = this.data?.grafik.map((date) => {
          const new_date = new Date(date.create_date).toLocaleDateString();
          return new_date;
        });
        return xdata;
      }
      return 1;
    },
  },
  methods: {
    ...mapActions(["retrieveDataGrafik"]),
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },

    setChart() {
      Highcharts.chart("container-fluid", {
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
          categories: this.xdate,
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
            name: "Total Pengaduan",
            data: [34.8, 43.0, 0, 41.4, 64.9, 72.4],

            color: "#343a40",
            accessibility: {
              description: "This is the most used screen reader in 2019",
            },
          },

          //   {
          //     name: "Waiting",
          //     data: [6.1, 6.8, 5.3, 27.5, 6.0, 5.5],

          //     dashStyle: "ShortDot",
          //     color: "#ffc107",
          //   },
          //   {
          //     name: "Selesai",
          //     data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
          //     dashStyle: "ShortDash",
          //     color: "#17a2b8",
          //   },
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
                  categories: this.xCategories,
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
  },
};
</script>

<style></style>
