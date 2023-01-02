export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  console.log(user.value, to.meta.layout);

  // if (!user.value && to.meta?.layout !== "website") {
  //   return navigateTo("/login");
  // }
});
