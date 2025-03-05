<template>
  <div>
    <h1>Uue kuulutuse lisamine</h1>


    <div class="row justify-content-center mt-3">


      <div class="col col-3">

        <div class="mb-4 d-flex justify-content-end align-items-center">
          <CategoriesDropdown :categories="categories" :selected-category-id="categories.categoryId"/>
        </div>

        <div class="mb-4 d-flex justify-content-end align-items-center">
          <label class="form-text">Toote nimi</label>
          <input v-model="newItem.name" type="text" class="form-control w-auto ms-3">
        </div>
        <div class="mb-4 d-flex justify-content-end align-items-center">
          <label class="form-text">Kogus</label>
          <input v-model="newItem.totalQuantity" type="text" class="form-control w-auto ms-3">
        </div>

        <div class="mb-4 d-flex justify-content-end align-items-center">
          <label class="form-text">Toote kirjeldus</label>
          <textarea v-model="newItem.description" class="form-control" rows="3"></textarea>
        </div>


      </div>

      <div class="col col-3">
        <div class="mb-4 d-flex justify-content-end align-items-center">
          <CountyDropdown :counties="counties" :selected-county-id="counties.countyId"/>
        </div>
        <div class="mb-4 d-flex justify-content-end align-items-center">
          <RegionDropdown :regions="regions" :selected-region-id="regions.regionId"/>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-3">
        <button type="submit" class="btn btn-outline-success">Lisa kuulutus</button>
      </div>
    </div>


  </div>
</template>


<script>
import CategoriesDropdown from "@/components/category/CategoriesDropdown.vue";
import CountyDropdown from "@/components/county/CountyDropdown.vue";
import RegionDropdown from "@/components/region/RegionDropdown.vue";
import CategoryService from "@/services/CategoryService";
import NavigationService from "@/services/NavigationService";
import CountyService from "@/services/CountyService";
import RegionService from "@/services/RegionService";


export default {
  name: 'AddItemView',
  components: {CategoriesDropdown, CountyDropdown, RegionDropdown},
  data() {
    return {

      newItem: {
        name: '',
        totalQuantity: '',
        description: '',
      },
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

      errorMessage: ``,
    }
  },
  methods: {

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
    handleGetCountiesResponse() {
      return this.counties = response.data;
    },
    getAllRegions() {
      RegionService.sendGetRegionsRequest()
          .then(response => this.handleGetRegionsResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },
    handleGetRegionsResponse() {
      return this.counties = response.data;
    }
  },

  beforeMount() {
    this.getAllCategories()
    this.getAllCounties()
    this.getAllRegions()
  }
}
</script>