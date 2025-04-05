#!/bin/bash
set -o allexport
source .env.local
set +o allexport

npx supabase gen types typescript --project-id "$SB_PROJECT_ID" --schema public > src/types/dbSchema.ts
