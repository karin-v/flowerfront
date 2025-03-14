<template>
  <div>
    <AlertSuccess :message="successMessage"/>
    <UpdateItemModal :modal-is-open="modalIsOpen"
                     :itemEdit="itemEdit"
                     :categories="categories"

                     @event-close-modal="closeModal"
                     @event-update-item="updateItem"

                     @event-new-image-selected="setImageData"
                     @event-update-item-name = "setItemName"
                     @event-update-description = "setItemDescription"
                     @event-update-total-quantity = "setItemTotalQuantity"
                     @event-new-category-selected = "setItemCategoryId"
    />
    <div class="container mt-4">
      <div class="row mb-3">

        <!--        todo: TransactionType puudu???-->
        <h4 style="color:#212529; font-family: 'Arial', sans-serif;"> {{ itemView.transactionType }}: {{
            itemView.itemName
          }}</h4>
        <div class="col">

          <div class="mt-3">
            <div>Kirjeldus: {{ itemView.description }}</div>
          </div>
          <div class="mt-1">
            <div>Kogus: {{ itemView.totalQuantity }}</div>
          </div>
          <div class="mt-1">
            <div>Kategooria: {{ itemView.category }}</div>
          </div>
          <div class="mt-3">
            <div>Kasutaja: {{ itemView.username }}</div>
          </div>
          <div class="mt-1">
            <div>Asukoht: {{ itemView.county }}, {{ itemView.region }}</div>
          </div>
          <div class="mt-1">
            Staatus
          </div>
          <div class="mt-3">
            <button @click="openItemInfoModal" type="button" class="btn btn-outline-success me-3">Muuda andmeid</button>

            <!-- @click="updateItemInfoModal" todo: andmeid saab muuta ja pilti kustutada modalis-->
            <!-- <ImageInput @event-new-image-selected="$emit('event-new-image-selected', $event)"/>-->

          </div>

        </div>
        <div class="col">
          <div class="mt-3">


            <ItemImage :image-data="itemView.itemImage" alt="Taimepilt"/>


          </div>

          <div class="mt-3">
            <button type="button" class="btn btn-success me-3">Broneerin</button>
          </div>
          <div class="mt-3">
            <button type="button" class="btn btn-success me-3">Saada teade</button>
          </div>
          <div class="mt-3">
            <button @click="navigateToHomeView" type="button" class="btn btn-success me-3">Avalehele</button>
          </div>
          <div>
            <div class="mt-3">
              <button type="button" class="btn btn-secondary me-3">Kustuta kuulutus</button>
              <!--              todo: siia Modal, mis küsib kustutamise kinnitust-->
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>


import ItemService from "@/services/ItemService";
import NavigationService from "@/services/NavigationService";
import UserImage from "@/components/image/UserImage.vue";
import ItemImage from "@/components/image/ItemImage.vue";
import ImageInput from "@/components/image/ImageInput.vue";
import {useRoute} from "vue-router";
import UpdateItemModal from "@/components/modal/UpdateItemModal.vue";
import UpdateProfileModal from "@/components/modal/UpdateProfileModal.vue";
import CategoryService from "@/services/CategoryService";
import AlertSuccess from "@/components/alert/AlertSuccess.vue";

export default {
  name: "ItemView",
  components: {AlertSuccess, UpdateProfileModal, ImageInput, ItemImage, UserImage, UpdateItemModal},
  data() {
    return {
      modalIsOpen: false,
      itemId: useRoute().query.itemId,

      itemView: {
        itemId: 0,
        itemName: '',
        category: '',
        description: '',
        username: '',
        county: '',
        region: '',
        totalQuantity: 0,
        availableQuantity: 0,
        transactionType: '',
        itemImage: ''
      },

      itemEdit: {
        userId: 0,
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

      successMessage: '',
      errorMessage: '',

      // todo: testimise eesmärgil lisatud, võta see pärast ära, testimise eesmärgil, itemId peab tulema kaasa GiveAway lehelt
      // localItemId: 0,

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    getItemView() {
      ItemService.sendGetItemRequest(this.itemId)
          .then(response => this.itemView = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },

    getItemEdit() {
      ItemService.sendGetItemEditRequest(this.itemId)
          .then(response => this.itemEdit = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },

    setImageData(imageData) {
      this.itemEdit.imageData = imageData
    },

    setItemTransactionTypeId(transactionTypeId) {
      this.itemEdit.transactionTypeId = transactionTypeId
    },

    setItemDescription(description) {
      this.itemEdit.description = description
    },

    setItemName(name) {
      this.itemEdit.name = name
    },

    setItemCategoryId(categoryId) {
      this.itemEdit.categoryId = categoryId
    },

    setItemTotalQuantity(totalQuantity) {
      this.itemEdit.totalQuantity = totalQuantity
    },


    updateItem() {
      this.closeModal()
      ItemService.updateItem(this.itemId, this.itemEdit)
          .then(() => this.handleUpdateItemResponse())
          .catch(() => NavigationService.navigateToErrorView())
    },

    openItemInfoModal() {
      this.modalIsOpen = true
    },

    closeModal() {
      this.modalIsOpen = false
    },

    navigateToHomeView() {
      NavigationService.navigateToHomeView()
    },

    handleUpdateItemResponse(response) {
      this.getItemView()
      this.successMessage = 'Kuulutuse andmed on muudetud'
      setTimeout(this.resetAllMessages, 4000)

    },
    getAllCategories() {
      CategoryService.sendGetCategoriesRequest()
          .then(response => this.handleGetCategoriesResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },
    handleGetCategoriesResponse(response) {
      this.categories = response.data;
    },

  },

  beforeMount() {
// todo: pärast jätta välja localItemId, siin on testimise eesmärgil meetodit muudetud
//     this.localItemId = this.itemId;  // Kui itemId ei ole saadaval, määrame vaikimisi 2
    this.getItemView();
    this.getItemEdit();
    this.getAllCategories()
  }

}
</script>
