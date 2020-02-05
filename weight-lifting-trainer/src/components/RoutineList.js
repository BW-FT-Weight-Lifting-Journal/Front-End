import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../axiosWithAuth";
import { RoutineContext } from "../contexts/RoutineContext";
import axios from "axios";
import RoutineCard from "./RoutineCard";
// export default function RoutineList() {
//   const { routine } = useContext(RoutineContext);
//   console.log(
//     "this is the response.data from app transferred to RoutineList",
//     routine
//   );
//   return (
//     <>
//       <h1>Workout Routines:</h1>

//       <Link to="/workouts/new" className="btn">
//         Create a new workout routine
//       </Link>
//       {routine.map(item => {
//         return (
//           <div className="card" key={item.id}>
//             {/* <Link
//               to={{
//                 pathname: `/api/workouts/${id}/exercises`
//               }}
//             > */}
//             <img
//               className="card"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFPG_ds9_sUzu4zWnsoyGyEtOq3iRB4BVAvNf1zXfcKhVkx7xQw&s"
//               alt="dumbbell"
//             />
//             {/* </Link> */}
//           </div>
//         );
//       })}
//     </>
//   );
// }
export default function Routine() {
  //   const { routine } = useContext(RoutineContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://weight-lifting-journal-web25.herokuapp.com/api/users/2/workouts"
      )
      .then(response => {
        setData(response.data[0]);
        console.log("response", response.data);

        //map with RoutineList either by importing RL or moving this to RL
      });
  }, []);
  return (
    <div className="listOfRoutines">
      {routine.map(routine => {
        return (
          <Link to="/workouts/exercises">
            <RoutineCard
              key={routine.id}
              routine={routine}
              name={data.name}
              workoutName={data.workoutName}
              date={data.date}
            />
          </Link>
        );
      })}
    </div>
  );
}
