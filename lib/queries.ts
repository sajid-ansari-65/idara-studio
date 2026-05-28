import { gql } from "@apollo/client";

/**
 * Expected WordPress backend setup:
 *
 *   - Custom Post Type: `plugin` (registered as `plugins` in WPGraphQL)
 *   - Custom fields (Smart Custom Fields or ACF) attached to the plugin CPT,
 *     exposed via WPGraphQL with the field group name `pluginFields`:
 *
 *       arabic_name     (text)
 *       tagline         (text)
 *       status          (radio: "live" | "soon")
 *       icon            (radio: "clock" | "store" | "notice" | "user")
 *       color           (color picker)
 *       bg              (color picker)
 *       version         (text)
 *       wp_requires     (text)
 *       php_requires    (text)
 *       eta             (text)
 *       wporg_url       (text)
 *       tags            (repeater: tag)
 *       features        (repeater: text)
 *       settings        (repeater: label, value)
 *       changelog       (repeater: version, date, notes[])
 *
 * Each query mirrors a helper in lib/plugins.ts so the swap is mechanical.
 */

export const ALL_PLUGINS_QUERY = gql`
	query AllPlugins {
		plugins(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
			nodes {
				slug
				title
				pluginFields {
					arabicName
					tagline
					status
					icon
					color
					bg
					version
					wpRequires
					phpRequires
					eta
					wporgUrl
					tags
				}
			}
		}
	}
`;

export const PLUGIN_BY_SLUG_QUERY = gql`
	query PluginBySlug($slug: ID!) {
		plugin(id: $slug, idType: SLUG) {
			slug
			title
			content
			pluginFields {
				arabicName
				tagline
				status
				icon
				color
				bg
				version
				wpRequires
				phpRequires
				eta
				wporgUrl
				tags
				features
				settings {
					label
					value
				}
				changelog {
					version
					date
					notes
				}
			}
		}
	}
`;

export const ALL_PLUGIN_SLUGS_QUERY = gql`
	query AllPluginSlugs {
		plugins(first: 100) {
			nodes {
				slug
			}
		}
	}
`;
