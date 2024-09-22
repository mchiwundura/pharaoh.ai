import React, { FunctionComponent } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const settings = {
	meta: {
		title: "",
		social: {
			twitter: "@munyathereal",
		},
	},
};

const socialTags = ({
	openGraphType,
	url,
	title,
	description,
	image,
	createdAt,
	updatedAt,
}: any) => {
	const metaTags = [
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "twitter:site",
			content:
				settings &&
				settings.meta &&
				settings.meta.social &&
				settings.meta.social.twitter,
		},
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{
			name: "twitter:creator",
			content:
				settings &&
				settings.meta &&
				settings.meta.social &&
				settings.meta.social.twitter,
		},
		{ name: "twitter:image:src", content: image },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "og:title", content: title },
		{ name: "og:type", content: openGraphType },
		{ name: "og:url", content: url },
		{ name: "og:image", content: image },
		{ name: "og:description", content: description },
		{
			name: "og:site_name",
			content: settings && settings.meta && settings.meta.title,
		},
		{
			name: "og:published_time",
			content: createdAt || new Date().toISOString(),
		},
		{
			name: "og:modified_time",
			content: updatedAt || new Date().toISOString(),
		},
	];

	return metaTags;
};

type Props = {
	url: string;
	title: string;
	description: string;
	image: string;
	schemaType: string;
	openGraphType: string;
	icon: string;
};

const SEO: FunctionComponent<Props> = (props) => {
	const { url, title, description, image, schemaType } = props;

	return (
		<Head>
			<title>{title} | Munyaradzi Chiwundura</title>
			<meta name='description' content={description} />
			<meta itemProp='name' content={title} />
			<meta itemProp='description' content={description} />
			<meta itemProp='image' content={image} />
			<link rel='icon' href={props.icon} />
			{socialTags(props).map(({ name, content }) => {
				return <meta key={name} name={name} content={content} />;
			})}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "http://schema.org",
						"@type": schemaType,
						name: title,
						about: description,
						url: url,
					}),
				}}
			/>
		</Head>
	);
};

export default SEO;
