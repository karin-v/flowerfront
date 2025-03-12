<template>
  <div class="container mt-4">
    <div class="row mb-3">
      <div class="col">
        <h4 style="color:#212529; font-family: 'Arial', sans-serif;">Annan ära </h4>
      </div>
    </div>

    <div class="btn-group me-2">
      <CategoriesDropdown :categories="categories" :selected-category-id="selectedCategoryId"
      @event-new-category-selected="setSelectedCategoryIdAndGetItems"
      />
    </div>

    <div class="btn-group me-2">
      <CountyDropdown :counties="counties" :selected-county-id="selectedCountyId"
                      @event-new-county-selected="updateRegionsDropdownAndGetItems"/>
    </div>

    <div class="btn-group me-2">
      <RegionDropdown :regions="regions" :selected-region-id="selectedRegionId"/>
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
import ItemService from "@/services/ItemService";

export default {
  name: 'GiveAwayView',
  components: {ItemsTable, RegionDropdown, CountyDropdown, CategoriesDropdown},
  data() {
    return {
      transactionTypeId: 1,
      selectedCategoryId: 0,
      selectedCountyId: 0,
      selectedRegionId: 0,

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

      items: [
        {
          itemId: 0,
          itemName: '',
          description: '',
          username: '',
          regionName: '',
          totalQuantity: 0,
          availableQuantity: 0,
          itemImage: ''
        }
      ],


    }

  },

  methods: {

    setSelectedCategoryIdAndGetItems(selectedCategoryId) {
      this.selectedCategoryId = selectedCategoryId
      this.getItems()

    },
    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },
    getCategories() {
      CategoryService.sendGetCategoriesRequest()
          .then(response => this.handleGetCategoriesResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetCategoriesResponse(response) {
      this.categories = response.data;
    },

    getCounties() {
      CountyService.sendGetCountiesRequest()
          .then(response => this.handleGetCountiesResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetCountiesResponse(response) {
      this.counties = response.data;
    },

    getRegions(selectedCountyId) {
      RegionService.sendGetRegionsRequest(selectedCountyId)
          .then(response => this.handleGetRegionsResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    updateRegionsDropdownAndGetItems(selectedCountyId) {
      this.selectedCountyId = selectedCountyId
      this.getRegions(this.selectedCountyId)
      this.getItems()
    },

    handleGetRegionsResponse(response) {
      return this.regions = response.data;
    },


    getItems() {
      ItemService.sendGetItemInfoRequest(this.transactionTypeId, this.selectedCategoryId, this.selectedCountyId, this.selectedRegionId)
          .then(response => this.handleItemInfoResponse(response))
          .catch(() => NavigationService.navigateToErrorView());
    },


    handleItemInfoResponse(response) {
      this.items = response.data; // Update with fetched data
      if (this.items.size > 0) {
      } else {
        //todo: viska viga
      }
    },
  },

  beforeMount() {
    this.getCategories()
    this.getCounties()
    this.getRegions(this.selectedCountyId)
    this.getItems()
  },
}
</script>



