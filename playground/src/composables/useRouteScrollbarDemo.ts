import type { ShallowRef } from 'vue'
import { onBeforeUnmount, shallowRef } from 'vue'

const routeClassName = 'route-hide-scrollbar'

function syncRouteScrollbarClass(isActive: boolean): void {
    if (typeof document === 'undefined')
        return

    document.documentElement.classList.toggle(routeClassName, isActive)
    document.body.classList.toggle(routeClassName, isActive)
}

export function useRouteScrollbarDemo(): {
    isPageScrollbarHidden: ShallowRef<boolean>
    setPageScrollbarHidden: (nextValue: boolean) => void
    togglePageScrollbar: () => void
    resetPageScrollbar: () => void
} {
    const isPageScrollbarHidden = shallowRef(false)

    function setPageScrollbarHidden(nextValue: boolean): void {
        isPageScrollbarHidden.value = nextValue
        syncRouteScrollbarClass(nextValue)
    }

    function togglePageScrollbar(): void {
        setPageScrollbarHidden(!isPageScrollbarHidden.value)
    }

    function resetPageScrollbar(): void {
        setPageScrollbarHidden(false)
    }

    onBeforeUnmount(() => {
        syncRouteScrollbarClass(false)
    })

    return {
        isPageScrollbarHidden,
        setPageScrollbarHidden,
        togglePageScrollbar,
        resetPageScrollbar,
    }
}
