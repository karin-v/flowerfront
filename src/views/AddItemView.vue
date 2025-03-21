<template>
  <div>
    <div class="row justify-content-center mt-3">
      <h4>Uue kuulutuse lisamine</h4>
      <AlertSuccess :message="successMessage"/>
      <AlertDanger :message="errorMessage"/>
    </div>
  </div>
  <div class="row justify-content-center mt-4">

    <div class="col col-3">
      <div class="mb-4 d-flex justify-content-end align-items-center">
        <TransactionTypeDropdown :transaction-types="transactionTypes"
                                 @event-new-transaction-type-selected="setNewItemTransactionTypeId"
        />
      </div>
      <div class="mb-4 d-flex justify-content-end align-items-center">
        <CategoriesDropdown :categories="categories"
                            @event-new-category-selected="setNewItemCategoryId"/>
      </div>
      <div class="mb-4 d-flex justify-content-end align-items-center">
        <label class="form-text">Toote nimi</label>
        <input v-model="newItem.name" type="text" class="form-control w-auto ms-3">
      </div>
      <div class="mb-4 d-flex justify-content-end align-items-center">
        <label class="form-text">Kogus</label>
        <input v-model="newItem.totalQuantity" type="number" class="form-control w-auto ms-3">
      </div>
      <div class="mb-4 d-flex justify-content-end align-items-center">
        <label class="form-text">Toote kirjeldus</label>
        <textarea v-model="newItem.description" class="form-control" rows="3"></textarea>
      </div>
    </div>

    <div class="col col-3 justify-content-center">
      <div class="mb-4 d-flex justify-content-end align-items-center">
        <CountyDropdown :counties="counties" :selected-county-id="counties.countyId"
                        @event-new-county-selected="updateRegionsDropdown"
        />
      </div>
      <div class="mb-4 d-flex justify-content-end align-items-center">
        <RegionDropdown :regions="regions" :selected-region-id="newItem.regionId"
                        @event-new-region-selected="setNewItemRegionId"/>
      </div>
      <div>
        <div>
          <div class="ps-0 d-flex flex-column align-items-center">
            <div class="mb-3">

              <ItemImage :imageData="newItem.imageData"/>
            </div>
          </div>
          <div style="position: relative; display: inline-block;">
            <div>
              <ImageInput class="btn-outline-success" @event-new-image-selected="setNewItemImageData"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-3">
      <button @click="addNewItem" type="button" class="btn btn-success me-3">Lisa kuulutus</button>
      <button @click="navigateToHomeView" type="button" class="btn btn-secondary">Katkesta</button>
    </div>
  </div>

</template>

<script>
import TransactionTypeDropdown from "@/components/transaction/TransactionTypeDropdown.vue";
import CategoriesDropdown from "@/components/category/CategoriesDropdown.vue";
import CountyDropdown from "@/components/county/CountyDropdown.vue";
import RegionDropdown from "@/components/region/RegionDropdown.vue";
import CategoryService from "@/services/CategoryService";
import NavigationService from "@/services/NavigationService";
import CountyService from "@/services/CountyService";
import RegionService from "@/services/RegionService";
import ItemService from "@/services/ItemService";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import TransactionTypeService from "@/services/TransactionTypeService";
import ImageInput from "@/components/image/ImageInput.vue";
import ItemImage from "@/components/image/ItemImage.vue";


export default {
  name: 'AddItemView',
  components: {
    ItemImage,
    ImageInput,
    TransactionTypeDropdown, CategoriesDropdown, CountyDropdown, RegionDropdown, AlertDanger, AlertSuccess
  },

  data() {
    return {
      successMessage: '',
      errorMessage: '',

      newItem: {
        userId: Number(sessionStorage.getItem('userId')),
        categoryId: 0,
        countyId: 0,
        regionId: 0,
        transactionTypeId: 0,
        name: '',
        description: '',
        totalQuantity: 0,
        imageData: '',
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
      this.transactionTypes = response.data;
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

    handleGetRegionsResponse(response) {
      this.regions = response.data;
    },

    setNewItemTransactionTypeId(transactionTypeId) {
      this.newItem.transactionTypeId = transactionTypeId
    },

    setNewItemCategoryId(categoryId) {
      this.newItem.categoryId = categoryId
    },

    setNewItemCountyId(countyId) {
      this.newItem.countyId = countyId
    },

    updateRegionsDropdown(selectedCountyId) {
      this.newItem.countyId = selectedCountyId
      this.getRegionsByCountyId(this.newItem.countyId)
    },

    setNewItemRegionId(regionId) {
      this.newItem.regionId = regionId
    },

    addNewItem() {
      ItemService.sendPostItemRequest(this.newItem)
          .then(response => this.handleAddNewItemResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleAddNewItemResponse(response) {
      this.handleAddNewItemSuccessMessage(response);
      setTimeout(() => {
        this.redirectBasedOnTransactionType();
      }, 2000); // 4000 milliseconds = 4 seconds
    },

    handleAddNewItemSuccessMessage() {
      this.successMessage = 'Uus kuulutus lisatud';
    },

    redirectBasedOnTransactionType() {
      if (this.newItem.transactionTypeId === 1) {
        NavigationService.navigateToGiveAwayView();
      } else {
        NavigationService.navigateToWishListView();
      }
    },

    resetAllFields() {
      this.newItem.name = ''
      this.newItem.description = ''
      this.newItem.totalQuantity = 0
      this.newItem.categoryId = 0
      this.newItem.countyId = 0
      this.newItem.regionId = 0
      this.newItem.transactionTypeId = 0
    },

    setNewItemImageData(imageData) {
      if (imageData && imageData.length > 0) {
        this.newItem.imageData = imageData;
      } else {
        this.newItem.imageData = ''; // Set empty if no image
      }
    },
  },

  beforeMount() {
    this.getAllCategories()
    this.getAllCounties()
    this.getRegionsByCountyId(this.newItem.countyId)
    this.getAllTransactionTypes()
  },
}
</script>