<script setup>
import { ref } from 'vue'
defineProps(['id', 'nome', 'preco', 'imagem', 'categoria'])
import ButtonChild from './ButtonChild.vue'
import { formataPreco } from '@/utils/produtoUtils'
import ProdModal from './ProdModal.vue'
const mostrarDial = ref(false)


</script>

<template>
  <div class="produto-card">
    <div>
      <h2>{{ nome }}</h2>
      <p>{{ formataPreco(preco) }}</p>
    </div>
    <div>
      <img :src="imagem" :alt="nome" class="produto-imagem" />
    </div>
    <ButtonChild @clique="mostrarDial = true">Editar</ButtonChild>
    <ProdModal
      v-if="mostrarDial"
      :nome="nome"
      :id="id"
      :categoria="categoria"
      :preco="preco"
      @fechar="mostrarDial = false"
    ></ProdModal>
  </div>
</template>
<style scoped>
.produto-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.produto-imagem {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
