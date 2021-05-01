import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { FaciliStoneContext } from "../../FaciliStoneContext";
import { ContentUsers } from "./styleUsers";

export function Users() {
  const { users, cpfMask, user } = useContext(FaciliStoneContext);

  return user.auth ? (
    <ContentUsers>
      {users.map((user) => {
        const newSalary = Number(user.salaryBase) / 100;

        return (
          <div key={user.id}>
            <p>Id: {user.id}</p>
            <p>Nome: {user.name ? user.name : "Sem Informação"}</p>
            <p>Email: {user.email ? user.email : "Sem Informação"}</p>
            <p>
              Nascimento:{" "}
              {new Intl.DateTimeFormat("pt-br", {}).format(
                new Date(user.BirthDate)
              )}
            </p>
            <p>Documento: {cpfMask(user.document)}</p>
            <p>
              Salario:{" "}
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(newSalary)}
            </p>
          </div>
        );
      })}
    </ContentUsers>
  ) : (
    <Redirect to="/" />
  );
}
