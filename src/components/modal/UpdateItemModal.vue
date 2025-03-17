<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')" class="modal-lg">
      <template #title>
        Muuda kuulutuse andmeid
      </template>
      <template #body>
        <div class="container-fluid p-0">
          <!-- Pildi ala -->
          <div class="row mb-2">
            <div class="col-12">
              <ItemImage :image-data="itemEdit.imageData" alt="Taimepilt" class="img-fluid"/>
              <ImageInput class="mt-1" @event-new-image-selected="$emit('event-new-image-selected', $event)"/>
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-md-8 mb-1 mb-md-0">
              <label class="form-label mb-0">Toote nimi:</label>
              <input type="text"
                     class="form-control form-control-sm"
                     :value="itemEdit.name"
                     @input="$emit('event-update-item-name', $event.target.value)"
              >
            </div>
            <div class="col-md-4">
              <label class="form-label mb-0">Kogus:</label>
              <input type="text"
                     class="form-control form-control-sm"
                     :value="itemEdit.totalQuantity"
                     @input="$emit('event-update-total-quantity', $event.target.value)"
              >
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-12">
              <label class="form-label mb-0">Kategooria:</label>
              <CategoriesDropdown :categories="categories" :selected-category-id="itemEdit.categoryId"
                                  @event-new-category-selected="$emit('event-new-category-selected', $event)"
                                  class="form-select form-select-sm"
              />
            </div>
          </div>

          <div class="row mb-2">
            <div class="col-12">
              <label class="form-label mb-0">Kirjeldus:</label>
              <textarea class="form-control form-control-sm" rows="3"
                        :value="itemEdit.description"
                        @input="$emit('event-update-description', $event.target.value)"></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-1 mb-md-0">
              <label class="form-label mb-0">Maakond:</label>
              <CountyDropdown :counties="counties" :selected-county-id="itemEdit.countyId"
                              @event-new-county-selected="$emit('event-new-county-selected', $event)"
                              class="form-select form-select-sm"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label mb-0">Regioon:</label>
              <RegionDropdown :regions="regions" :selected-region-id="itemEdit.regionId"
                              @event-new-region-selected="$emit('event-new-region-selected', $event)"
                              class="form-select form-select-sm"
              />
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <button type="button" class="btn btn-success me-2" @click="$emit('event-update-item', $event.target.value)">
          Salvesta
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import ItemImage from "@/components/image/ItemImage.vue";
import ImageInput from "@/components/image/ImageInput.vue";
import UserImage from "@/components/image/UserImage.vue";
import Modal from "@/components/modal/Modal.vue";
import CategoriesDropdown from "@/components/category/CategoriesDropdown.vue";
import CountyDropdown from "@/components/county/CountyDropdown.vue";
import RegionDropdown from "@/components/region/RegionDropdown.vue";

export default {
  name: "UpdateItemModal",
  components: {RegionDropdown, CountyDropdown, CategoriesDropdown, UserImage, ImageInput, ItemImage, Modal},
  props: {
    itemEdit: {},
    modalIsOpen: Boolean,
    categories: {
      type: Array
    },
    counties: {
      type: Array
    },
    regions: {
      type: Array
    }
  }
}
</script>
