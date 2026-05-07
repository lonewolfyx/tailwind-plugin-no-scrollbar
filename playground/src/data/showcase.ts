export interface ShowcaseItem {
    id: string
    title: string
    body: string
    tone: string
}

export const featurePills = [
    'Tailwind CSS v4 ready',
    'Vue 3 + Composition API',
    'Vite static deployment',
    'Vercel root config included',
]

export const showcaseItems: ShowcaseItem[] = [
    {
        id: 'gallery',
        title: 'Horizontal galleries',
        body: 'Keep the card rail swipeable on touch devices while removing the visual chrome.',
        tone: 'from-orange-300/60 via-amber-200/60 to-yellow-100/70',
    },
    {
        id: 'code',
        title: 'Code panes',
        body: 'Ideal for docs or snippets where the scrollbar steals visual focus from the content.',
        tone: 'from-sky-300/60 via-cyan-200/60 to-teal-100/70',
    },
    {
        id: 'dashboards',
        title: 'Dense dashboards',
        body: 'Use the utility on horizontally scrollable widgets without making the layout feel cramped.',
        tone: 'from-fuchsia-300/50 via-rose-200/50 to-pink-100/70',
    },
    {
        id: 'mobile',
        title: 'Mobile carousels',
        body: 'Preserve momentum scrolling while keeping the UI visually calm inside compact viewports.',
        tone: 'from-lime-300/60 via-emerald-200/60 to-green-100/70',
    },
]

export const installSnippet = `pnpm install
pnpm playground:dev`

export const pluginUsageSnippet = `@import "tailwindcss";
@plugin "../../src/index.ts";

.showcase-strip {
  @apply no-scrollbar overflow-x-auto;
}`

export const publishedUsageSnippet = `@import "tailwindcss";
@plugin "tailwind-plugin-no-scrollbar";

.modal-body {
  @apply scrollbar-none overflow-y-auto;
}`

export const cssAssetSnippet = `@import "tailwindcss";
@import "tailwind-plugin-no-scrollbar/v4";`
