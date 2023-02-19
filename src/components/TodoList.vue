<template>
    <div class="h-96 overflow-y-auto overflow-x-hidden p-5">
        <ul>
            <li v-for="todo in listaTodo" class="todo-li">
                <span :class="{ 'line-through opacity-60': todo.concluido }" class="text-lg flex flex-col items-start">
                    {{ todo.titulo}}

                    <div v-if="todo.lembrete || todo.descricao" class="flex gap-1">
                        <span class="text-[10px] text-white opacity-50">{{ todo.descricao }}</span>
                        <span class="text-[10px] text-white opacity-50">{{ formatDate(todo.lembrete) }}</span>
                    </div>
                </span>
                <div class="flex items-center justify-between gap-2">
                    <ButtonDropDown :todo="todo" :listaTodo="this.$props.listaTodo"/>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import ButtonDropDown from './ButtonDropDown.vue';
import moment from 'moment';

export default {
    name: "TodoList",
    props: ["listaTodo"],
    data() {
        return {
            abrirEdicao: false,
        };
    },
    methods: {
        formatDate(value) {
            return moment(value).format('DD/MM/YYYY hh:mm');
        },
    },
    components: { ButtonDropDown }
}
</script>