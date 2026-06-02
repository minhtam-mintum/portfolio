<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

Assume training data may be outdated for this Next.js version. Always prioritize the repository's own docs under `node_modules/next/dist/docs/`: first `migration.md` if present, then `README.md`, then `api.md`, and then any version-specific migration or changelog documents.

If an in-repo doc contradicts your training data, follow the in-repo doc. If contradictions remain ambiguous, list the conflicting statements and ask the user to confirm which behavior to implement.

If `node_modules/next/dist/docs/` is missing, inaccessible, or incomplete, respond: `Docs unavailable; please provide the repository or confirm I should use the public Next.js docs.` If repo access is not provided, ask the user to attach the relevant docs or project files; if they decline, produce best-effort code for the latest documented Next.js version and explicitly list assumptions and potential mismatches.

Read the relevant guide files in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
