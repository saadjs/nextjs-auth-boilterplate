# Next.js Auth Boilerplate

This is an auth boilerplate built with [Next.js](https://nextjs.org/docs) 15+, using [Auth.js](https://authjs.dev/) for authentication and [shadcn/ui](https://ui.shadcn.com/) for UI components.

Built-in OAuth providers:

-   Google Sign-in
-   GitHub Sign-in

## Getting Started

1.  Clone the repo
2.  Copy `.env.example` to `.env.local` and fill in your environment variables
3.  Install dependencies:

        pnpm install

4.  Run the dev server:

        pnpm run dev

Open [http://localhost:3000](http://localhost:3000) in browser to see the result.

### Setting up OAuth Providers

1. **GitHub OAuth**:

    - Go to GitHub Developer Settings
    - Create a new OAuth App
    - Set the callback URL to `http://localhost:3000/api/auth/callback/github` (development)
    - Copy the Client ID and Client Secret

2. **Google OAuth**:
    - Go to Google Cloud Console
    - Create a new project or select existing
    - Enable Google OAuth API
    - Configure OAuth consent screen
    - Create credentials (OAuth client ID)
    - Set the authorized redirect URI to `http://localhost:3000/api/auth/callback/google`
    - Copy the Client ID and Client Secret
