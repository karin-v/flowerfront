<template>
  <div>
    <AlertSuccess :message="successMessage"/>

    <UpdateItemModal :modal-is-open="updateItemModalIsOpen"
                     :itemEdit="itemEdit"
                     :categories="categories"
                     :counties="counties"
                     :regions="regions"

                     @event-close-modal="closeUpdateModal"
                     @event-update-item="updateItem"

                     @event-new-image-selected="setImageData"
                     @event-update-item-name="setItemName"
                     @event-update-description="setItemDescription"
                     @event-update-total-quantity="setItemTotalQuantity"
                     @event-new-category-selected="setItemCategoryId"
                     @event-new-county-selected="setItemCountyId"
                     @event-new-region-selected="setItemRegionId"/>

    <!--                     @event-new-transactiontype-selected="setItemTransactionTypeId"-->

    />
    <NewMessageModal :modal-is-open="newMessageModalIsOpen"
                     @event-update-body="setMessageBody"
                     @event-update-subject="setSubject"
                     @event-send-message="sendNewMessage"
                     @event-close-modal="closeMessageModal"
    />
    <div class="container mt-4">
      <div class="row mb-3">

        <!--        todo: TransactionType puudu???-->
        <h4 style="color:#212529; font-family: 'Arial', sans-serif;"> {{ itemView.transactionType }}: {{
            itemView.itemName
          }}</h4>
        <div class="col me-2">


          <div class="form-floating mt-3">

            <p>
              {{ itemView.description }}
            </p>
<!--              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"-->
<!--                        style="width: 400px; height: 150px; border: none"-->
<!--                        type="text"-->
<!--                        :value="itemEdit.description"-->
<!--                        @input="$emit('event-update-description', $event.target.value)">{{ itemView.description }}</textarea>-->
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
          <div class="mt-3" v-if="isOwner">
            <button @click="openItemInfoModal" type="button" class="btn btn-outline-success me-3">Muuda andmeid</button>

            <!-- @click="updateItemInfoModal" todo: andmeid saab muuta ja pilti kustutada modalis-->
            <!-- <ImageInput @event-new-image-selected="$emit('event-new-image-selected', $event)"/>-->

          </div>

          <div v-else>
            <div class="mt-3">
              <button type="button" class="btn btn-success me-3" @click="openMessageModal">Saada kasutajale teade
              </button>
            </div>
          </div>

        </div>
        <div class="col">
          <div class="mt-3">


            <ItemImage :image-data="itemView.itemImage" alt="Taimepilt"/>


          </div>

          <div class="mt-3">
            <button type="button" class="btn bg-secondary-subtle me-3">Broneerin</button>
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
import CountyService from "@/services/CountyService";
import RegionService from "@/services/RegionService";
import NewMessageModal from "@/components/modal/NewMessageModal.vue";
import MessageService from "@/services/MessageService";
import UserService from "@/services/UserService";

export default {
  name: "ItemView",
  components: {AlertSuccess, UpdateProfileModal, ImageInput, ItemImage, UserImage, UpdateItemModal, NewMessageModal},
  data() {
    return {
      updateItemModalIsOpen: false,
      newMessageModalIsOpen: false,
      itemId: Number(useRoute().query.itemId),
      userId: Number(sessionStorage.getItem('userId')),
      isOwner: false,

      itemView: {
        itemId: 0,
        userId: 0,
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

      itemMessage: {
        itemId: Number(useRoute().query.itemId),
        senderId: Number(sessionStorage.getItem('userId')),
        receiverId: 0,
        messageSubject: '',
        messageBody: ''
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

      successMessage: '',
      errorMessage: '',


      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {


    handleGetItemViewResponse(response) {
      this.itemView = response.data;
      this.validateIsOwner()
    },

    getItemView() {
      ItemService.sendGetItemRequest(this.itemId)
          .then(response => this.handleGetItemViewResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetItemEditResponse(response) {
      this.itemEdit = response.data;
      this.getAllRegions(this.itemEdit.countyId);
    },


    getItemEdit() {
      ItemService.sendGetItemEditRequest(this.itemId)
          .then(response => this.handleGetItemEditResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },
    getUserInfo() {
      UserService.sendGetUserInfoRequest(this.userId)
          .then(response => this.handleGetUserInfoResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    validateIsOwner() {
      const userId = Number(sessionStorage.getItem('userId'))
      this.isOwner = userId != null && userId === this.itemView.userId

    },

    setImageData(imageData) {
      this.itemEdit.imageData = imageData
    },
    //
    // setItemTransactionTypeId(transactionTypeId) {
    //   this.itemEdit.transactionTypeId = transactionTypeId
    // },
    //
    setItemCountyId(countyId) {
      this.itemEdit.countyId = countyId
    },

    setItemRegionId(regionId) {
      this.itemEdit.regionId = regionId
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
      this.closeUpdateModal()
      ItemService.updateItem(this.itemId, this.itemEdit)
          .then(() => this.handleUpdateItemResponse())
          .catch(() => NavigationService.navigateToErrorView())
    },

    openItemInfoModal() {
      this.updateItemModalIsOpen = true
    },


    openMessageModal() {
      this.newMessageModalIsOpen = true
    },
    setMessageBody(messageBody) {
      this.itemMessage.messageBody = messageBody
    },
    setSubject(subject) {
      this.itemMessage.messageSubject = subject

    },

    sendNewMessage() {
      this.itemMessage.receiverId = this.itemEdit.userId
      this.closeMessageModal()
      MessageService.sendNewMessageRequest(this.itemMessage)
          .then(response => this.handleNewMessageRequest(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleNewMessageRequest(response) {
      this.successMessage = 'Sõnum on saadetud'
      setTimeout(4000)
    },
    closeMessageModal() {
      this.newMessageModalIsOpen = false
    },

    closeUpdateModal() {
      this.updateItemModalIsOpen = false
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


    getAllCounties() {
      CountyService.sendGetCountiesRequest()
          .then(response => this.handleGetCountiesResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetCountiesResponse(response) {
      this.counties = response.data;
    },

    getAllRegions(countyId) {
      RegionService.sendGetRegionsRequest(countyId)
          .then(response => this.handleGetRegionsResponse(response))
          .catch(() => NavigationService.navigateToErrorView())
    },

    handleGetRegionsResponse(response) {
      this.regions = response.data;
    },


  },

  beforeMount() {

    this.getItemView();
    this.getItemEdit();
    this.getAllCategories();
    this.getAllCounties();
    this.getAllCategories();
    this.getUserInfo();

  }

}
</script>
