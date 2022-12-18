<template>
    
       <div class="flex flex-col">
       <div class="overflow-x-auto lg:-mx-8">
         <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
           <div class="overflow-hidden">
             <table class="min-w-full text-center">
                <slot></slot>
                   <tr class="bg-tertiary"> <td colspan="7"><a class="font-light text-primary">see more</a></td></tr>
             </table>
           </div>
         </div>
       </div>
     </div>
    
</template>


<script setup lang="ts"></script>

<style lang="scss" scoped></style>

