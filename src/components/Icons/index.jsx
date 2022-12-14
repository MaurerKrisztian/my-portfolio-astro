import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	return (
		<div style={{display: "flex"}}>
			<a className={Styles.social} href="https://github.com/MaurerKrisztian">
				<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clip-rule="evenodd"/></svg>
			</a>
			<a className={Styles.social} href="https://dev.to/maurerkrisztian">
			<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" /><path fill="black" d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569l1.188-4.569h1.31l-1.546 5.818z"/></svg>
			</a>
			
			<a className={Styles.social} target="_blank" href="https://profile.codersrank.io/user/maurerkrisztian">
			<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" width="1.57em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 164"><rect x="0" y="0" width="256" height="164" fill="none" stroke="none" /><path fill="#19223C" d="M139.54.23L9.01 82.4C2.863 86.117-.142 90.28.005 94.892v12.506c.147 4.616 3.223 8.708 9.233 12.28l64.599 37.286a3.047 3.047 0 0 0 4.393-1.565l14.504-35.05l-30.761-17.417a5.524 5.524 0 0 1-2.157-2.001a5.645 5.645 0 0 1 .278-6.332a5.653 5.653 0 0 1 1.656-1.49l56.474-34.61l23.287-56.705a1.361 1.361 0 0 0-.432-1.511a1.307 1.307 0 0 0-.765-.284a1.308 1.308 0 0 0-.783.23h.008Z"/><path fill="#67A4AC" d="M246.763 46.002L183.05 7.376a3.046 3.046 0 0 0-4.394 1.343l-14.94 35.05l30.32 18.088a5.485 5.485 0 0 1 2.107 2.048a5.651 5.651 0 0 1 0 5.72a5.523 5.523 0 0 1-2.106 2.056l-56.911 33.49l-24.173 56.264a1.357 1.357 0 0 0 .11 1.897a1.314 1.314 0 0 0 1.457.206a1.31 1.31 0 0 0 .41-.316l41.752-25.23l16.48 23.67a3.974 3.974 0 0 0 3.295 1.783h39.553a3.91 3.91 0 0 0 3.492-2.124a4.07 4.07 0 0 0-.197-4.13l-26.809-41.084l54.276-32.818c6.152-3.722 9.228-7.89 9.228-12.506v-12.28c0-4.616-3.076-8.779-9.233-12.501h-.004Z"/></svg>
				</a>
			<a className={Styles.social} target="_blank" href="https://hashnode.com/@maurerkrisztian">
			<svg  className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><rect x="0" y="0" width="256" height="256" fill="none" stroke="none" /><path fill="#2962FF" fill-rule="evenodd" d="M17.591 85.533c-23.455 23.455-23.455 61.479 0 84.932l67.943 67.944c23.455 23.453 61.479 23.453 84.932 0l67.944-67.944c23.453-23.455 23.453-61.48 0-84.932L170.466 17.59c-23.455-23.452-61.48-23.452-84.932 0L17.59 85.533Zm140.134 72.193c16.418-16.419 16.418-43.036 0-59.452c-16.417-16.419-43.034-16.419-59.45 0c-16.419 16.418-16.419 43.033 0 59.452c16.418 16.416 43.033 16.416 59.452 0h-.002Z"/></svg>
				</a>
			<a className={Styles.social} target="_blank" href="https://www.linkedin.com/in/kriszti%C3%A1n-maurer-7681a6192/">
			<svg className={Styles.socialicon} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><rect x="0" y="0" width="256" height="256" fill="none" stroke="none" /><path fill="#0A66C2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg>
			</a>
			
					</div>
	);
}
export default Nav;
