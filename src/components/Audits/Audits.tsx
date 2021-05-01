import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { FaciliStoneContext } from "../../FaciliStoneContext";
import { ContentAudits } from "./styleAudits";

export function Audits() {
  const { audits, user } = useContext(FaciliStoneContext);

  return user.auth ? (
    <ContentAudits>
      {audits.map((audit) => {
        return (
          <div key={audit.id}>
            <p>ID: {audit.id}</p>
            <p>Nome: {audit.before.name}</p>
            <p>Cartão: {audit.before.digits}</p>
            <p>
              Criada:{" "}
              {new Intl.DateTimeFormat("pt-br", {}).format(
                new Date(audit.createdAt)
              )}
            </p>
            <p>Tipo: {audit.type}</p>
            <p>Antes: {audit.before.status}</p>
            <p>Depois: {audit.after.status}</p>
            <p>ID so solicitante: {audit.requestedBy}</p>
          </div>
        );
      })}
    </ContentAudits>
  ) : (
    <Redirect to="/" />
  );
}
