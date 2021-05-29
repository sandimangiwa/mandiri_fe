<template>
  <div>
    <div class="Notification">
      <Header />
      <div class="container-fluid" style="padding-top:70px">
        <div class="row">
          <div class="sidebar col-lg-2">
            <div class="position">
              <Sidebar />
            </div>
          </div>
          <div class="col mt-2 mb-2">
            <div class="Notification p-3">
              <h5 class="Notification-title">Notification</h5>
              <div class="row">
                <div class="col-4 mb-3" v-for="i in 4" :key="i.id">
                  <b-card style="border-radius:20px;">
                    <b-media>
                      <template #aside>
                        <h1>
                          <b-icon variant="warning" icon="exclamation-square-fill" aria-hidden="true"></b-icon>
                        </h1>
                      </template>
                      <div class="">
                        <h6 class="mb-0 w-100">Nesteadfadfa asdfa dfadfadf asdfadfasf adf afd Media</h6>
                        <small class="time mb-0"><b-icon icon="clock-history"></b-icon> 12:12</small>
                      </div>
                    </b-media>
                    <p
                      class=" mb-0"
                      style=" white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;"
                    >
                      Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <div class="row mt-2">
                      <div class="col-6">
                        <b-button pill size="sm" block variant="outline-secondary">Hapus</b-button>
                      </div>
                      <div class="col-6">
                        <router-link class="text-decoration-none" to="/ChatCustomer">
                          <b-button pill size="sm" block variant="info">info</b-button>
                        </router-link>
                      </div>
                    </div>
                  </b-card>
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
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default {
  name: "Notification",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style></style>
