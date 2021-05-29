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

        <div class="col-lg-10">
          <div class="kontakmasuk p-3">
            <h5 class="kontakmasuk-title">Kontak Masuk</h5>

            <!-- Kategori Pendauan -->
            <div class="container-fluid  kontakmasuk-mail bg-white mt-4 pt-3 pb-4">
              <h6 class="text-secondary">Pilih kategori pengaduan</h6>
              <!-- <b-form-group class="col-6"> -->
              <b-form-select class="" size="md" v-model="filter" :options="options" value-field="item" text-field="name" placeholder="Pilih kategori pengaduan . . .">
                <template #first>
                  <b-form-select-option :value="null">-- none --</b-form-select-option>
                </template>
              </b-form-select>
              <!-- </b-form-group> -->
            </div>

            <!--Kontak masuk -->
            <div class="container-fluid kontakmasuk-mail bg-white mt-4">
              <!-- Filter -->
              <div class="text-center online-offline">
                <div class="d-flex justify-content-between">
                  <b-form-group class="m-3">
                    <b-form-select v-model="perPage" :options="pageOptions" size="sm"></b-form-select>
                  </b-form-group>

                  <div class="filter  m-3 bd-highlight d-flex">
                    <!-- Search -->
                    <label class="d-inline-flex align-items-center mr-3">
                      Search:
                      <b-form-input v-model="filter" type="search" placeholder="Search..." class=" form-control form-control-sm ml-2"></b-form-input>
                    </label>
                    <!-- End search -->
                    <div>
                      <b-dropdown variant="none" no-caret right>
                        <template #button-content>
                          <b-icon v-b-tooltip.hover="'Filter'" icon="sliders" aria-hidden="true"></b-icon>
                        </template>

                        <b-dropdown-form>
                          <b-form-checkbox-group v-model="filterOn">
                            <div class="status">
                              <h6 class="small text-secondary">Status</h6>
                              <b-form-checkbox size="sm" aria-describedby="Status" value="urgent">Urgent</b-form-checkbox>
                              <b-form-checkbox size="sm" aria-describedby="Status" value="waiting">Waiting</b-form-checkbox>
                            </div>
                            <b-dropdown-divider></b-dropdown-divider>

                            <div class="progres">
                              <h6 class="small text-secondary">Progres</h6>
                              <b-form-checkbox size="sm" value="panding">Panding</b-form-checkbox>
                              <b-form-checkbox size="sm" value="proses">Proses</b-form-checkbox>
                              <b-form-checkbox size="sm" value="selesai">Selesai</b-form-checkbox>
                            </div>
                          </b-form-checkbox-group>
                          <hr />
                          {{ filterOn }}
                          <b-button block @click="filterOn = []" style="white-space: nowrap;" variant="outline-info" size="sm"><b-icon icon="sliders" aria-hidden="true"></b-icon> Reset Filters</b-button>
                        </b-dropdown-form>
                      </b-dropdown>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Table -->
              <div class="card ">
                <b-table responsive fixed :items="items" :fields="fields" :filter="filter" :per-page="perPage" :current-page="currentPage" :filter-included-fields="filterOn" @filtered="onFiltered">
                  <template #table-colgroup="scope">
                    <col v-for="field in scope.fields" :key="field.key" :style="{ width: ['action', 'status', 'progress'].includes(field.key) ? '100px' : '300px' }" />
                  </template>
                  <template #cell(nama)="data">
                    <div class="tabel-response">
                      <h6 class="text-capitalize">{{ data.item.nama }}</h6>
                    </div>
                  </template>
                  <template #cell(isi_pengaduan)="data">
                    <div class="tabel-response">
                      {{ data.item.isi_pengaduan }}
                    </div>
                  </template>
                  <template #cell(status)="data">
                    <div v-if="data.item.status == 'urgent'" class="d-inline-flex p-1 rounded text-white danger">
                      <small>{{ data.item.status }}</small>
                    </div>
                    <div v-if="data.item.status == 'waiting'" class="d-inline-flex p-1 rounded text-white warning">
                      <small>{{ data.item.status }}</small>
                    </div>
                    <div v-if="data.item.status == 'selesai'" class="d-inline-flex p-1 rounded text-white bg-info">
                      <small>{{ data.item.status }}</small>
                    </div>
                  </template>
                  <template #cell(progress)="data">
                    <div v-if="data.item.progress == 'pending'" class="d-inline-flex p-1 rounded text-white danger">
                      <small>{{ data.item.progress }}</small>
                    </div>
                    <div v-if="data.item.progress == 'progress'" class="d-inline-flex p-1 rounded text-white warning">
                      <small>{{ data.item.progress }}</small>
                    </div>
                    <div v-if="data.item.progress == 'selesai'" class="d-inline-flex p-1 rounded text-white bg-info">
                      <small>{{ data.item.progress }}</small>
                    </div>
                  </template>

                  <template #cell(action)="data">
                    <div class="d-flex" :style="{ justifyContent: 'space-evenly' }">
                      <div class="btn btn-small btn-primary btn-sm mx-1" @click="togelOpen(data.item)" v-b-tooltip.hover title="Edit Progres">
                        <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                      </div>
                    </div>
                  </template>
                </b-table>
              </div>

              <!-- pagination -->
              <div class="p-3 ">
                <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="right" variant="danger" class="customPagination" pills> </b-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal Edit -->
    <b-modal v-model="isOpen" title="Edit Progres" hide-footer centered>
      <b-form @submit.prevent="save">
        <b-form-select v-model="input.progress" :options="['pending', 'progress', 'selesai']" required></b-form-select>
        <div class="d-flex justify-content-end mt-3">
          <b-button variant="outline-secondary mr-2" @click="isOpen = !isOpen">Batal</b-button>
          <b-button variant="primary" type="submit">Edit</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { mapActions, mapState } from "vuex";
export default {
  name: "KontakMasuk",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      isOpen: false,
      selected: null,
      perPage: 10,
      pageOptions: [10, 20, 30, 50, 100],
      row: null,
      currentPage: 1,
      input: {},
      filter: null,
      filterOn: [],
      options: [
        { item: "online", name: "Pengaduan Online" },
        { item: "offline", name: "Pengaduan Offline" },
      ],
      fields: [
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
      date: "sandimangiwamangiwa",
    };
  },

  mounted() {
    this.retrieveDataInbox();
  },
  computed: {
    ...mapState(["data"]),
    items: function() {
      console.log(this.data?.inbox);
      return this.data?.inbox;
    },
    totalRows: {
      // getter
      get: function() {
        if (this.data) {
          if (this.row) {
            return this.row;
          }
          return this.data?.inbox.length;
        }
        return 1;
      },

      // setter
      set: function(value) {
        this.row = value;
        console.log(value);
      },
    },
  },

  methods: {
    ...mapActions(["retrieveDataInbox", "updateDataInbox"]),
    save() {
      // console.log();
      const data = {
        user_id: parseInt(this.input.user_id),
        progress: this.input.progress,
      };
      console.log(data);
      this.updateDataInbox(data);
      this.isOpen = false;
    },
    togelOpen(input) {
      this.input = input;
      console.log(input);

      this.isOpen = true;
    },

    onFiltered(filteredItems) {
      console.log("tes", filteredItems);
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
<style scoped>
.tabel-response {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card {
  border: none;
  overflow-x: hidden;
}
</style>
