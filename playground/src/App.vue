<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import IntegrationNotes from './components/IntegrationNotes.vue'
import PageModeShowcase from './components/PageModeShowcase.vue'
import UtilityShowcase from './components/UtilityShowcase.vue'
import { useRouteScrollbarDemo } from './composables/useRouteScrollbarDemo'
import {
    cssAssetSnippet,
    featurePills,
    installSnippet,
    pluginUsageSnippet,
    publishedUsageSnippet,
    showcaseItems,
} from './data/showcase'

const { isPageScrollbarHidden, togglePageScrollbar, resetPageScrollbar } = useRouteScrollbarDemo()
</script>

<template>
    <div class="min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#fff7ed_0%,#fffbeb_28%,#f8fafc_62%,#fdf2f8_100%)] text-stone-900">
        <div class="pointer-events-none fixed inset-0 overflow-hidden">
            <div class="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-orange-300/25 blur-3xl" />
            <div class="absolute right-[-6rem] top-[18rem] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
            <div class="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-fuchsia-300/12 blur-3xl" />
        </div>

        <main class="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            <div class="flex flex-col gap-8">
            <HeroSection
                :feature-pills="featurePills"
                :install-snippet="installSnippet"
                :plugin-usage-snippet="pluginUsageSnippet"
            />

                <section class="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                <UtilityShowcase :items="showcaseItems" />
                <PageModeShowcase
                    :is-active="isPageScrollbarHidden"
                    @toggle="togglePageScrollbar"
                    @reset="resetPageScrollbar"
                />
            </section>

            <IntegrationNotes
                :published-usage-snippet="publishedUsageSnippet"
                :css-asset-snippet="cssAssetSnippet"
            />
            </div>
        </main>
    </div>
</template>
