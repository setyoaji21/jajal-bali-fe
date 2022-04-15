<template>
  <body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

      <!-- Sidebar -->
      <template-sidebar></template-sidebar>

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- TopBar -->
                <template-topbar></template-topbar>

                <router-view></router-view>

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <template-footer></template-footer>

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <logout-modal></logout-modal>
  </body>
</template>
<script>
import templateSidebar from '@/components/Sidebar'
import templateTopbar from '@/components/TopBar'
import templateFooter from '@/components/Footer'
import logoutModal from '@/components/LogoutModal'
export default {
  components: {
    templateSidebar,
    templateTopbar,
    templateFooter,
    logoutModal
  }
}
</script>
