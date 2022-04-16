<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="row mb-3">
      <h1 class="h3 col-9 text-gray-800">{{ get(destination, 'name', '-') }}</h1>
      <div class="col-3 text-right">
        <b-button
          @click="$router.push({
              path: '/wisata/'
            })"
          variant="success"
          class="mr-3">
          Kembali
        </b-button>
        <b-button
          @click="$router.push({
              path: '/wisata/' + destination.id + '/edit'
            })"
          variant="primary"
          class="mr-3">
          Edit
        </b-button>
        <b-button
          @click="removeDestination"
          variant="danger">
          Hapus
        </b-button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <b-card
          :title="get(destination, 'name', '-')"
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
        >
          <b-card-text>
            {{ get(destination, 'detail', '-') }}
          </b-card-text>
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
      destination: 'destination/getDestination'
    })
  },
  methods: {
    loadDestinationData () {
      this.$store.dispatch('destination/loadDestination', this.$route.params.wisataId)
    },
    removeDestination () {
      this.$swal({
        icon: 'warning',
        title: 'Warning!',
        text: 'Are you sure?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#E02C1A',
        cancelButtonText: 'Cancel',
      })
        .then(response => {
          if (response.isConfirmed) {
            this.$store.dispatch('destination/removeDestination', this.$route.params.wisataId)
            .then(response => {
              let successMsg = get(response, ['data', 'message'], '')
              this.$swal({
                icon: 'success',
                title: 'Success!',
                text: successMsg,
              })
                .then(response => {
                  if (response.isConfirmed) {
                    this.$router.replace({ name: 'wisata' })
                  }
                })
            })
            .catch(error => {
              let errorMsg = get(error, ['response', 'data', 'message'], '')
              this.$swal({
                icon: 'error',
                title: 'Error!',
                text: errorMsg,
              })
            })
          }
        })
    }
  },
  beforeMount () {
    this.loadDestinationData()
  }
}
</script>