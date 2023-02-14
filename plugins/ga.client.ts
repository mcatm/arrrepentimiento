import VueGtag from 'vue-gtag';

export default defineNuxtPlugin(nuxtApp => {
  const router = useRouter();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'arrrepentimiento-web',
      pageTrackerScreenviewEnabled: true,
      config: { id: 'G-7WDJRTQ2DN' },
    },
    router
  );
});