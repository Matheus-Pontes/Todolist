<template>
    <main class="flex items-center h-full">
        <aside class="sticky  flex flex-col items-center gap-4 p-2 border-0 border-r border-r-green-600 h-full w-64 bg-zinc-900">
            <div class="w-full flex items-center justify-between gap-2">
                <h1 class="text-2xl text-white">
                    TodoFocus
                </h1>
                <button type="button" class="text-white">
                    --
                </button>
            </div>
            <div class="w-full h-full flex flex-col flex-1" >
                <h2 class="text-lg text-white">Ativas</h2>
                <div class="w-full flex flex-col gap-4 flex-1 overflow-auto">
                    <div class="bg-gray-600 p-2"></div>
                </div>
                <h2 class="text-lg text-white">Concluídas</h2>
                <div class="w-full flex flex-col gap-4 flex-1 overflow-auto">
                    <div class="bg-gray-600 p-2"></div>
                </div>
            </div>
        </aside>
        <section class="h-full w-full flex flex-col gap-28 overflow-auto relative">

            <div class="sticky text-white top-2 left-[86%] border-2 border-green-600 max-w-max p-2 flex gap-2 items-center justify-end rounded-full bg-zinc-900">
                
                    <div>Done</div>
                    <div>Save</div>
                    <div>Exclued</div>

                
            </div>

            <div class="w-2xl p-4 space-y-16">
                <div>
                    <input type="text" placeholder="Título" 
                           class="max-w-96 bg-transparent text-white text-4xl focus:border-0 focus:outline-none"/>
                </div>
                <div>
                    <textarea placeholder="Descrição..." 
                        class="w-full h-full bg-transparent text-white text-4xl focus:border-0 focus:outline-none"></textarea>
                </div>
            </div>


        </section>
    </main>
</template>

<script>



</script>
