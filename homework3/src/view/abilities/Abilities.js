import React from "react";
import "./abilities.css";

const Abilities = () => {
	return (
		<section id="abilities">
			<h1>Abilities</h1>
			<div className="abilities__content">
				<div className="abilities__content-skills">
					<h3>Skills</h3>
					<table>
						<tr>
							<td>
								<span>HTML/CSS</span>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox"></i>
								<i className="bx bx-checkbox"></i>
							</td>
							<td>
								<span>Object Orientated Programming</span>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox"></i>
							</td>
						</tr>
						<tr>
							<td>
								<span>SQL</span>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
							</td>
							<td>
								<span>SEO</span>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox"></i>
								<i className="bx bx-checkbox"></i>
								<i className="bx bx-checkbox"></i>
							</td>
						</tr>
						<tr>
							<td>
								<span>Jquery</span>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox"></i>
								<i className="bx bx-checkbox"></i>
							</td>
							<td>
								<span>React</span>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox"></i>
								<i className="bx bx-checkbox"></i>
								<i className="bx bx-checkbox"></i>
							</td>
						</tr>
						<tr>
							<td>
								<span>Javascript</span>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox tick"></i>
								<i className="bx bx-checkbox"></i>
							</td>
						</tr>
					</table>
					<p className="see-on-github-p">
						<i>See my profile on github</i>
					</p>
					<a href="#" className="see-on-github-a">
						See project on Github{" "}
					</a>
				</div>
				<div className="abilities__content-languages">
					<h3>Languages</h3>
					<table>
						<tr>
							<td>
								<span>Vietnamese (Native)</span>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
							</td>
							<td>
								<span>Cat (Mother Tongue) </span>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
							</td>
						</tr>
						<tr>
							<td>
								<span>English (IELTS 6.5)</span>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox"></i>
								<i class="bx bx-checkbox"></i>
							</td>
							<td>
								<span>Dog (My enemy)</span>
								<i class="bx bx-checkbox tick"></i>
								<i class="bx bx-checkbox"></i>
								<i class="bx bx-checkbox"></i>
								<i class="bx bx-checkbox"></i>
								<i class="bx bx-checkbox"></i>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</section>
	);
};

export default Abilities;
