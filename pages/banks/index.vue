<template>
  <skeleton-table-loader v-if="banks == null" />
  <v-data-table
    v-else
    :headers="headers"
    :items="banks.banks"
    item-key="name"
    class="elevation-1"
  >
    <template #top>
      <v-toolbar flat color="primary">
        <v-toolbar-title class="text-h5 white--text font-weight-bold">
          Banks
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </template>
    <template #expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        More info about {{ item.name }}
      </td>
    </template>
  </v-data-table>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      headers: [
        {
          text: 'FSP ID',
          align: 'start',
          sortable: false,
          value: 'fsp'
        },
        { text: 'Bank Name', value: 'name' }
      ]
    }
  },
  computed: {
    ...mapGetters({ banks: 'banks' })
  },
  created () {
    const body = {
      msisdn: this.msisdn,
      groupId: parseInt(this.msisdn)
    }
    this.$store.dispatch('_fetchbanks', body)
  }

}
</script>
