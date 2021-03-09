import React, { useEffect, useState } from "react";

export default function Home() {
	let [seconds, setSeconds] = useState(1);

	useEffect(() => {
		let timer = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000);
		// clearing interval
		return () => clearInterval(timer);
	});

	return (
		<div className="App">
			<h1>Number of seconds is {seconds}</h1>
		</div>
	);
}
