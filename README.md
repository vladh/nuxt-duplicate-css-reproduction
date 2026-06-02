# Nuxt Duplicate CSS Reproduction

To reproduce:

```
pnpm generate
pnpm preview
```

This reproduces two issues:

- The main CSS duplication issue [(nuxt/nuxt#35255)](https://github.com/nuxt/nuxt/issues/35255)
- An issue with `@font-face` inlining [(nuxt/fonts#840)](https://github.com/nuxt/fonts/issues/840)
