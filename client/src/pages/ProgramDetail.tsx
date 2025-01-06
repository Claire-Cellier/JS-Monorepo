import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProgramDeleteForm from "../components/ProgramDeleteForm";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

function ProgramDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState(null as null | Program);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs/${id}`)
      .then((response) => response.json())
      .then((data: Program) => {
        setProgram(data);
      });
  }, [id]);

  return (
    program && (
      <>
        <hgroup className="details-hgroup">
          <h1>{program.title}</h1>
          <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
          <ProgramDeleteForm id={program.id}>Supprimer</ProgramDeleteForm>
        </hgroup>
        <ul>
          <li>
            <Link to={`/programs/${program.id}`}>{program.title}</Link>
          </li>
          <li>
            <Link to={`/programs/${program.id}`}>{program.synopsis}</Link>
          </li>
          <li>
            <Link to={`/programs/${program.id}`}>{program.poster}</Link>
          </li>
          <li>
            <Link to={`/programs/${program.id}`}>{program.country}</Link>
          </li>
          <li>
            <Link to={`/programs/${program.id}`}>{program.year}</Link>
          </li>
          <li>
            <Link to={`/programs/${program.id}`}>{program.category_id}</Link>
          </li>
        </ul>
      </>
    )
  );
}

export default ProgramDetails;
