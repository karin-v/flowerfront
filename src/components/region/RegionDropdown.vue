<template>
  <select :value="selectedRegionId" @change="handleRegionDropdownChange" class="form-select">
    <option selected value=0>Vali linn/vald</option>
    <option v-for="region in regions" :key="region.regionId" :value="region.regionId">{{region.regionName}}</option>
  </select>
</template>

<script>
export default {
  name: 'RegionDropdown',
  props:{
    regions:{},
    selectedRegionId:{
      type: Number,
      default: 0

    }
  },
  methods:{

    handleRegionDropdownChange(event){
      this.$emit('event-new-region-selected', Number(event.target.value))
    },
  }

}
</script>