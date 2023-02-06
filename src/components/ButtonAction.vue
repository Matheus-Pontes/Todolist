<template>
    <button type="button" :class="estilo">
        {{  texto }}
    </button>
</template>

<script>
    export default {
        name: 'ButtonAction',
        props: ['texto', 'estilo']
    }
</script>