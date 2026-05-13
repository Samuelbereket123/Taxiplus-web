import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    auth: ComponentProps<typeof import("C:/Users/samue/Documents/Projects/TaxiPlus/taxiplus-website/layouts/auth.vue").default>,
    dashboard: ComponentProps<typeof import("C:/Users/samue/Documents/Projects/TaxiPlus/taxiplus-website/layouts/dashboard.vue").default>,
    default: ComponentProps<typeof import("C:/Users/samue/Documents/Projects/TaxiPlus/taxiplus-website/layouts/default.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}