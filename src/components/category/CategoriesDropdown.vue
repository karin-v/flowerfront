<template>
  <select @change="handleCategoryDropdownChange" class="form-select">
    <option selected value=0>Vali kategooria</option>
    <option v-for="category in categories" :key="category.categoryId">{{category.categoryName}}</option>
  </select>
</template>

<script>
export default {
  name: 'CategoriesDropdown',
  props:{
    categories:{},
    selectedCategoryId:{
      type: Number,
      default:0

    }
  },
  methods:{

    handleCategoryDropdownChange(event){
      this.$emit('event-new-category-selected', Number(event.target.value))
    },
  }

}
</script>



