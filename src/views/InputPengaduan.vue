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
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="name">Nama Lengkap</label>
                      <input type="text" class="form-control" id="name" placeholder="Nama Lengkap . . ." />
                    </div>
                    <div class="form-group">
                      <label for="number">Nomor Handphone</label>
                      <input type="number" class="form-control" id="number" placeholder="Nomor Handphone . . ." />
                    </div>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" id="email" placeholder="Email. . ." />
                    </div>
                    <div class="form-group">
                      <label for="inputState">Kategori Pengaduan</label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="ktp">Alamat Lengkap KTP</label>
                      <input type="text" class="form-control" id="ktp" placeholder="Alamat Lengkap KTP . . ." />
                    </div>
                    <div class="form-group">
                      <label for="sekarang">Alamat Lengkap Sekarang </label>
                      <input type="text" class="form-control" id="sekarang" placeholder="Alamat Lengkap Sekarang  . . ." />
                    </div>
                    <div class="form-group">
                      <label for="isi">Isi Pengaduan</label>
                      <textarea class="form-control" id="isi" placeholder="Isi Pengaduan . . ."></textarea>
                    </div>
                  </div>
                </div>
                <button type="button" class="InputPengaduan-btn save">SAVE</button>
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
export default {
  name: "InputPengaduan",
  components: {
    Header,
    Sidebar,
  },
};
</script>
<style scoped>
@import "../assets/css/inputpengaduan.css";
</style>
