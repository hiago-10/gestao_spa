<template>
  <div class="overflow-x-auto">
    <table class="table-auto w-full text-left border border-gray-200 dark:border-gray-700">
      <thead class="bg-gray-100 dark:bg-slate-700">
        <tr>
          <th class="p-3">Unidade</th>
          <th class="p-3">Atendimentos</th>
          <th class="p-3">Valor Total</th>
          <th class="p-3">Comissão (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in dados" :key="index" class="border-t border-gray-200 dark:border-gray-700">
          <td class="p-3">{{ row.unidade }}</td>
          <td class="p-3">{{ row.atendimentos }}</td>
          <td class="p-3">R$ {{ row.valor.toFixed(2) }}</td>
          <td class="p-3">{{ row.comissao }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const dados = [
  { unidade: 'Hotel A', atendimentos: 45, valor: 2850.75, comissao: 10 },
  { unidade: 'Hotel B', atendimentos: 38, valor: 2310.00, comissao: 12 },
  { unidade: 'Unidade X', atendimentos: 55, valor: 4050.90, comissao: 9 },
]
</script>
