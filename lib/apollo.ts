/**
 * Apollo Client — configured for use with a headless WordPress backend
 * exposing WPGraphQL. Currently unused (data is static in lib/plugins.ts)
 * but wired up so that swapping to live data is a one-file change.
 *
 * Usage in a Server Component:
 *   import { apolloClient } from "@/lib/apollo";
 *   import { PLUGINS_QUERY } from "@/lib/queries";
 *   const { data } = await apolloClient.query({ query: PLUGINS_QUERY });
 */

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const endpoint =
	process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT ??
	"https://cms.idara.studio/graphql";

export const apolloClient = new ApolloClient({
	link: new HttpLink({
		uri: endpoint,
		// Server-side fetch — Next.js extends fetch with cache controls.
		fetchOptions: {
			next: { revalidate: 60 },
		},
	}),
	cache: new InMemoryCache(),
	ssrMode: typeof window === "undefined",
});
