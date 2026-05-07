<script setup lang="ts">
defineProps<{
    featurePills: string[]
    installSnippet: string
    pluginUsageSnippet: string
}>()
</script>

<template>
    <section class="relative w-full overflow-hidden rounded-[2rem] border border-white/55 bg-white/78 px-6 py-8 shadow-[0_30px_80px_rgba(65,38,15,0.15)] backdrop-blur xl:px-10 xl:py-10">
        <div class="pointer-events-none absolute inset-y-0 right-0 w-72 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.28),_transparent_68%)]" />

        <div class="relative flex min-w-0 flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
            <div class="min-w-0 max-w-3xl space-y-5">
                <div class="flex flex-wrap gap-2">
                    <span
                        v-for="pill in featurePills"
                        :key="pill"
                        class="rounded-full border border-orange-300/55 bg-orange-50/90 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-orange-700 uppercase"
                    >
                        {{ pill }}
                    </span>
                </div>

                <div class="space-y-4">
                    <p class="text-sm font-semibold tracking-[0.24em] text-stone-500 uppercase">
                        Scroll without the chrome
                    </p>
                    <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl xl:text-6xl">
                        A polished playground for previewing hidden-scrollbar behavior in real layouts.
                    </h1>
                    <p class="max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
                        This demo uses the actual plugin source from the repository, so the
                        playground behaves exactly like the package you will publish.
                    </p>
                </div>
            </div>

            <div class="grid min-w-0 gap-4 xl:w-full xl:max-w-[23rem] xl:flex-none">
                <article class="rounded-[1.5rem] border border-stone-200/80 bg-stone-950 p-4 text-sm text-stone-100 shadow-[0_20px_50px_rgba(20,20,20,0.2)]">
                    <p class="mb-3 font-semibold text-orange-300">
                        Start the playground
                    </p>
                    <pre class="max-w-full overflow-x-auto whitespace-pre-wrap break-words font-mono text-[13px] leading-6">{{ installSnippet }}</pre>
                </article>

                <article class="rounded-[1.5rem] border border-stone-200/80 bg-stone-900/95 p-4 text-sm text-stone-100 shadow-[0_20px_50px_rgba(20,20,20,0.18)]">
                    <p class="mb-3 font-semibold text-teal-300">
                        Tailwind usage
                    </p>
                    <pre class="max-w-full overflow-x-auto whitespace-pre-wrap break-words font-mono text-[13px] leading-6">{{ pluginUsageSnippet }}</pre>
                </article>
            </div>
        </div>
    </section>
</template>
