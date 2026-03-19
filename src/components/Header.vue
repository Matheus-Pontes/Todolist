<template>
    <header class="w-full flex items-center justify-between pt-4 px-4">

        <div class="w-64 flex items-center gap-2 justify-between border-2 border-green-600 border-b-0 p-2 bg-zinc-900 rounded-tr-lg rounded-tl-lg">
            <h1 class="text-2xl text-white">
                TodoFocus
            </h1>

            <button type="button" class="text-white">
                <PhX size="16"/>
            </button>
        </div>

        <div class="flex items-center justify-end flex-1 pr-4">
            <div class="p-3 text-white rounded-full border-2 border-green-600 flex gap-2 items-center bg-zinc-900">
                <button>
                    <PhCheckCircle size="24"/>
                </button>

                <button>
                    <PhFloppyDisk size="24"/>
                </button>

                <button>
                    <PhTrash size="24"/>
                </button>
            </div>
        </div>

    </header>
</template>

<script setup>
import { PhCheckCircle, PhCircle,  PhFloppyDisk, PhTrash, PhX } from '@phosphor-icons/vue';
</script>