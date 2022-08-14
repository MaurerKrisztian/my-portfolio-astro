import { h } from 'preact';
import Styles from './styles.module.scss';

function DownloadBtn() {
	return (
		<downloadBtn className={Styles.footer}>

{/* <link href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' rel='stylesheet'/>
<div className={Styles.whitebuttondemo}>
<a href="#" target="_blank">Demo Button</a><br/>
<span className={Styles.up}>click to Download</span></div>
<br/> */}

<div className={Styles.whitebutton} >
<a href="/assets/cv.pdf" target="_blank">Download resume</a><br/>
<span className={Styles.up} >click to Download</span><br/>
<span className={Styles.down}>139.9kB .pdf</span></div>
			
		</downloadBtn>
	);
}
export default DownloadBtn;
