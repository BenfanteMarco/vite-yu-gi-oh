import {reactive} from 'vue';

export const store = reactive({
    cardsList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArchetype: ''
})
