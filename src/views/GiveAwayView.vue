<template>
  <div class="container mt-4">
    <div class="row mb-3">
      <div class="col">
        <h4 style="color:#212529; font-family: 'Arial', sans-serif;">Annan ära </h4>
      </div>
    </div>

    <div class="btn-group me-2">
      <CategoriesDropdown :categories="categories" :selected-category-id="categories.categoryId" />
    </div>

    <div class="btn-group me-2">
      <CountyDropdown :counties="counties" :selected-county-id="counties.countyId" @event-new-county-selected="updateRegionsDropdown"/>
    </div>

    <div class="btn-group me-2">
      <RegionDropdown :regions="regions" :selected-region-id="regions.regionId"/>
    </div>

    <!--    <router-link to="/search">-->
    <!--      <div class="input-group mb-3">-->
    <!--        <input type="text" class="form-control" placeholder="Otsi märksõna järgi" aria-label="Otsi märksõna järgi"-->
    <!--               aria-describedby="basic-addon2">-->
    <!--        <span class="input-group-text" id="basic-addon2">Otsi</span>-->
    <!--      </div>-->

    <div class="d-flex justify-content-center align-items-center mt-3">
      <ItemsTable :items="items"/>

    </div>
  </div>


</template>

<script>
import NavigationService from "@/services/NavigationService";
import CategoriesDropdown from "@/components/category/CategoriesDropdown.vue";
import CountyDropdown from "@/components/county/CountyDropdown.vue";
import RegionDropdown from "@/components/region/RegionDropdown.vue";
import ItemsTable from "@/components/items/ItemsTable.vue";
import CategoryService from "@/services/CategoryService";
import CountyService from "@/services/CountyService";
import RegionService from "@/services/RegionService";
import UserService from "@/services/UserService";
import ItemService from "@/services/ItemService";
import itemImage from "@/components/image/ItemImage.vue";

export default {
  name: 'GiveAwayView',
  components: {ItemsTable, RegionDropdown, CountyDropdown, CategoriesDropdown},
  data() {
    return {
      selectedCategoryId: '',
      selectedCountyId: '',
      item: {
          itemId: 0,
          itemName: '',
          description: '',
          username: '',
          regionName: '',
          totalQuantity: 0,
          availableQuantity: 0,


        countyId: 0,
        transactionTypeId: 1
      },

      items: [],

      categories: [
        {
          categoryId: 0,
          categoryName: '',
        }
      ],

      counties: [
        {
          countyId: 0,
          countyName: '',
        }
      ],
      regions: [
        {
          regionId: 0,
          regionName: '',
        }
      ],

    }

  },

  methods: {
    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },
    getAllCategories() {
      CategoryService.sendGetCategoriesRequest()
          .then(response => this.handleGetCategoriesResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetCategoriesResponse(response) {
      this.categories = response.data;
    },

    getAllCounties() {
      CountyService.sendGetCountiesRequest()
          .then(response => this.handleGetCountiesResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetCountiesResponse(response) {
      this.counties = response.data;
    },

    getRegionsByCountyId(selectedCountyId) {
      RegionService.sendGetRegionsRequest(selectedCountyId)
          .then(response => this.handleGetRegionsResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },
    updateRegionsDropdown(selectedCountyId) {
      this.item.countyId = selectedCountyId
      this.getRegionsByCountyId(this.item.countyId)
    },

    handleGetRegionsResponse(response) {
      return this.regions = response.data;
    },

    getItemInfo() {
      ItemService.sendGetItemInfoRequest(
          this.item.transactionTypeId,
          this.selectedCategoryId,
          this.selectedCountyId
      )
          .then(response => this.handleItemInfoResponse(response))
          .catch(() => {
            this.items = []; // Reset if an error occurs
            NavigationService.navigateToErrorView();
          });
    },


    handleItemInfoResponse(response) {
      if (response.data && response.data.length > 0) {
        this.items = response.data; // Update with fetched data
      } else {
        this.items = []; // Ensure it remains an empty array if no data is returned
      }
    },
  },

  beforeMount() {
    this.getAllCategories()
    this.getAllCounties()
    this.getRegionsByCountyId(this.item.countyId)
  this.getItemInfo(1)

  },
}
</script>



