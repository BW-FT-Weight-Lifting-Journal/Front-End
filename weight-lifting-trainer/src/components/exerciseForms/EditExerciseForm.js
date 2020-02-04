import React  from "react";

import { useForm } from 'react-hook-form';

export default function EditExerciseForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="exercise name" name="exerciseName" ref={register({required: true})} />
      <input type="number" placeholder="amount of reps" name="repsAmount" ref={register({required: true})} />
      <input type="datetime" placeholder="date" name="date" ref={register} />
      <textarea name="regionOfBody" placeholder="region of body" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}