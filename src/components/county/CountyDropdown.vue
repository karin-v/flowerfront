<template>
  <select @change="handleCountyDropdownChange" class="form-select">
    <option selected value=0>Vali maakond</option>
    <option v-for="county in counties" :key="county.countyId">{{county.countyName}}</option>
  </select>
</template>

<script>
export default {
  name: 'CountyDropdown',
  props:{
    counties:{},
    selectedCountyId:{
      type: Number,
      default:0

    }
  },
  methods:{

    handleCountyDropdownChange(event){
      this.$emit('event-new-county-selected', Number(event.target.value))
    },
  }

}
</script>