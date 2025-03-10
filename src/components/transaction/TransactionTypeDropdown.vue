<template>
  <select :value="selectedTransactionTypeId" @change="handleTransactionTypeDropdownChange" class="form-select">
    <option selected value=0>Vali tehingutüüp</option>
    <option v-for="transactionType in transactionTypes" :key="transactionType.transactionTypeId" :value="transactionType.transactionTypeId">
      {{ transactionType.transactionTypeName }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'TransactionTypeDropdown',
  props: {
    transactionTypes: {},
    selectedTransactionTypeId: {
      type: Number,
      default: 0
    }
  },
  methods: {

    handleTransactionTypeDropdownChange(event) {
      this.$emit('event-new-transaction-type-selected', Number(event.target.value))
    },
  }

}
</script>