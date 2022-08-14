import { h } from 'preact';
import Styles from './styles.module.scss';

function WorkPreview({ project }) {
	const { frontmatter } = project;
	return (
		<div className={[ Styles.card].join(" ")}>
           <img src={frontmatter.img} width={60} height={60}></img>
            <h2>{frontmatter.title}</h2>
            <p>
            {frontmatter.description}</p>
            <div className={Styles.tags}>{frontmatter.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
                    </div>
                    {project.url}

		</div>
	);
}

export default WorkPreview;
