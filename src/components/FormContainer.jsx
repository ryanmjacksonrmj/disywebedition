import styled from "styled-components"

const FormContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	background-color: black;
	.brand {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: center;
		h1 {
			color: white;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		background-color: purple;
		border-radius: 2rem;
		padding: 3rem 5rem;
	}
	input {
		background-color: transparent;
		padding: 1rem;
		border: 0.1rem solid blue;
		border-radius: 0.4rem;
		color: white;
		width: 100%;
		font-size: 1rem;
		&:focus {
			border: 0.1rem solid pink;
			outline: none;
		}
	}
	button {
		background-color: green;
		color: pink;
		padding: 1rem 2rem;
		border: none;
		cursor: pointer;
		border-radius: 0.4rem;
		font-size: 1rem;
		transition: 0.5s ease-in-out;
		&:hover {
			background-color: orange;
		}
	}
	span {
		color: white;
		a {
			color: magenta;
			text-decoration: none;
			font-weight: bold;
		}
	}
	`

	export default FormContainer;