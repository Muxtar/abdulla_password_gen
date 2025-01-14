import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCopy } from '@fortawesome/free-solid-svg-icons'
import '../../styles/css/main.css'

export default function Home() {
  return (
    <div className="main">
    	<div className="password-generator">
			<div className="head">
				<h3>Password generator</h3>
			</div>
			<div className="result">
				<h1>sasadsdsfdf</h1>
				<FontAwesomeIcon icon={faCopy} />
			</div>
			<div className="body">
				<div className="head">
					<p>Character length</p>
					<p className="length">0</p>
				</div>
				<div className="middle">
					<div className="range">
						<input type="range" name="" id="" max='20' min='1' defaultValue='0'/>
					</div>
					<div>
						<input type="checkbox" />
						<label htmlFor="">Include Upparcase Letters</label>
					</div>
					<div>
						<input type="checkbox" />
						<label htmlFor="">Include Lowercase Letters</label>
					</div>
					<div>
						<input type="checkbox" />
						<label htmlFor="">Include Numbers</label>
					</div>
					<div>
						<input type="checkbox" />
						<label htmlFor="">Include Symbols</label>
					</div>
				</div>
				<div className="strong">
					<div>STRENGTH</div>
					<div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div className="submit">
					<button>
						<p>Generate</p>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
		</div>
    </div>
  );
}
