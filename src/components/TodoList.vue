<template>
    <div class="h-96 overflow-y-auto overflow-x-hidden p-5">
        <ul>
            <li v-for="todo in listaTodo" class="todo-li">
                <span v-if="todo.abrirEdicao == false" :class="{ 'line-through opacity-60': todo.concluido }" class="text-lg">
                    {{ todo.Descricao}}
                </span>
                <input type="text" v-model="todo.Descricao" v-if="todo.abrirEdicao" class="text-black px-2 py-1" />
                <div class="flex items-center justify-between gap-2">
                    <ButtonDropDown :todo="todo"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ButtonDropDown from './ButtonDropDown.vue';

export default {
    name: "TodoList",
    props: ["listaTodo"],
    data() {
        return {
            abrirEdicao: false,
        };
    },
    components: { ButtonDropDown }
}
</script>