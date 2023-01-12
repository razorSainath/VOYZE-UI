import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import VueApexCharts from 'vue3-apexcharts';


export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap);
    nuxtApp.vueApp.use(VueApexCharts);

})

