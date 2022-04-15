<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="row mb-5">
      <h1 class="h3 col-9 text-gray-800">Daftar Wisata</h1>
      <div class="col-3 text-right">
        <b-button href="/wisata/add" variant="primary">Tambah Wisata</b-button>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <b-card
          title="Wisata 1"
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-button href="#" variant="primary">More Info</b-button>
        </b-card>
      </div>

      <div class="col-sm-3">
        <b-card
          title="Wisata 2"
          img-src="https://picsum.photos/600/300/?image=25"
          img-top
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-button href="#" variant="primary">More Info</b-button>
        </b-card>
      </div>
    </div>

  </div>
  <!-- /.container-fluid -->
</template>
