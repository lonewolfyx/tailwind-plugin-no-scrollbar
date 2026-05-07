<script setup lang="ts">
defineProps<{
    publishedUsageSnippet: string
    cssAssetSnippet: string
}>()
</script>

<template>
    <section class="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <article class="min-w-0 rounded-[2rem] border border-white/55 bg-stone-950 p-6 text-stone-100 shadow-[0_24px_60px_rgba(30,20,12,0.22)]">
            <p class="text-sm font-semibold tracking-[0.22em] text-orange-300 uppercase">
                Package usage
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight">
                Published plugin entry
            </h2>
            <p class="mt-3 text-sm leading-6 text-stone-300">
                When the package is published, consumers can reference the plugin directly in their
                Tailwind CSS v4 stylesheet.
            </p>
            <pre class="mt-5 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-[1.4rem] bg-black/30 p-4 font-mono text-[13px] leading-6 text-stone-100">{{ publishedUsageSnippet }}</pre>
        </article>

        <article class="min-w-0 rounded-[2rem] border border-white/55 bg-white/82 p-6 shadow-[0_24px_60px_rgba(56,34,15,0.12)] backdrop-blur">
            <p class="text-sm font-semibold tracking-[0.22em] text-cyan-700 uppercase">
                Deployment notes
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight text-stone-900">
                Ready for Vercel static hosting
            </h2>
            <p class="mt-3 text-sm leading-6 text-stone-600">
                The repository now includes a root `vercel.json` that builds the playground and
                serves `playground/dist`, so you can deploy the repo directly without moving files
                around.
            </p>
            <pre class="mt-5 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-[1.4rem] bg-stone-950 p-4 font-mono text-[13px] leading-6 text-stone-100">{{ cssAssetSnippet }}</pre>
            <div class="mt-5 rounded-[1.4rem] border border-stone-200 bg-stone-50 p-4">
                <p class="text-sm font-semibold text-stone-900">
                    Deploy flow
                </p>
                <ol class="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-stone-600">
                    <li>Import the repository into Vercel.</li>
                    <li>Leave the root as-is or keep `playground` as the Root Directory if you prefer.</li>
                    <li>Build output is produced by `pnpm playground:build` and published from `playground/dist`.</li>
                </ol>
            </div>
        </article>
    </section>
</template>
