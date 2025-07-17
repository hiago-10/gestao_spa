<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiViewDashboard" title="Dashboard - Visão Geral" />

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trend="10%"
          trend-type="up"
          color="text-emerald-500"
          :icon="mdiAccountMultiple"
          :number="230"
          label="Atendimentos"
        />
        <CardBoxWidget
          trend="5%"
          trend-type="up"
          color="text-blue-500"
          :icon="mdiCashMultiple"
          prefix="R$"
          :number="9870"
          label="Receita"
        />
        <CardBoxWidget
          trend="2%"
          trend-type="alert"
          color="text-yellow-500"
          :icon="mdiPercent"
          suffix="%"
          :number="42"
          label="Comissão Média"
        />
      </div>

      <SectionTitleLineWithButton :icon="mdiChartBar" title="Atendimentos Semanais" />
      <CardBox class="mb-6">
        <LineChart :data="chartData" class="h-80" />
      </CardBox>

      <SectionTitleLineWithButton :icon="mdiChartPie" title="Receita por Unidade" />
      <CardBox has-table>
        <TableReceitaPorUnidade />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  mdiViewDashboard,
  mdiAccountMultiple,
  mdiCashMultiple,
  mdiPercent,
  mdiChartBar,
  mdiChartPie
} from '@mdi/js'

import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import CardBox from '@/components/CardBox.vue'
import LineChart from '@/components/Charts/LineChart.vue'
import * as chartConfig from '@/components/Charts/chart.config.js'
import TableReceitaPorUnidade from '@/components/TableReceitaPorUnidade.vue'

const chartData = ref(null)

onMounted(() => {
  chartData.value = chartConfig.sampleChartData()
})
</script>
