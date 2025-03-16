<template>
  <div>
    <Modal :modal-is-open="modalIsOpen" @event-close-modal="$emit('event-close-modal')">
      <template #title>
        Muuda kuulutuse andmeid
      </template>
      <template #body>
        <div>

          <div >
            <ItemImage :image-data="itemEdit.imageData" alt="Taimepilt"/>
            <ImageInput class="mt-2" @event-new-image-selected="$emit('event-new-image-selected', $event)"/>

          </div>

        </div>
        <div>
          <div>
            <label class="justify-content-between me-1 mb-2">Toote nimi:</label>
            <input type="text"
                   :value="itemEdit.name"
                   @input="$emit('event-update-item-name', $event.target.value)"
            >
          </div>
          <div>



          </div>
          <div>
            <label class="justify-content-between me-1">Kogus:</label>
            <input type="text"
                   :value="itemEdit.totalQuantity"
                   @input="$emit('event-update-total-quantity', $event.target.value)"
            >
          </div>
          <div>

          </div>
          <div>
            <label class="form-text">Kirjeldus:</label>
          </div>
          <div>


            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"
                        type="text"
                        :value="itemEdit.description"
                        @input="$emit('event-update-description', $event.target.value)"></textarea>
            </div>



          </div>


          <div>
            <label class="form-text">Kategooria:</label>
          </div>
          <div>
            <CategoriesDropdown :categories="categories" :selected-category-id="itemEdit.categoryId"
                                @event-new-category-selected="$emit('event-new-category-selected', $event)"
            />

          </div>
          <div>
            <CountyDropdown :counties="counties" :selected-county-id="itemEdit.countyId"
                            @event-new-county-selected="$emit('event-new-county-selected', $event)"
            />
          </div>
          <div>

            <RegionDropdown :regions="regions" :selected-region-id="itemEdit.regionId"
                            @event-new-region-selected="$emit('event-new-region-selected', $event)" />

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
