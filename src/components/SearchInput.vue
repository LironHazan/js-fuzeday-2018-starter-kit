<template>
    <v-autocomplete
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="searchTerm"
            chips
            clearable
            hide-details
            hide-selected
            item-text="name"
            item-value="symbol"
            label="Search for a product..."
            solo
            prepend-icon="search"
    >
        <template slot="no-data">
            <v-list-tile>
                <v-list-tile-title>
                    Search for your favorite
                    <strong>Cryptocurrency</strong>
                </v-list-tile-title>
            </v-list-tile>
        </template>
        <template
                slot="selection"
                slot-scope="{ item, selected }"
        >
            <v-chip
                    :selected="selected"
                    color="blue-grey"
                    class="white--text"
            >
                <v-icon left>mdi-coin</v-icon>
                <span v-text="item.name"></span>
            </v-chip>
        </template>
        <template
                slot="item"
                slot-scope="{ item, tile }"
        >
            <v-list-tile-avatar
                    color="indigo"
                    class="headline font-weight-light white--text"
            >
                {{ item.name.charAt(0) }}
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-text="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-text="item.symbol"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-icon>search</v-icon>
            </v-list-tile-action>
        </template>
    </v-autocomplete>
</template>

<script>
  export default {
    name: 'SearchInput',
    props: {

    },
    data: () => {
      return {
        searchTerm: 'test me 1',
        items: [],
        model: null,
        isLoading: false,
      };
    },
    watch: {
      searchTerm (val) {
        console.log(val);
      },
    }
  }

</script>