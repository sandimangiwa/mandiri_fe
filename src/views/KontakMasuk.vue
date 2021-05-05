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

        <div class="col">
          <div class="kontakmasuk p-3">
            <h5 class="kontakmasuk-title">Grafik Pengaduan</h5>
            <!-- <div class="container-fluid kontakmasuk-container  p-4 mt-4"> -->
            <div class="row ">
              <div class="col-3">
                <div class="kontakmasuk-box danger">
                  <span class="">Urgent</span>
                  <h3 class="">232.232</h3>
                </div>
              </div>
              <div class="col-3   ">
                <div class="kontakmasuk-box warning">
                  <span class="">Waiting</span>
                  <h3 class="">232.232</h3>
                </div>
              </div>
              <div class="col-3">
                <div class="kontakmasuk-box dark">
                  <span class="">Spam</span>
                  <h3 class="r">232.232</h3>
                </div>
              </div>
              <!-- </div> -->
            </div>

            <!--Kontak masuk -->
            <div class="container-fluid kontakmasuk-mail bg-white mt-4">
              <!-- button online -->
              <div class="row text-center online-offline">
                <div class="col-3">
                  <button class="btn_ btn-online">
                    <h5>Online</h5>
                  </button>
                </div>
                <div class="col-3">
                  <button class="btn_ btn-offline">
                    <h5>Offline</h5>
                  </button>
                </div>
                <div class="filter ml-auto m-3">
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
                        <b-dropdown-item-button>
                          <b-form-checkbox size="sm">Spam</b-form-checkbox>
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

              <!-- sub title -->
              <div class="sub-title row pt-3 pb-3">
                <div class="col-2">
                  <h6>Nama</h6>
                </div>
                <div class="col-5">
                  <h6>Isi Pesan</h6>
                </div>
                <div class="col-2">
                  <h6>Jam</h6>
                </div>
                <div class="col-1">
                  <h6>Status</h6>
                </div>
                <div class="col-1">
                  <h6>Progres</h6>
                </div>
              </div>

              <!-- isi Pesan -->
              <router-link class="text-decoration-none" to="/ChatCustomer">
                <div class="pesan row pt-3 ">
                  <div class="col-2">
                    <h6 class="nama-customer">Sandi Mangiwa Pongsinaran</h6>
                  </div>
                  <div class="col-5">
                    <p class="isipesan-customer">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sequi corrupti in, odit deleniti tenetur illo unde dolorum amet natus.</p>
                  </div>
                  <div class="col-2">
                    <p class="time-customer">16/02/2021, 12:00</p>
                  </div>
                  <div class="col-1">
                    <div>
                      <p class="status-caterogy text-danger">Urgent</p>
                    </div>
                    <!-- <div>
                      <p class="status-caterogy text-warning">Waiting</p>
                    </div> -->
                    <!-- <div>
                      <p class="status-caterogy text-dark">Spam</p>
                    </div> -->
                  </div>
                  <div class="col-1">
                    <p class="proses text-info">Pending</p>
                    <!-- <p class="proses ">Selesai</p> -->
                    <!-- <p class="proses text-success">Proses</p> -->
                  </div>
                </div>
              </router-link>

              <!-- isi Pesan -->
              <router-link class="text-decoration-none" to="">
                <div class="pesan row pt-3 ">
                  <div class="col-2">
                    <h6 class="nama-customer">Sandi Mangiwa Pongsinaran</h6>
                  </div>
                  <div class="col-5">
                    <p class="isipesan-customer">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sequi corrupti in, odit deleniti tenetur illo unde dolorum amet natus.</p>
                  </div>
                  <div class="col-2">
                    <p class="time-customer">16/02/2021, 12:00</p>
                  </div>
                  <div class="col-1">
                    <!-- <div>
                      <p class="status-caterogy text-danger">Urgent</p>
                    </div> -->
                    <div>
                      <p class="status-caterogy text-warning">Waiting</p>
                    </div>
                    <!-- <div>
                      <p class="status-caterogy text-dark">Spam</p>
                    </div> -->
                  </div>
                  <div class="col-1">
                    <!-- <p class="proses text-info">Pending</p> -->
                    <p class="proses ">Selesai</p>
                    <!-- <p class="proses text-success">Proses</p> -->
                  </div>
                </div>
              </router-link>
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
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default {
  name: "KontakMasuk",
  components: {
    Header,
    Sidebar,
  },
};
</script>
<style scoped>
@import "../assets/css/kontakmasuk.css";
</style>
