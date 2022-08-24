import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href="/">
				<div className={Styles.monogram}>MK</div>
			</a>
			<a className={Styles.link} href="/projects">
				Portfolio
			</a>
			<a className={Styles.link} href="/works">
				Works
			</a>
			<a className={Styles.link} href="/about">
				About
			</a>
			<a className={Styles.link} href="/blog">
				Blog
			</a>
		</nav>
	);
}
export default Nav;
