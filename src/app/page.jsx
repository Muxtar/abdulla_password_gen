'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { use, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCopy } from '@fortawesome/free-solid-svg-icons'
import '../../styles/css/main.css'

export default function Home() {
	const [length, setLength] = useState(0);

	const [upper, setUpper] = useState(false);
	const [lower, setLower] = useState(false);
	const [number, setNumber] = useState(false);
	const [symbol, setSymbol] = useState(false);

	function change(c){
		setLength(c.target.value)
	}

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
					<p className="length">{length}</p>
				</div>
				<div className="middle">
					<div className="range">
						<input type="range" name="" id="" max='20' min='1' defaultValue='0' onChange={change}/>
					</div>
					<div>
						<input type="checkbox" id="upper" onChange={(c)=>{
							setUpper(c.target.checked)
						}}/>
						<label htmlFor="upper">Include Upparcase Letters</label>
					</div>
					<div>
						<input type="checkbox" id="lower" onChange={(c)=>{
							setLower(c.target.checked);
						}}/>
						<label htmlFor="lower">Include Lowercase Letters</label>
					</div>
					<div>
						<input type="checkbox" id="number" onChange={(c)=>{
							setNumber(c.target.checked);
						}}/>
						<label htmlFor="number">Include Numbers</label>
					</div>
					<div>
						<input type="checkbox" id="symbol" onChange={(c)=>{
							setSymbol(c.target.checked)
						}}/>
						<label htmlFor="symbol">Include Symbols</label>
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
					<button onClick={()=>{
						console.log('teleb olunanlar ===>', length, upper, lower, number, symbol);
						
					}}>
						<p>Generate</p>
						<FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
			</div>
		</div>
	</div>
	);
}
