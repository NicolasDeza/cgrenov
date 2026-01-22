<script setup lang="ts">
import { CheckCircle, X } from 'lucide-vue-next'

defineProps<{
  show: boolean
  message: string
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="translate-y-2 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-2 opacity-0"
  >
    <div
      v-if="show"
      class="fixed bottom-6 right-6 z-50 max-w-md"
    >
      <div class="bg-[#11171D] text-white rounded-lg shadow-2xl p-4 pr-12">
        <div class="flex items-start gap-3">
          <CheckCircle :size="24" class="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p class="font-bold text-sm mb-1">
              Message envoyé !
            </p>
            <p class="text-sm text-slate-300">
              {{ message }}
            </p>
          </div>
        </div>

        <button
          type="button"
          class="absolute top-3 right-3 p-1 hover:bg-white/10 rounded transition-colors"
          @click="emit('close')"
        >
          <X :size="18" class="text-slate-400" />
        </button>
      </div>
    </div>
  </Transition>
</template>