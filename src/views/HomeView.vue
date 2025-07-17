<script setup>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <div class="p-6">
        <h1 class="text-3xl font-bold text-gray-800">Dashboard SPA</h1>
        <p class="text-gray-500 mt-2">Seja bem-vindo(a) à sua aplicação personalizada.</p>

        <!-- Aqui você pode colocar seus componentes de atendimento, caixa, relatórios etc -->
        <!-- <AtendimentoResumo /> -->
        <!-- <ResumoFinanceiro /> -->

      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
