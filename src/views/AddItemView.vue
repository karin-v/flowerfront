<template>
  <div>
    <h1>Uue kuulutuse lisamine</h1>


    <div class="row justify-content-center mt-3">


      <div class="col col-3">
        <div class="mb-4 d-flex justify-content-end align-items-center">
          <TransactionTypeDropdown :transactiontypes="transactionTypes" :selected-transactiontype-id="transactionTypes.transactionTypeId"/>
        </div>
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
        <button @click="addNewItem" type="button" class="btn btn-outline-success">Lisa kuulutus</button>
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
import ItemService from "@/services/ItemService";
import AlertDanger from "@/components/alerts/AlertDanger.vue";
import AlertSuccess from "@/components/alerts/AlertSuccess.vue";
import TransactionTypeService from "@/services/TransactionTypeService";
import TransactionTypeDropdown from "@/components/transaction/TransactionTypeDropdown.vue";


export default {
  name: 'AddItemView',
  components: {TransactionTypeDropdown, CategoriesDropdown, CountyDropdown, RegionDropdown, AlertDanger, AlertSuccess},
  data() {
    return {
      successMessage: '',
      errorMessage: '',
      newItem: {

      userId: 0,
        categoryId: 0,
        countyId: 0,
        regionId: 0,
        transactionTypeId: 0,
        name: '',
        description: '',
        totalQuantity: 0,
        availableQuantity: 0,
        data: '',

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
      transactionTypes: [
        {
          transactionTypeId: 0,
          transactionTypeName: '',
        }
      ],
    }
  },
  methods: {

    getAllTransactionTypes() {
      TransactionTypeService.sendGetTransactionTypeRequest()
          .then(response => this.handleGetTransactionTypeRequest(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetTransactionTypeRequest(response) {
      this.categories = response.data;
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
    getAllRegions() {
      RegionService.sendGetRegionsRequest()
          .then(response => this.handleGetRegionsResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetRegionsResponse(response) {
      return this.regions = response.data;
    },

    addNewItem() {
      ItemService.sendPostItemRequest(this.newItem)
          .then(response => this.handleAddNewItemResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleAddNewItemResponse() {
      this.handleAddNewItemSuccessMessage()
      this.resetAllFields()
    },

    handleAddNewItemSuccessMessage() {
      this.successMessage = 'Uus kuulutus lisatud'
      setTimeout(this.resetAllFields, 2000)
      NavigationService.navigateToRegisterView();
    },

    resetAllFields() {
      this.newItem.name = ''
      this.newItem.description = ''
      this.newItem.totalQuantity = 0
      this.categories.categoryId = 0
      this.counties.countyId = 0
      this.regions.regionId = 0
      this.transactionTypes.transactionTypeId = 0
    },
  },
    beforeMount() {
      this.getAllCategories()
      this.getAllCounties()
      this.getAllRegions()
      this.getAllTransactionTypes()
    },
  }
</script>