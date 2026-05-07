<script setup lang="ts">
const props = defineProps<{
    isActive: boolean
}>()

const emit = defineEmits<{
    toggle: []
    reset: []
}>()

const pageCards = [
    'Hide the browser scrollbar for full-screen route transitions.',
    'Keep mouse wheel and trackpad interactions unchanged.',
    'Apply the class to both `html` and `body` for document-level scrolling.',
    'Useful for immersive landing pages, panels, and onboarding flows.',
]
</script>

<template>
    <section class="min-w-0 rounded-[2rem] border border-white/55 bg-white/82 p-6 shadow-[0_24px_60px_rgba(56,34,15,0.12)] backdrop-blur">
        <div class="space-y-3">
            <p class="text-sm font-semibold tracking-[0.22em] text-stone-500 uppercase">
                Page-level mode
            </p>
            <h2 class="text-2xl font-semibold tracking-tight text-stone-900">
                Preview `route-hide-scrollbar` on the document itself
            </h2>
            <p class="text-sm leading-6 text-stone-600">
                Toggle the state below, then continue scrolling this page. The scrollbar disappears,
                but the page still moves normally.
            </p>
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-3">
            <button
                type="button"
                class="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                @click="emit('toggle')"
            >
                {{ props.isActive ? 'Restore scrollbar' : 'Hide page scrollbar' }}
            </button>
            <button
                type="button"
                class="rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
                @click="emit('reset')"
            >
                Reset state
            </button>
            <span
                class="rounded-full px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase"
                :class="props.isActive
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-stone-100 text-stone-500'"
            >
                {{ props.isActive ? 'Active on html + body' : 'Inactive' }}
            </span>
        </div>

        <div class="mt-6 grid gap-3">
            <article
                v-for="card in pageCards"
                :key="card"
                class="rounded-[1.35rem] border border-stone-200/80 bg-[linear-gradient(135deg,rgba(250,245,255,0.95),rgba(255,255,255,0.95))] p-4"
            >
                <div class="flex items-start gap-3">
                    <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400" />
                    <p class="text-sm leading-6 text-stone-700">
                        {{ card }}
                    </p>
                </div>
            </article>
        </div>
    </section>
</template>
