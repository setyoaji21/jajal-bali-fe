<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="row mb-5">
      <h1 class="h3 col-9 text-gray-800">Daftar Wisata</h1>
      <div class="col-3 text-right">
        <b-button
          @click="$router.push({
            path: '/wisata/add'
          })"
          variant="primary">
          Tambah Wisata
        </b-button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3" v-for="(destination, idd) in destinations" :key="idd">
        <b-card
          :title="destination.name"
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <div class="row">
              <div class="col-6">
                <p class="text-gray-600 font-weight-bold m-0" style="font-size: small;">Lokasi: {{ get(destination, 'location', '-') }}</p>
              </div>
              <div class="col-6 text-right">
                <p class="text-gray-600 font-weight-bold m-0" style="font-size: small;">HTM: IDR {{ get(destination, 'price', '-') }}</p>
              </div>
            </div>
          </b-card-text>
          <b-button
            @click="$router.push({
              path: '/wisata/' + destination.id
            })"
            variant="primary">
            More Info
          </b-button>
        </b-card>
      </div>
    </div>

  </div>
  <!-- /.container-fluid -->
</template>
<script>
import { get } from 'lodash'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      get: get
    }
  },
  computed: {
    ...mapGetters({
      destinations: 'destination/getDestinations'
    })
  },
  methods: {
    loadDestinationsData () {
      this.$store.dispatch('destination/loadDestinations', null)
    }
  },
  beforeMount () {
    this.loadDestinationsData()
  }
}
</script>