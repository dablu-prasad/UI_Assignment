import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "./Navbar.css"
export default function Navbar() {
	const [open, setOpen] = useState(false);
const [formData,setFormData]=useState({heading:"",description:""})
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};
  const handleSubmit=()=>{
    localStorage.setItem("heading",formData.heading);
    localStorage.setItem("description",formData.description);
  }
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
	return (
		<div className="nav-align">
<div>
<img className="nav-img" src="./logo192.png" />

	
</div>
		
	  <h4>About Us</h4>
				<h4>Blockchain</h4>
				<h4>Services</h4>
				<h4>Engagement</h4>
				<h4>Blogs</h4>
				<h4>Training</h4>
				<h4>Webinar</h4>
      <button type="button"  onClick={handleOpen}>
				Admin Tool
			</button>
			<Modal
				onClose={handleClose}
				open={open}
				style={{
					position: "absolute",
					border: "2px solid #000",
					backgroundColor: "lightgray",
					boxShadow: "2px solid black",
					height: 300,
					width: 240,
					margin: "auto",
					padding: "2%",
					color: "white",
				}}
			>
				<>
        <form onSubmit={handleSubmit}>
				<h4>Heading</h4>
          <input id="heading" name="heading" onChange={handleChange}/>
					<h4>Description</h4>
          <textarea id="description" name="description" onChange={handleChange}/>
          <button >Submit</button>
        </form>
				</>
			</Modal>
		</div>
	);
}
