<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-4 text-gray-800">Edit Wisata</h1>

    <div class="row">
      <div class="col-12">
        <b-card>
          <form class="form">
            <div class="form-group row">
              <label class="col-form-label col-sm-3">Nama Wisata</label>
              <div class="col-sm-9">
                <b-form-input
                  type="text"
                  v-model="wisata.name"
                  placeholder="Nama Wisata">
                </b-form-input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-sm-3">Lokasi</label>
              <div class="col-sm-9">
                <b-form-input
                  type="text"
                  v-model="wisata.location"
                  placeholder="Lokasi">
                </b-form-input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-sm-3">Kategori Wisata</label>
              <div class="col-sm-9">
                <b-form-input
                  type="text"
                  v-model="wisata.category"
                  placeholder="Kategori Wisata">
                </b-form-input>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-sm-3">Detail</label>
              <div class="col-sm-9">
                <b-form-textarea
                  v-model="wisata.detail"
                  placeholder="Detail"
                  rows="3"
                  max-rows="10">
                </b-form-textarea>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-sm-3">HTM</label>
              <div class="col-sm-9">
                <b-form-input
                  type="number"
                  v-model="wisata.price"
                  placeholder="Harga Tiket Masuk">
                </b-form-input>
              </div>
            </div>
            <div class="col-12 mt-5 text-right">
              <b-button class="text-right mr-3" variant="danger">Batal</b-button>
              <b-button variant="success">Simpan</b-button>
            </div>
          </form>
        </b-card>
      </div>
    </div>
  </div>
  <!-- /.container-fluid -->
</template>
<script>
export default {
  data () {
    return {
      wisata: {
        name: '',
        category: '',
        detail: '',
        price: 0,
        location: ''
      }
    }
  }
}
</script>