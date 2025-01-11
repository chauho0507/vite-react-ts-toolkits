/// <reference types="vite/client" />

// Every declarations here is global constants, can retrieve anytime.

// This informs TypeScript that __APP_ENV__ is a global constant of type string.
declare const __APP_ENV__: "development" | "staging" | "production"
