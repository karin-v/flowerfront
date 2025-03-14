<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Muuda kuulutuse andmeid
      </template>
      <template #body>
        <div>

          <div style="width: 175px">
            <ItemImage :image-data="itemEdit.imageData" alt="Taimepilt"/>
            <ImageInput @event-new-image-selected="$emit('event-new-image-selected', $event)"/>

          </div>

        </div>
        <div>
          <div>
            <label class="form-text">Toote nimi:</label>
          </div>
          <div>
            <input type="text"
                   :value="itemEdit.name"
                   @input="$emit('event-update-item-name', $event.target.value)"
            >
          </div>
          <div>
            <label class="form-text">Kirjeldus:</label>
          </div>
          <div>
            <input type="text"
                   :value="itemEdit.description"
                   @input="$emit('event-update-description', $event.target.value)"
            >
          </div>
          <div>
            <label class="form-text">Kogus:</label>
          </div>
          <div>
            <input type="text"
                   :value="itemEdit.totalQuantity"
                   @input="$emit('event-update-total-quantity', $event.target.value)"
            >
          </div>
          <div>
            <label class="form-text">Kategooria:</label>
          </div>
          <div>
            <CategoriesDropdown :categories="categories" :selected-category-id="itemEdit.categoryId"
                                @event-new-category-selected="$emit('event-new-category-selected', $event)"
            />

<!--            <CountyDropdown />-->
<!--            <RegionDropdown />-->
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
  name: "UpdateProfileModal",
  components: {RegionDropdown, CountyDropdown, CategoriesDropdown, UserImage, ImageInput, ItemImage, Modal},
  props: {
    itemEdit: {},
    modalIsOpen: Boolean,
    categories: {
      type: Array
    },
  }
}
</script>
