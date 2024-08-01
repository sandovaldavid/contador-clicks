"use client";
import styles from "./page.module.css";
import Button from "../Components/Button.jsx";
import Counter from "../Components/Counter.jsx";
import { useState } from "react";

export default function Home() {
	const [clicknum, setClicks] = useState(0);

	const clickFunction = () => {
		setClicks(clicknum + 1);
	};

	const resetCounter = () => {
		setClicks(0);
	};

	return (
		<main className={styles.main}>
			<div className={styles.devsolutionLogoContainer}>
				<img
					className={styles.devsolutionLogo}
					src="/Images/DEVSOLUTION-Logo-2.png"
					alt="Devsolution-Logo"
				/>
			</div>
			<div className={styles.mainContainer}>
				<Counter clicknum={clicknum} />
				<Button
					text="Click"
					isClickButton={true}
					clickFunction={clickFunction}
				/>
				<Button
					text="Reset"
					isClickButton={false}
					clickFunction={resetCounter}
				/>
			</div>
		</main>
	);
}
