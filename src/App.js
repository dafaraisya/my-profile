import { useRef, useEffect } from 'react';
import logoBrand from './logo_brand.svg';
import mapKendal from './map_kendal.svg';
import flutter_logo from './flutter_logo.png';
import firebase_logo from './firebase_logo.png';
import vuejs_logo from './vuejs_logo.png';
import nodejs_logo from './nodejs_logo.png';
import react_logo from './react_logo.png';
import mongodb_logo from './mongodb_logo.png';
import './App.css';
import { Navbar, Nav, Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap, Power3, Sine, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
	let aboutMeTitle = useRef(null);
	let aboutMeTitle2 = useRef(null);
	let aboutMeContent = useRef(null);
	let aboutMeBackground = useRef(null);
	let expertise = useRef(null);
	let expertiseTitle = useRef(null);
	let expertiseItem = useRef(null);
	let expertiseItem1 = useRef(null);
	let expertiseItem2 = useRef(null);
	let expertiseItem3 = useRef(null);
	let expertiseItem4 = useRef(null);
	let expertiseItem5 = useRef(null);
	let expertiseItem6 = useRef(null);

	useEffect(() => {
		// about me
		gsap.from(
			aboutMeTitle,
			{
				fontSize: 150, 
				duration: 2,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeTitle,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
				
			},
		);
		gsap.from(
			aboutMeTitle2,
			{
				fontSize: 150, 
				duration: 2,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeTitle,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
				
			},
		);
		gsap.from(
			aboutMeContent,
			{
				opacity: 0,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeContent,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
			},
		);
		gsap.from(
			aboutMeBackground,
			{
				y: 10,
				opacity: 0,
				ease: Power3.easeOut, 
				scrollTrigger: {
					trigger: aboutMeBackground,
					toggleActions: "restart complete reverse reset",
					scrub: true,
				},
			},
		);

		// expertise
		const colorToBlack = gsap.fromTo(
			expertise, 
			{ 
				backgroundColor: "rgba(255, 255, 255, 0.0)"
			},
			{ 	backgroundColor: "#000000", 
				color: "white",
			}
		)
		
		ScrollTrigger.create({
			trigger: expertiseTitle,
			start: "top-=10px",
			end: "+=10px",
			scrub: true,
			animation: colorToBlack
		});

		const expertiseItem1 = document.getElementById("expertiseItem1");
		const expertiseItem2 = document.getElementById("expertiseItem2");
		const expertiseItem3 = document.getElementById("expertiseItem3");
		const expertiseItem4 = document.getElementById("expertiseItem4");
		const expertiseItem5 = document.getElementById("expertiseItem5");
		const expertiseItem6 = document.getElementById("expertiseItem6");
		const expertiseBackground = document.getElementById("expertise");

		const hoverIn = (id, color) => gsap.to(id, {
			scaleX:1.05, scaleY:1.05, scaleZ:1.05,
			backgroundColor: color,
			duration: 1.5,
			paused: true,
			ease: "ease-in-out"
		});
		const hoverLeave = (idElement) => gsap.to(idElement, {
			scaleX:1.0, scaleY:1.0, scaleZ:1,
			backgroundColor: 'rgb(26, 26, 26)',
			duration: 1.5,
			paused: true,
			ease: "ease-in-out",
		});

		const changeBackgroundExpertise = (idElement, color) => gsap.to(
			idElement, {
				backgroundColor: color,
			}
		);

		const resetChangeBackgroundExpertise = (idElement) => gsap.to(
			idElement, {
				backgroundColor: "#000000",
			}
		);

		expertiseItem1.addEventListener("mouseenter", () => hoverIn(expertiseItem1, "rgb(40, 182, 246)").play());
		expertiseItem1.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(40, 182, 246)").play());
		expertiseItem1.addEventListener("mouseleave", () => hoverLeave(expertiseItem1).play());
		expertiseItem1.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem2.addEventListener("mouseenter", () => hoverIn(expertiseItem2, "rgb(242, 192, 40)").play());
		expertiseItem2.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(242, 192, 40)").play());
		expertiseItem2.addEventListener("mouseleave", () => hoverLeave(expertiseItem2).play());
		expertiseItem2.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem3.addEventListener("mouseenter", () => hoverIn(expertiseItem3, "rgb(0, 116, 77)").play());
		expertiseItem3.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(0, 116, 77)").play());
		expertiseItem3.addEventListener("mouseleave", () => hoverLeave(expertiseItem3).play());
		expertiseItem3.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem4.addEventListener("mouseenter", () => hoverIn(expertiseItem4, "rgb(79, 123, 25)").play());
		expertiseItem4.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(79, 123, 25)").play());
		expertiseItem4.addEventListener("mouseleave", () => hoverLeave(expertiseItem4).play());
		expertiseItem4.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		
		expertiseItem5.addEventListener("mouseenter", () => hoverIn(expertiseItem5, "rgb(0, 130, 153)").play());
		expertiseItem5.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(0, 130, 153)").play());
		expertiseItem5.addEventListener("mouseleave", () => hoverLeave(expertiseItem5).play());
		expertiseItem5.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());

		expertiseItem6.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());
		expertiseItem6.addEventListener("mouseenter", () => hoverIn(expertiseItem6, "rgb(40, 95, 34)").play());
		expertiseItem6.addEventListener("mouseenter", () => changeBackgroundExpertise(expertiseBackground, "rgb(40, 95, 34)").play());
		expertiseItem6.addEventListener("mouseleave", () => hoverLeave(expertiseItem6).play());
		expertiseItem6.addEventListener("mouseleave", () => resetChangeBackgroundExpertise(expertiseBackground).play());

		// my portfolio
	}, [])

	return (
		<div className="App">
			{/* navbar */}
			<Navbar expand="lg" className='Navbar-custom'>
				<Container>
					<Navbar.Brand href="#home" className='Nav-item-logo'>
						<img src={logoBrand} style={{ height: "35px" }} alt="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
						<Nav>
							<Nav.Link href="#home" className='Nav-item Nav-item-active'><p>Home</p></Nav.Link>
							<Nav.Link href="#home" className='Nav-item' ><p>About Me</p></Nav.Link>
							<Nav.Link href="#home" className='Nav-item' ><p>My Projects</p></Nav.Link>
							<Nav.Link href="#home" className='Nav-item' ><p>Contact</p></Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* jumbotron */}
			<div className="Jumbotron">
				<div id="jumbotron-background"></div>
				<h2>// lorem ipsum lorem :)</h2>
				<span>Scroll For More!</span>
				<div class="Arrow_for_more">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			{/* about me */}
			<div className="About-me">
				<span ref={el => { aboutMeTitle = el }} className="About-me-title">About Me</span><br></br>
				<span ref={el => { aboutMeTitle2 = el }} className="About-me-title2">Hi! I'm Dafa</span><br></br>
				<p ref={el => { aboutMeContent = el }} className="About-me-content">A developer from Kendal, a small city in Indonesia.<br></br> 
				currently i'm being student in Sepuluh Nopember Institute of Technology. <br></br> I have a lot of interest in web development and Mobile Development. 
				<br></br>Here's some of my works.</p>
				<img src={mapKendal} ref={el => { aboutMeBackground = el }} className="About-me-background" alt="logo" />
			</div>

			{/* expertise */}
			<div ref={el => { expertise = el }} className="Expertise" id='expertise'>
				<div className='Expertise-content'>
					<div ref={el => { expertiseTitle = el }} className='Expertise-title'>STACK / FRAMEWORK<br></br>THAT I USED</div> 
					<Row>
						<Col xs={6} md={4}>
							<a href='https://flutter.dev/'>
								<div ref={el => { expertiseItem1 = el }} className='Expertise-item Expertise-item-1' id='expertiseItem1'>
									<img className='Expertise-logo-1' width={150} src={flutter_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://firebase.google.com/">
								<div ref={el => { expertiseItem2 = el }} className='Expertise-item Expertise-item-2' id='expertiseItem2'>
									<img className='Expertise-logo-2' width={240} src={firebase_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://vuejs.org/">
								<div ref={el => { expertiseItem3 = el }} className='Expertise-item Expertise-item-3' id='expertiseItem3'>
									<img className='Expertise-logo-3' width={180} src={vuejs_logo}></img>
								</div>
							</a>
						</Col>
					</Row>
					<Row>
						<Col xs={6} md={4}>
							<a href="https://nodejs.org/en/">
								<div ref={el => { expertiseItem4 = el }} className='Expertise-item-new-row Expertise-item-4' id='expertiseItem4'>
									<img className='Expertise-logo-4' width={280} src={nodejs_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://reactjs.org/">
								<div ref={el => { expertiseItem5 = el }} className='Expertise-item-new-row Expertise-item-5' id='expertiseItem5'>
									<img className='Expertise-logo-5' width={240} src={react_logo}></img>
								</div>
							</a>
						</Col>
						<Col xs={6} md={4}>
							<a href="https://www.mongodb.com/">
								<div ref={el => { expertiseItem6 = el }} className='Expertise-item-new-row Expertise-item-6' id='expertiseItem6'>
									<img className='Expertise-logo-6' width={240} src={mongodb_logo}></img>
								</div>
							</a>
						</Col>
					</Row>
				</div>
			</div>

			{/* my project */}
			<div className='Expertise-to-my-project'></div>
			<div className='My-project'>
				<div className='My-project-title'>
					<span>My Project</span>
					<span>Pemira HIMATIPA UGM FMIPA UNS</span>
				</div>
				<hr />
				<div className='My-project-control'>
					<span><i class="bi bi-arrow-left-circle"></i></span>
					<span><i class="bi bi-arrow-right-circle"></i></span>
				</div>
			</div>

			{/* carousel */}
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
					className="d-block w-100"
					src="holder.js/800x400?text=First slide&bg=373940"
					alt="First slide"
					/>
					<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
					className="d-block w-100"
					src="holder.js/800x400?text=Second slide&bg=282c34"
					alt="Second slide"
					/>
					<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src="holder.js/800x400?text=Third slide&bg=20232a"
					alt="Third slide"
					/>
					<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default App;
