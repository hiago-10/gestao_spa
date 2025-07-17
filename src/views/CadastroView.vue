<!-- src/views/CadastroView.vue -->
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        title="Cadastro e Controle"
        :icon="mdiAccountMultiple"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BaseButton
          label="Massagistas"
          color="info"
          class="w-full"
          @click="navigateTo('/massagistas')"
        />

        <BaseButton
          label="Hotéis e Unidades"
          color="info"
          class="w-full"
          @click="navigateTo('/unidades')"
        />

        <BaseButton
          label="Técnicas"
          color="info"
          class="w-full"
          @click="navigateTo('/tecnicas')"
        />

        <BaseButton
          label="Sessões / Atendimentos"
          color="info"
          class="w-full"
          @click="navigateTo('/atendimentos')"
        />

        <BaseButton
          label="Vouchers e Pacotes"
          color="info"
          class="w-full"
          @click="navigateTo('/vouchers')"
        />
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { mdiAccountMultiple } from '@mdi/js'

import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'

const router = useRouter()

function navigateTo(path) {
  router.push(path)
}
</script>
