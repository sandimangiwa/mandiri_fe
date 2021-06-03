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
                <div class="col-lg-8">
                  <div class="chat bg-white p-3 ">
                    <!-- chat  -->
                    <div class="img d-flex">
                      <img src="../assets/avatar.png" alt="avarat" class="avatar img-fluid" height="50" width="50" />
                      <h6 class="name-user pt-3 ml-3">Sandi Mangiwa Pongsinaran</h6>
                    </div>
                    <hr />

                    <!-- isi Chat -->
                    <div class="isi-chat" ref="message">
                      <div v-for="message in message" :key="message.id">
                        <div v-if="message.role_id == 1" class="customer">
                          <p class="isi-text ">{{ message.isi_pengaduan }}</p>
                          <p class="time mt-1">{{ message.create_date }}</p>
                        </div>
                        <div v-else class="admin">
                          <p class="isi-text">{{ message.isi_pengaduan }}</p>
                          <p class="mt-1 time">{{ message.create_date }}</p>
                        </div>
                      </div>
                    </div>

                    <!-- input text -->
                    <div class="container-fluid input-chat mt-3">
                      <div class="row">
                        <!-- <div class="input-images col-1">
                          <button class="btn">
                            <b-icon icon="image"></b-icon>
                          </button>
                        </div> -->
                        <div class="input-text col">
                          <b-textarea v-on:keyup.enter="sandChat()" v-model="messages" id="textarea" rows="1" placeholder="Enter something..."></b-textarea>
                        </div>
                        <div class="send-text col-1 p-0">
                          <button @click="sandChat()" class="btn m-0">
                            <b-icon icon="cursor-fill"> </b-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-for="info_user in info_user" :key="info_user.id" class="col-lg-4 ">
                  <div class="info-customer bg-white p-3 ">
                    <div class="info-user">
                      <div class="img text-center">
                        <img src="../assets/avatar.png" width="70" height="70" alt="avatar" class="avatar img-fluid" />
                        <h6 class="name-user mt-2">{{ info_user.nama }}</h6>
                        <hr />
                      </div>
                      <!-- {{ info_user }} -->
                      <!-- info_user -->

                      <div class="detail-user">
                        <h6 class="name-user">Informasi User</h6>
                        <div class="detail">
                          <label for="full-name">Nama Lengkap</label>
                          <h6 id="full-name">{{ info_user.nama }}</h6>
                        </div>
                        <div class="detail">
                          <label for="nomor">Nomor Handphone</label>
                          <h6 id="nomor">{{ info_user.no_telp }}</h6>
                        </div>
                        <div class="detail">
                          <label for="email">Email</label>
                          <h6 id="email">{{ info_user.email }}</h6>
                        </div>
                        <div class="detail">
                          <label for="ktp">Alamat Sekarang</label>
                          <h6 id="ktp">{{ info_user.alamat }}</h6>
                        </div>
                        <!-- <div class="detail">
                          <label for="now">Alamat Sekarang</label>
                          <h6 id="nowe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti exercitationem nobis incidunt aspernatur ex.</h6>
                        </div>
                        <hr /> -->
                      </div>
                      <hr />
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
import { mapActions, mapState } from "vuex";
export default {
  name: "ChatCustomer",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      datas: "",
      messages: "",
    };
  },
  mounted() {
    this.scrollToEnd();
    this.retrieveDataChat();
  },
  computed: {
    ...mapState(["data"]),
    message: function() {
      return this.data?.chat;
    },
    info_user: function() {
      return this.data?.data_user;
    },
  },
  methods: {
    ...mapActions(["retrieveDataChat", "addDataChat"]),
    sandChat() {
      const data = {
        user_id: 1,
        receiver_id: parseInt(this.info_user[0].id),
        isi_pengaduan: this.messages,
      };
      this.messages = "";

      this.addDataChat(data);
      this.scrollToEnd();
    },
    scrollToEnd() {
      var content = this.$refs.message;
      console.log(content);
      content.scrollTop = content.scrollHeight;
      console.log(content.scrollHeight);
      console.log(content.scrollTop);
    },
  },
};
</script>
