import { AiFillHtml5, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { NodejsOriginalIcon, ExpressOriginalIcon, DjangoOriginalIcon } from 'react-devicons';
import { AmazonwebservicesOriginalIcon, GooglecloudOriginalIcon, AzureOriginalIcon, OracleOriginalIcon } from 'react-devicons';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaTrello } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> }
		]
	},
		{
			category: "Back-end",
			items: [
				{ name: "Node.js", icon: <NodejsOriginalIcon size={32} /> },
				{ name: "Express.js", icon: <ExpressOriginalIcon size={32} /> },
				{ name: "Django", icon: <DjangoOriginalIcon size={32} /> },
			]
		},
		{
			category: "Cloud",
			items: [
				{ name: "AWS", icon: <AmazonwebservicesOriginalIcon size={32} /> },
				{ name: "GCP", icon: <GooglecloudOriginalIcon size={32} /> },
				{ name: "Azure", icon: <AzureOriginalIcon size={32} /> },
				{ name: "Oracle", icon: <OracleOriginalIcon size={32} /> },
				// ... other items
			]
		},
	{
		category: "Other tools",
		items: [
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> },
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "WebStorm", icon: <WebstormIcon width={32} /> }
		]
	}
];
