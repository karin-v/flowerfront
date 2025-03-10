<template>
  <div class="container text-center">
    <div class="row">
      <div class="col"><CategoriesDropdown/></div>
      <div class="col"><CountyDropdown/></div>
      <div class="col"><RegionDropdown/></div>
      <div><router-link to="/search">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi"
                 aria-describedby="basic-addon2">
          <span class="input-group-text" id="basic-addon2">Otsi</span>
        </div></router-link></div>
    </div>


  <div class="row">
        <div class="col">
          <img src="../assets/istockphoto-1380361370-612x612.jpg" class="rounded mx-auto d-block">
          <p class="fw-bold">Banaanipuu</p>
          <img src="../assets/orchid-spider-plant-7bc6dab8-4cb320efcec64205a3a2e0fb9ff0e2db.jpg"
               class="rounded mx-auto d-block">
          <p class="fw-bold">Ämbliku puu</p>
          <img src="../assets/zidi01360.jpg" class="rounded mx-auto d-block">
          <p class="fw-bold">Porgandi seemned</p>
        </div>

    </div>
  </div>

</template>

<script>
import NavigationService from "@/services/NavigationService";
import CountyDropdown from "@/components/county/CountyDropdown.vue";
import RegionDropdown from "@/components/region/RegionDropdown.vue";
import CategoriesDropdown from "@/components/category/CategoriesDropdown.vue";

export default {
  name: "GiveAway",
  components: {CategoriesDropdown, RegionDropdown, CountyDropdown},
  data() {

  },

  methods: {
    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },
  }
}
</script>



