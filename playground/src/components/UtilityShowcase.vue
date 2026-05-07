<script setup lang="ts">
import type { ShowcaseItem } from '../data/showcase'

defineProps<{
    items: ShowcaseItem[]
}>()
</script>

<template>
    <section class="min-w-0 rounded-[2rem] border border-white/55 bg-white/80 p-6 shadow-[0_24px_60px_rgba(56,34,15,0.12)] backdrop-blur">
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0 space-y-2">
                <p class="text-sm font-semibold tracking-[0.22em] text-stone-500 uppercase">
                    Utility preview
                </p>
                <h2 class="text-2xl font-semibold tracking-tight text-stone-900">
                    The `.no-scrollbar` and `.scrollbar-none` utilities on real overflow containers
                </h2>
            </div>
            <span class="w-fit rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-stone-100 uppercase">
                Drag horizontally
            </span>
        </div>

        <div class="rounded-[1.75rem] border border-stone-200/80 bg-[linear-gradient(145deg,rgba(255,247,237,0.96),rgba(255,255,255,0.96))] p-4 md:p-5">
            <div class="no-scrollbar flex gap-4 overflow-x-auto pb-2">
                <article
                    v-for="item in items"
                    :key="item.id"
                    class="min-h-64 min-w-[17.5rem] rounded-[1.5rem] border border-white/75 p-5 shadow-[0_16px_40px_rgba(53,34,12,0.08)]"
                    :class="`bg-gradient-to-br ${item.tone}`"
                >
                    <div class="flex h-full flex-col justify-between gap-6">
                        <div class="space-y-3">
                            <p class="text-xs font-semibold tracking-[0.24em] text-stone-700 uppercase">
                                {{ item.id }}
                            </p>
                            <h3 class="text-xl font-semibold text-stone-900">
                                {{ item.title }}
                            </h3>
                            <p class="text-sm leading-6 text-stone-700">
                                {{ item.body }}
                            </p>
                        </div>

                        <div class="rounded-2xl border border-black/8 bg-white/70 p-3">
                            <div class="scrollbar-none flex gap-2 overflow-x-auto">
                                <span
                                    v-for="tag in ['clean UI', 'scrollable', 'touch-ready', 'tailwind']"
                                    :key="`${item.id}-${tag}`"
                                    class="shrink-0 rounded-full bg-stone-950 px-3 py-1 text-xs font-medium text-white"
                                >
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
            <article class="rounded-[1.4rem] border border-stone-200/80 bg-stone-950 p-4 text-stone-100">
                <p class="text-xs font-semibold tracking-[0.22em] text-orange-300 uppercase">
                    Alias support
                </p>
                <h3 class="mt-2 text-lg font-semibold">
                    `.scrollbar-none`
                </h3>
                <p class="mt-2 text-sm leading-6 text-stone-300">
                    The demo keeps the documented alias available, which is handy when you want a
                    class name that reads closer to Tailwind conventions.
                </p>
            </article>

            <article class="rounded-[1.4rem] border border-stone-200/80 bg-white p-4">
                <p class="text-xs font-semibold tracking-[0.22em] text-cyan-700 uppercase">
                    Cross-browser
                </p>
                <h3 class="mt-2 text-lg font-semibold text-stone-900">
                    WebKit + Firefox + legacy Edge
                </h3>
                <p class="mt-2 text-sm leading-6 text-stone-600">
                    The utility applies `scrollbar-width`, `-ms-overflow-style`, and the WebKit
                    pseudo-element so the behavior is consistent across the usual targets.
                </p>
            </article>

            <article class="rounded-[1.4rem] border border-stone-200/80 bg-white p-4">
                <p class="text-xs font-semibold tracking-[0.22em] text-emerald-700 uppercase">
                    Still scrollable
                </p>
                <h3 class="mt-2 text-lg font-semibold text-stone-900">
                    Interaction preserved
                </h3>
                <p class="mt-2 text-sm leading-6 text-stone-600">
                    Hiding the scrollbar does not remove keyboard, wheel, or touch scrolling, so
                    it works well for galleries, drawers, and code panes.
                </p>
            </article>
        </div>
    </section>
</template>
