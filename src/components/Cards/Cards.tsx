import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { FaciliStoneContext } from "../../FaciliStoneContext";

import { ContentCards } from "./styleCards";

export function Cards() {
  const {
    cards,
    handleSideBar,
    statusChange,
    registerAuditLog,
    user,
  } = useContext(FaciliStoneContext);

  return user.auth ? (
    <ContentCards>
      {cards.map((card) => {
        const cardApproved = {
          createdAt: card.createdAt,
          updatedAt: card.updatedAt,
          status: "approved",
          id: card.id,
          user_id: card.user_id,
          metadatas: {
            name: card.metadatas.name,
            digits: card.metadatas.digits,
            limit: card.metadatas.limit,
          },
        };

        const cardRejected = {
          createdAt: card.createdAt,
          updatedAt: card.updatedAt,
          status: "rejected",
          id: card.id,
          user_id: card.user_id,
          metadatas: {
            name: card.metadatas.name,
            digits: card.metadatas.digits,
            limit: card.metadatas.limit,
          },
        };

        const inputAudits = {
          createdAt: card.createdAt,
          id: card.id,
          metadatas: {
            name: card.metadatas.name,
            digits: card.metadatas.digits,
          },
          digits: card.metadatas.digits,
          name: card.metadatas.name,
          status: card.status,
          updatedAt: card.updatedAt,
          user_id: card.user_id,
        };

        return (
          <div key={card.id}>
            <p>
              Pedido:{" "}
              {new Intl.DateTimeFormat("pt-br", {}).format(
                new Date(card.createdAt)
              )}
            </p>
            <p>Status: {card.status}</p>
            <p>ID: {card.id}</p>
            <p>
              Nome:{" "}
              {card.metadatas.name ? card.metadatas.name : "Sem Informação"}
            </p>
            <p>Final do cartão: {card.metadatas.digits} </p>
            <p>
              Limite:{" "}
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(card.metadatas.limit)}
            </p>
            <div className="approved-rejected">
              <button
                type="button"
                className="approved"
                disabled={card.status !== "requested" ? true : false}
                onClick={() => {
                  handleSideBar();
                  statusChange(cardApproved, card.id);
                  setTimeout(() => {
                    registerAuditLog(inputAudits, card.id);
                  }, 2000);
                }}
              >
                Aprovar
              </button>
              <button
                type="button"
                className="rejected"
                disabled={card.status !== "requested" ? true : false}
                onClick={() => {
                  handleSideBar();
                  statusChange(cardRejected, card.id);
                  setTimeout(() => {
                    registerAuditLog(inputAudits, card.id);
                  }, 2000);
                }}
              >
                Rejeitar
              </button>
            </div>
          </div>
        );
      })}
    </ContentCards>
  ) : (
    <Redirect to="/" />
  );
}
