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
        <div class="col mt-2 mb-2">
          <div class="InputPengaduan p-3">
            <h5 class="InputPengaduan-title">Input Pengaduan</h5>
            <div class="container-fluid InputPengaduan-container bg-white p-4 mt-4">
              <form @submit.prevent="AddDataOffline">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="name">Nama Lengkap</label>
                      <input v-model="nama_lengkap" type="text" class="form-control" id="name" placeholder="Nama Lengkap . . ." required />
                    </div>
                    <div class="form-group">
                      <label for="number">Nomor Handphone</label>
                      <input v-model="no_telp" type="number" class="form-control" id="number" placeholder="Nomor Handphone . . ." required />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input v-model="email" type="email" class="form-control" id="email" placeholder="Email. . ." required />
                    </div>
                    <div class="form-group">
                      <label for="inputState">Kategori Pengaduan</label>
                      <b-form-select v-model="kategori" :options="kategori_options" required></b-form-select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="ktp">Alamat Lengkap KTP</label>
                      <input v-model="alamat_ktp" type="text" class="form-control" id="ktp" placeholder="Alamat Lengkap KTP . . ." required />
                    </div>
                    <div class="form-group">
                      <label for="sekarang">Alamat Lengkap Sekarang </label>
                      <input v-model="alamat_sekarang" type="text" class="form-control" id="sekarang" placeholder="Alamat Lengkap Sekarang  . . ." required />
                    </div>
                    <div class="form-group">
                      <label for="isi">Isi Pengaduan</label>
                      <textarea v-model="isi_pengaduan" class="form-control" id="isi" placeholder="Isi Pengaduan . . ." required></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" class="InputPengaduan-btn save">SAVE</button>
              </form>
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
import { mapActions } from "vuex";
export default {
  name: "InputPengaduan",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      nama_lengkap: "",
      email: "",
      no_telp: "",
      kategori: "",
      kategori_options: ["kontrak", "aplikasi", "kredit"],
      alamat_ktp: "",
      alamat_sekarang: "",
      isi_pengaduan: "",
    };
  },
  methods: {
    ...mapActions(["addDataPengaduanOffline"]),
    AddDataOffline() {
      const data = {
        nama_lengkap: this.nama_lengkap,
        no_hp: this.no_telp,
        email: this.email,
        kategori: this.kategori,
        alamat_ktp: this.alamat_ktp,
        alamat_sekarang: this.alamat_sekarang,
        isi_pengaduan: this.isi_pengaduan,
      };
      console.log(data);
      this.addDataPengaduanOffline(data);
    },
  },
};
</script>
