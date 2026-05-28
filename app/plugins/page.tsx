import { getAllPlugins } from "@/lib/plugins";
import { PluginsClient } from "./plugins-client";

export const metadata = {
	title: "Plugins",
	description: "The full Idara studio catalogue of Gutenberg blocks for WordPress.",
};

export default function PluginsPage() {
	const plugins = getAllPlugins();
	return <PluginsClient plugins={plugins} />;
}
