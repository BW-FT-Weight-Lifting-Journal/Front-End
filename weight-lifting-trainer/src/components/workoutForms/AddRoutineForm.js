import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, InputGroup, Input } from "reactstrap";
import * as yup from "yup";

const schema = yup.object().shape({
	routine: yup.string().required("Give it a cool name"),

	muscle: yup.string().required("What areas of the body does this target?")
});

export default function AddRoutineForm() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<section>
			<div>
				<h2>Add Routine</h2>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup>
					<Input
						type="text"
						placeholder="Name Your Routine"
						name="routine"
						ref={register}
					/>
					{errors.routine && <p>{errors.routine.message}</p>}

					<Input
						type="text"
						placeholder="Target Muscles"
						name="muscle"
						ref={register}
					/>
					{errors.muscle && <p>{errors.muscle.message}</p>}

					<Button type="submit" color="success">
						SUBMIT
					</Button>
				</InputGroup>
			</form>
			<div>
				<Button outline color= "secondary">Delete</Button>
				<Button outline color="secondary">Copy</Button>
				<Button color="success">Save</Button>
			</div>
		</section>
	);
}

//styles

const StyledButton = styled.button`
	background-color: #00a35e;
	color: white;
	padding: 0.5%;
	font-weight: bold;
	font-family: Roboto;
	font-size: 16px;
	border-radius: 5px;
`;

const StyledLink = styled(Link)`
	color: white;
	:hover & {
		text-decoration: none;
	}
`;
