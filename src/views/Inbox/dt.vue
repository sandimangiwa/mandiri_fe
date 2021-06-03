<template>
  <div class="kontakmasuk border border-0" style="border-radius:0">
    <!--Kontak masuk -->
    <div class="container-fluid kontakmasuk-mail bg-white">
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
                  <b-form-checkbox-group v-model="filtersOn">
                    <div class="status">
                      <h6 class="small text-secondary">Status</h6>
                      <b-form-checkbox size="sm" aria-describedby="Status" :value="{ name: 'status', value: 'urgent' }">Urgent</b-form-checkbox>
                      <b-form-checkbox size="sm" aria-describedby="Status" :value="{ name: 'status', value: 'waiting' }">Waiting</b-form-checkbox>
                    </div>
                    <b-dropdown-divider></b-dropdown-divider>

                    <div class="progres">
                      <h6 class="small text-secondary">Progres</h6>
                      <b-form-checkbox size="sm" :value="{ name: 'progress', value: 'pending' }">Panding</b-form-checkbox>
                      <b-form-checkbox size="sm" :value="{ name: 'progress', value: 'progress' }">Progress</b-form-checkbox>
                      <b-form-checkbox size="sm" :value="{ name: 'progress', value: 'selesai' }">Selesai</b-form-checkbox>
                    </div>
                  </b-form-checkbox-group>
                  <hr />
                  <b-button block @click="filtersOn = []" style="white-space: nowrap;" variant="outline-info" size="sm"><b-icon icon="sliders" aria-hidden="true"></b-icon> Reset Filters</b-button>
                  <!-- <b-button block @click="filtersOn" style="white-space: nowrap;" variant="outline-info" size="sm"><b-icon icon="sliders" aria-hidden="true"></b-icon> Filters</b-button> -->
                </b-dropdown-form>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="card ">
        <b-table striped responsive fixed :items="items" :fields="fields" :filter="filter" :per-page="perPage" :current-page="currentPage" :filter-included-fields="filterOn" @filtered="onFiltered">
          <template #table-colgroup="scope">
            <col v-for="field in scope.fields" :key="field.key" :style="{ width: ['action', 'status', 'progress', 'action_pengaduan'].includes(field.key) ? '100px' : '300px' }" />
          </template>
          <template #cell(nama)="data">
            <div class="tabel-response ">
              <router-link :to="'/ChatCustomer/' + data.item.user_id" class="text-decoration-none">
                <h6 class="text-capitalize text-dark">{{ data.item.nama }}</h6>
              </router-link>
            </div>
          </template>

          <template #cell(isi_pengaduan)="data">
            <!-- <router-link :to="'/ChatCustomer/' + data.item.user_id" class="text-decoration-none"> -->
            <div class="tabel-response text-dark">
              {{ data.item.isi_pengaduan }}
            </div>
            <!-- </router-link> -->
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
          <template #cell(action_pengaduan)="data">
            <div class="d-flex" :style="{ justifyContent: 'space-evenly' }">
              <div class="btn btn-small btn-primary btn-sm mx-1" @click="openIsiPengadua(data.item)" v-b-tooltip.hover title="Lihat Pengaduan">
                <b-icon icon="journal-text" aria-hidden="true"></b-icon>
              </div>
            </div>
          </template>
        </b-table>
      </div>

      <!-- pagination -->
      <div class="p-3 ">
        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="right" variant="danger" class="customPagination" pills> </b-pagination>
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

      <!-- modal data Pengaduan -->
      <b-modal v-model="isOpenPengaduan" title="Isi Pengaduan" hide-footer centered>
        <textarea class="form-control" type="text" :placeholder="input.isi_pengaduan" aria-label="readonly input example" readonly />
        <div class="d-flex justify-content-end mt-3">
          <b-button size="sm" variant="primary" @click="isOpenPengaduan = !isOpenPengaduan">Ok</b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    tableData: Array,
    tableHeader: Array,
  },
  data() {
    return {
      isOpen: false,
      isOpenPengaduan: false,
      selected: null,
      perPage: 10,
      pageOptions: [10, 20, 30, 50, 100],
      row: null,
      currentPage: 1,
      input: {},
      filter: null,
      filterOn: [],
      filtersOn: [],
      totalRows: 1,
      items: this.tableData,
      fields: this.tableHeader,
    };
  },
  watch: {
    tableData(value) {
      this.items = value;
      this.totalRows = value.length;
    },
    filtersOn: {
      handler: function(val) {
        this.items = this.$props.tableData;
        if (val && val.length > 0) {
          val.map((item) => {
            if (item) {
              this.items = this.items.filter((data) => data[item.name] == item.value);
            }
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions(["updateDataInbox"]),
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
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
    openIsiPengadua(pengaduan) {
      this.input = pengaduan;
      this.isOpenPengaduan = true;
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
