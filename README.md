# Slack Clone using Supabase, Vue.js & TypeScript

Inspired by the official [Supabase Next.js Slack clone](https://github.com/supabase/supabase/tree/master/examples/nextjs-slack-clone). 

- Frontend:
  - Vue 3, TypeScript
  - [Supabase.js](https://supabase.io/docs/library/getting-started) for user management and realtime data syncing.
- Backend:
  - [app.supabase.io](https://app.supabase.io/): hosted Postgres database with restful API for usage with Supabase.js.
  
[Video Demo](https://twitter.com/chiubaca/status/1341304937721032704)

[Live Demo](https://supabase-vue3-ts-slack-clone.vercel.app/)

## Local development 

Required configuration:

1. Copy the `.env.local.example` file and rename to `.env.local` in the root directory.

2. Set your Supabase details.
```
VUE_APP_SUPABASE_URL = <replace-with-your-API-url>
VUE_APP_SUPABASE_KEY = <replace-with-your-anon-key>
```

### Install Dependancies 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
