<!-- src/views/AtendimentosView.vue -->
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <h1 class="text-2xl font-bold mb-4">Atendimentos</h1>
      <p class="text-gray-600">Aqui você poderá visualizar e gerenciar os atendimentos realizados.</p>
      <!-- Coloque aqui a tabela ou componentes dos atendimentos -->
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
</script>
