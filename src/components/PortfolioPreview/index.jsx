import Styles from './styles.module.scss';

function PortfolioPreview({ project }) {
	const { frontmatter } = project;
	return (
		<div className={Styles.card}>
			<img className={Styles.img} src={frontmatter.img} alt="Maurer Krisztián" />
			<div className="pa3">
				<p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
				<div className={Styles.tags}>
					Tagged:
					{frontmatter.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a className={Styles.link} href={project.url}>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
