<template>
  <div>
    <Header />
    <div class="container-fluid" style="padding-top:70px">
      <div class="row">
        <div class="sidebar col-lg-2 ">
          <div class="position">
            <Sidebar />
          </div>
        </div>
        <div class="col-lg-10 ">
          <h5 class="kontakmasuk-title pt-4 pl-3">Kontak Masuk</h5>

          <Tabs class="card p-3">
            <TabItem name="Online">
              <DataTable :tableData="tableData" :tableHeader="tableHeader" />
            </TabItem>
            <TabItem name="Offline">
              <DataTable :tableData="tableDataOffline" :tableHeader="tableHeaderOffline" />
            </TabItem>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DataTable from "./dt";

import { mapActions, mapState } from "vuex";
export default {
  name: "KontakMasuk",
  components: {
    Header,
    Sidebar,
    DataTable,
  },
  data() {
    return {
      // offline
      tableHeaderOffline: [
        {
          key: "nama_lengkap",
          sortable: true,
        },
        {
          key: "email",
          sortable: true,
        },
        {
          key: "create_date",
          label: "Tanggal Pengaduan",
          sortable: true,
        },
        {
          key: "no_hp",
          label: "Nomor Telfon",
          sortable: true,
        },
        {
          key: "email",
          sortable: true,
        },
        {
          key: "alamat_ktp",
          label: "Alamat KTP",
          sortable: true,
        },
        {
          key: "alamat_sekarang",
          label: "Alamat Sekarang",
          sortable: true,
        },
        {
          key: "kategori",
          sortable: true,
        },
        {
          key: "isi_pengaduan",
          sortable: true,
        },
        {
          key: "action_pengaduan",
          label: "Action",
          sortable: true,
        },
      ],
      // Online
      tableHeader: [
        {
          key: "nama",
          sortable: true,
        },
        {
          key: "isi_pengaduan",
          sortable: true,
        },
        {
          key: "tgl_masuk",
          label: "Tanggal Pengaduan",
          sortable: true,
        },
        {
          key: "no_telp",
          label: "Nomor Telfon",
          sortable: true,
        },
        {
          key: "email",
          sortable: true,
        },
        {
          key: "alamat",
          label: "Alamat Sekarang",
          sortable: true,
        },
        {
          key: "kategori",

          sortable: true,
        },
        {
          key: "status",

          sortable: true,
        },
        {
          key: "progress",
          sortable: true,
        },
        {
          key: "action",
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.retrieveDataInbox();
    this.retrieveDataInboxOffline();
  },
  computed: {
    ...mapState(["data"]),
    tableData: function() {
      return this.data?.inbox;
    },
    tableDataOffline: function() {
      return this.data?.offline;
    },
  },
  methods: {
    ...mapActions(["retrieveDataInbox", "retrieveDataInboxOffline"]),
  },
};
</script>

<style>
.tabs {
  background-color: #f5f6f8 !important;
  border: none;
}
.tab__pagination {
  border-radius: 20px 20px 0 0 !important;
}
</style>
