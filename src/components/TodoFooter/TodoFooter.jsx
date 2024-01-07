import React from 'react' ;
import "./TodoFooter.css"
function TodoFooter() {

	return (
		<div className="footer">
			<a
				href="https://bigdevsoon.me"
				target="_blank"
				rel="noopener noreferrer"
			>Project by BigDevSoon </a>
			|
			<span id="span"> Built by [Hakim] </span> {/* <Change the [ME] part to your own name/GitHub link  */}
		</div>
	);
}

export default TodoFooter;

