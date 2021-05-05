<template>
  <div>
    <Header />
    <div class="container-fluid" style="padding-top:70px">
      <div class="row">
        <div class="sidebar col-lg-2">
          <Sidebar />
        </div>
        <div class="col">
          <div class="chat mt-4 mb-4">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-8">
                  <div class="chat bg-white p-3 ">
                    <!-- chat  -->
                    <div class="img d-flex">
                      <img src="../assets/avatar.png" alt="avarat" class="avatar img-fluid" height="50" width="50" />
                      <h6 class="name-user pt-3 ml-3">Sandi Mangiwa Pongsinaran</h6>
                    </div>
                    <hr />

                    <!-- isi Chat -->
                    <div class="isi-chat">
                      <div class="customer">
                        <p class="isi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, enim.</p>
                        <span class="time">12:12</span>
                      </div>
                      <div class="customer">
                        <p class="isi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, enim.</p>
                        <span class="time">12:12</span>
                      </div>
                      <div class="admin">
                        <p class="isi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet? Dicta eum magnam earum, odio quaerat inventore similique itaque adipisci.</p>
                        <span class="time">12:12</span>
                      </div>
                      <div class="admin">
                        <p class="isi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet? Dicta eum magnam earum, odio quaerat inventore similique itaque adipisci.</p>
                        <span class="time">12:12</span>
                      </div>
                      <div class="admin">
                        <p class="isi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, amet? Dicta eum magnam earum, odio quaerat inventore similique itaque adipisci.</p>
                        <span class="time">12:12</span>
                      </div>
                      <div class="customer">
                        <p class="isi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, enim.</p>
                        <span class="time">12:12</span>
                      </div>
                      <div class="customer">
                        <p class="isi-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, enim.</p>
                        <span class="time">12:12</span>
                      </div>
                    </div>

                    <!-- input text -->
                    <div class="container-fluid input-chat mt-3">
                      <div class="row">
                        <div class="input-images col-1">
                          <button class="btn">
                            <b-icon icon="image"></b-icon>
                          </button>
                        </div>
                        <div class="input-text col">
                          <b-form-textarea id="textarea" rows="1" placeholder="Enter something..."></b-form-textarea>
                        </div>
                        <div class="send-text col-1 p-0">
                          <button class="btn m-0">
                            <b-icon icon="cursor-fill"> </b-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4 ">
                  <div class="info-customer bg-white p-3 ">
                    <div class="info-user">
                      <div class="img text-center">
                        <img src="../assets/avatar.png" width="70" height="70" alt="avatar" class="avatar img-fluid" />
                        <h6 class="name-user mt-2">Sandi Mangiwa Pongsinaran</h6>
                        <hr />
                      </div>
                      <div class="detail-user">
                        <h6 class="name-user">Informasi User</h6>
                        <div class="detail">
                          <label for="full-name">Nama Lengkap</label>
                          <h6 id="full-name">Sandi Mangiwa Pongsinaran</h6>
                        </div>
                        <div class="detail">
                          <label for="nomor">Nomor Handphone</label>
                          <h6 id="nomor">0823314134134</h6>
                        </div>
                        <div class="detail">
                          <label for="email">Email</label>
                          <h6 id="email">sandimaniwa@gmail.com</h6>
                        </div>
                        <div class="detail">
                          <label for="ktp">Alamat KTP</label>
                          <h6 id="ktp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsam.</h6>
                        </div>
                        <div class="detail">
                          <label for="now">Alamat Sekarang</label>
                          <h6 id="nowe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti exercitationem nobis incidunt aspernatur ex.</h6>
                        </div>
                        <hr />
                      </div>
                      <div class="category">
                        <label for="category">Kategori Pengaduan</label>
                        <br />
                        <div class="sub-category">
                          <p id="category">Kategori 1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "ChatCustomer",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style>
@import "../assets/css/chat.css";
</style>
