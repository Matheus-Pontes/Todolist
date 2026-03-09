<template>

    <header class="w-full flex items-center justify-between pt-4 px-4">

        <div class="w-64 flex items-center gap-2 justify-between border border-green-600 border-b-0 p-2 bg-zinc-900 rounded-tr-lg rounded-tl-lg">
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


    <main class="flex flex-1 overflow-hidden pb-4 px-4">

        <!-- sidebar -->
        <aside class="flex w-64 flex-col border border-t-0 border-green-600 bg-zinc-900 p-2 rounded-br-lg rounded-bl-lg">

            <h2 class="flex items-center gap-2 text-lg text-white">
                <PhCircle class="text-blue-500 animate-pulse" size="12" weight="fill"/>
                Ativas
            </h2>

            <div class="flex-1 overflow-y-auto border-t mt-2">
                <div class="p-2"></div>
            </div>

            <h2 class="flex items-center gap-2 text-lg text-white mt-4">
                <PhCheckCircle class="text-green-500 animate-pulse" size="16" weight="fill"/>
                Concluídas
            </h2>

            <div class="flex-1 overflow-y-auto border-t mt-2">
                <div class="p-2"></div>
            </div>

        </aside>


        <!-- conteúdo -->
        <section class="flex-1 min-w-0 overflow-y-hidden">

            <div class="p-6 space-y-10 h-full">
                <input  
                    type="text"
                    placeholder="TÍTULO"
                    class="w-full max-w-2xl bg-transparent text-white text-4xl focus:outline-none"
                />

                <textarea
                    id="txtDescricao"
                    placeholder="Descrição..."
                    class="w-full h-full bg-transparent text-white text-2xl focus:outline-none resize-none"
                ></textarea>

            </div>

        </section>

    </main>
</template>

<script setup>
import { PhCheckCircle, PhCircle,  PhFloppyDisk, PhTrash, PhX } from '@phosphor-icons/vue';

</script>
