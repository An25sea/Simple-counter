import React from "react";
import { Button } from "bootstrap";
//import props from "prop-types";

export function BtnComponent(props) {
	return (
		<div>
			{props.status === 0 ? (
				<button
					className="stopwatch-btn stopwatch-btn-gre"
					onClick={props.start}>
					Start
				</button>
			) : (
				""
			)}
			{props.status === 1 ? (
				<div>
					<button
						className="stopwatch-btn stopwatch-btn-red"
						onClick={props.stop}>
						Stop{" "}
					</button>
					<button
						className="stopwatch-btn stopwatch-btn-yel"
						onClick={props.reset}>
						Reset{" "}
					</button>
				</div>
			) : (
				""
			)}

			{props.status === 2 ? (
				<div>
					<button
						className="stopwatch-btn stopwatch-btn-gre"
						onClick={props.resume}>
						Resume{" "}
					</button>
					<button
						className="stopwatch-btn stopwatch-btn-yel"
						onClick={props.reset}>
						Reset{" "}
					</button>
				</div>
			) : (
				""
			)}
		</div>
	);
}

//BtnComponent.propTypes = {
//status: propTypes.number,
//reset: propTypes.number,
//start: propTypes.number,
//resume: propTypes.number,
//stop: propTypes.number
//};
