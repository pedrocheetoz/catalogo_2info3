<script setup>
  import { ref } from 'vue';
  import { listaProdutos } from '@/data/produtos';
  const props = defineProps(['nome','preco', 'categoria', 'id'])
  import ButtonChild from './ButtonChild.vue';
  import { formataPreco } from '@/utils/produtoUtils';
  const novoPreco = ref(0);

  novoPreco.value = props.preco

  const emit = defineEmits(['fechar'])


  function atualizaPreco(){
    const produtos = ref(listaProdutos);
    const posicao = produtos.value.findIndex(p => p.id == props.id)

    produtos.value[posicao].preco = novoPreco.value;

    emit('fechar')

  }
</script>
<template>
  <div class="overlay">
  <div class="produto-dialog">
    <h2>{{ props.nome }}</h2>
    <p>Preço: {{ formataPreco(props.preco) }}</p>
    <p>Categoria: {{ props.categoria }} </p>
    <input type="number" v-model.number="novoPreco">
    <ButtonChild @clique="atualizaPreco()">Corrigir preço</ButtonChild>
    <ButtonChild @clique="$emit('fechar')">Fechar</ButtonChild>

  </div>
</div>
</template>
<style scoped>
.produto-dialog{
  border: 1px solid #ccc;
  padding: 16px;
  background-color: white;
  min-width: 320px;
  color: black;
}
.overlay{
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background:rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
</style>
