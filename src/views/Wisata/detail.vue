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
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          class="mb-2"
        >
          <div class="row">
            <div class="col-sm-6">
              <h3>{{ get(destination, 'name', '-') }}</h3>
              <p class="text-gray-600" style="font-size: small;">Lokasi: {{ get(destination, 'location', '-') }}</p>
            </div>
            <div class="col-sm-6 text-right">
              <b-form-rating
                variant="primary"
                readonly
                show-value
                show-value-max
                inline 
                :value="getTotalRating()">
              </b-form-rating>
            </div>
          </div>
          <b-card-text>
            {{ get(destination, 'detail', '-') }}
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <b-card
          title="Reviews">
          <b-card no-body class="mb-2 mt-2" v-for="(review, idr) in reviews" :key="idr">
            <div class="row m-3">
              <div class="col-sm-1 text-center">
                <img class="img-profile rounded-circle"
                src="@/assets/image/undraw_profile.svg"
                width="64" height="64">
              </div>
              <div class="col-sm-11">
                <div class="row">
                  <div class="col-sm-8">
                    <h6 class="m-0">{{ get(review, 'name', '-') }}</h6>
                    <p class="text-gray-500" style="font-size: x-small;">{{ moment(review.created_at, 'DD-MM-YYYY').format('D MMMM YYYY') }}</p>
                    <!-- <p class="text-gray-500" style="font-size: x-small;">{{ review.created_at }}</p> -->
                  </div>
                  <div class="col-sm-4 text-right">
                    <b-form-rating
                      variant="primary"
                      readonly
                      show-value
                      show-value-max
                      inline 
                      :value="get(review, 'rating', 0)">
                    </b-form-rating>
                  </div>
                </div>
                
                <p>{{ get(review, 'detail', '-') }}</p>
              </div>
            </div>
          </b-card>
          <b-card no-body class="mb-2 mt-2">
            <div class="row m-3">
              <form class="form">
                <div class="form-group row">
                  <div class="col-sm-12">
                    <b-form-textarea
                      v-model="review.detail"
                      placeholder="Review Detail..."
                      rows="3"
                      max-rows="10">
                    </b-form-textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <b-form-rating
                      variant="primary"
                      show-value
                      show-value-max
                      inline 
                      value="review.rating"
                      v-model="review.rating">
                    </b-form-rating>
                  </div>
                </div>
                <b-button variant="success" @click="postReview">Post</b-button>
              </form>
            </div>
          </b-card>
        </b-card>
      </div>
    </div>

  </div>
  <!-- /.container-fluid -->
</template>
<script>
import { get, map, sum } from 'lodash'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      get: get,
      review: {
        detail: '',
        rating: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      destination: 'destination/getDestination',
      reviews: 'review/getReviews'
    })
  },
  methods: {
    loadDestinationData () {
      this.$store.dispatch('destination/loadDestination', this.$route.params.wisataId)
    },
    loadReviewsData () {
      this.$store.dispatch('review/loadReviews', this.$route.params.wisataId)
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
    },
    postReview () {
      let payload = {
        ...this.review,
        idDestination: this.$route.params.wisataId
      }
      this.$store.dispatch('review/addReview', payload)
      .then(response => {
          let successMsg = get(response, ['data', 'message'], '')
          this.$swal({
            icon: 'success',
            title: 'Success!',
            text: successMsg,
          })
            .then(response => {
              if (response.isConfirmed) {
                this.loadReviewsData()
                this.review = {
                  detail: '',
                  rating: 0
                }
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
    },
    getTotalRating () {
      let total = map(this.reviews, 'rating')
      console.log(total, sum(total), total.length)
      return sum(total) / total.length
    }
  },
  beforeMount () {
    this.loadDestinationData()
    this.loadReviewsData()
  }
}
</script>