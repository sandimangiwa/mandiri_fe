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

        <div class="col-lg-10">
          <div class="kontakmasuk p-3">
            <h5 class="kontakmasuk-title">Kontak Masuk</h5>

            <!-- Kategori Pendauan -->
            <div class="container-fluid  kontakmasuk-mail bg-white mt-4 pt-3 pb-4">
              <h6 class="text-secondary">Pilih kategori pengaduan</h6>
              <b-form-select size="md" v-model="selected" :options="options" value-field="item" text-field="name">
                <template #first>
                  <b-form-select-option :value="null" disabled>-- Please select an option --</b-form-select-option>
                </template>
              </b-form-select>
            </div>

            <!--Kontak masuk -->
            <div class="container-fluid kontakmasuk-mail bg-white mt-4">
              <div class="row text-center online-offline">
                <div class="filter ml-auto m-3 d-flex">
                  <!-- Search -->
                  <label class="d-inline-flex align-items-center mr-3">
                    Search:
                    <b-form-input type="search" placeholder="Search..." class=" form-control form-control-sm ml-2"></b-form-input>
                  </label>
                  <!-- End search -->
                  <div>
                    <b-dropdown variant="none" no-caret right>
                      <template #button-content>
                        <b-icon icon="sort-down" aria-hidden="true"></b-icon>
                      </template>

                      <!-- Status -->
                      <b-dropdown-group header="Status" class="small">
                        <b-dropdown-item-button>
                          <b-form-checkbox size="sm">Urgent</b-form-checkbox>
                        </b-dropdown-item-button>

                        <b-dropdown-item-button>
                          <b-form-checkbox size="sm">Waiting</b-form-checkbox>
                        </b-dropdown-item-button>
                      </b-dropdown-group>
                      <b-dropdown-divider></b-dropdown-divider>

                      <!-- Prgogres -->
                      <b-dropdown-group header="Progres" class="small">
                        <b-dropdown-item-button>
                          <b-form-checkbox size="sm">Panding</b-form-checkbox>
                        </b-dropdown-item-button>
                        <b-dropdown-item-button>
                          <b-form-checkbox size="sm">Proses</b-form-checkbox>
                        </b-dropdown-item-button>
                        <b-dropdown-item-button>
                          <b-form-checkbox size="sm">Selesai</b-form-checkbox>
                        </b-dropdown-item-button>
                      </b-dropdown-group>
                      <b-dropdown-divider></b-dropdown-divider>
                      <b-dropdown-item-button variant="info">
                        <b-icon icon="bootstrap-reboot" aria-hidden="true"></b-icon>
                        Clear
                      </b-dropdown-item-button>
                    </b-dropdown>
                  </div>
                </div>
              </div>

              <!-- Table -->
              <div class="card ">
                <b-table responsive fixed :items="items" :fields="fields">
                  <template #table-colgroup="scope">
                    <col v-for="field in scope.fields" :key="field.key" :style="{ width: ['action', 'status', 'progres'].includes(field.key) ? '100px' : '300px' }" />
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
                    <div v-if="data.item.status == 'Urgent'" class="d-inline-flex p-1 rounded text-white danger">
                      <small>{{ data.item.status }}</small>
                    </div>
                    <div v-if="data.item.status == 'Waiting'" class="d-inline-flex p-1 rounded text-white warning">
                      <small>{{ data.item.status }}</small>
                    </div>
                    <div v-if="data.item.status == 'Selesai'" class="d-inline-flex p-1 rounded text-white bg-info">
                      <small>{{ data.item.status }}</small>
                    </div>
                  </template>
                  <template #cell(progres)="data">
                    <div v-if="data.item.progres == 'Pending'" class="d-inline-flex p-1 rounded text-white danger">
                      <small>{{ data.item.progres }}</small>
                    </div>
                    <div v-if="data.item.progres == 'Proses'" class="d-inline-flex p-1 rounded text-white warning">
                      <small>{{ data.item.progres }}</small>
                    </div>
                    <div v-if="data.item.progres == 'Selesai'" class="d-inline-flex p-1 rounded text-white bg-info">
                      <small>{{ data.item.progres }}</small>
                    </div>
                  </template>

                  <template #cell(action)="data">
                    <div class="d-flex" :style="{ justifyContent: 'space-evenly' }">
                      <div class="btn btn-primary btn-sm mx-1" @click="togelOpen(data.item)" v-b-tooltip.hover title="Edit Progres">
                        <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                      </div>
                    </div>
                  </template>
                </b-table>
              </div>

              <!-- load -->
              <div class="d-flex justify-content-center m-3 ">
                <nav aria-label="Page navigation">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal Edit -->
    <b-modal v-model="isOpen" title="Edit Progres" hide-footer centered>
      <b-form @submit.prevent="save">
        <b-form-select v-model="input.progres" :options="['Pending', 'Proses', 'Selesai']" required></b-form-select>
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
// import axios from "axios";
import axios from "@/axios";
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
      input: {},
      options: [
        { item: "onlie", name: "Pengaduan Online" },
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
          key: "telp",
          label: "Nomor Telfon",
          sortable: true,
        },
        {
          key: "email",
          sortable: true,
        },
        {
          key: "alamat_now",
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
          key: "progres",
          sortable: true,
        },
        {
          key: "action",
          sortable: true,
        },
      ],
      items: [],
      date: "sandimangiwamangiwa",
    };
  },

  created() {
    this.gettoday();
    this.getKontakMasuk();
  },
  methods: {
    save() {
      // console.log();
      const data = {
        id: parseInt(this.input.id),
        progres: this.input.progres,
      };
      console.log(data);
      axios
        .put("", data)
        .then((response) => {
          console.log(response);
          // this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.isOpen = false;
    },
    togelOpen(input) {
      this.input = input;
      console.log(input);

      this.isOpen = true;
    },
    gettoday() {
      let today = new Date();
      this.date = today;
    },
    getKontakMasuk() {
      axios
        .get("")
        .then((response) => {
          this.items = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
