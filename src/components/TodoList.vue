<template>
    <div class="h-96 overflow-y-auto overflow-x-hidden p-5">
        <ul>
            <li v-for="todo in listaTodo" class="todo-li">
                <span :class="{ 'line-through opacity-60': todo.concluido }" class="text-lg flex flex-col items-start">
                    {{ todo.titulo}}

                    <div v-if="todo.lembrete || todo.descricao" class="flex items-center gap-2">
                        <span class="text-[10px] text-white opacity-50 text-left m-0" v-if="todo.lembrete">Lembrete: {{ formatDate(todo.lembrete) }}</span>
                        <span class="text-[10px] text-white opacity-50 text-left" v-if="todo.descricao" :title=textoAlertaDescricao>
                            <figure class="w-4 h-4">
                                <img src="https://img.icons8.com/color/48/null/info-popup.png"/>
                            </figure>
                        </span>
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
            textoAlertaDescricao: "Você tem uma descrição para essa tarefa clique em 'Editar' para ver o que foi descrito !!!"
        };
    },
    methods: {
        formatDate(value) {
            return moment(value).format('DD/MM/YYYY HH:mm');
        }
    },
    components: { ButtonDropDown }
}
</script>