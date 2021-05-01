import React, { createContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

import {
  AnalystsProps,
  AuditProps,
  CardProps,
  CreateContextProps,
  FaciliStoneProviderProps,
  UserProps,
} from "./types/types";

export const FaciliStoneContext = createContext<CreateContextProps>(
  {} as CreateContextProps
);

export function FaciliStoneProvider(props: FaciliStoneProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [audits, setAudits] = useState<AuditProps[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [analysts, setAnalysts] = useState<AnalystsProps[]>([]);

  // Estados usados no Login da APP
  const [user, setUser] = useState({ email: "", password: "", auth: false });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  console.log(email);

  const url =
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:3001/api";

  function inputEmail(event: any) {
    setEmail(event.target.value);
  }

  function inputPassword(event: any) {
    setPassword(event.target.value);
  }

  let loginError = false;
  function authLogin() {
    return analysts.map((analyst) => {
      if (analyst.email === email && analyst.password === password) {
        login(email, password);
      } else loginError = true;
    });
  }

  const login = (email: string, password: string) => {
    setUser((user) => ({
      email: email,
      password: password,
      auth: true,
    }));
    return <Redirect to="/dashboard" />;
  };

  const logout = () => {
    setUser((user) => ({
      email: "",
      password: "",
      auth: false,
    }));
    return <Redirect to="/" />;
  };

  // Inserindo nova auditoria no banco
  const registerAuditLog = async (obj: any, userID: any) => {
    const getAuditsLength = async () => {
      const getAudits = await fetch("http://localhost:3001/api/audits");
      const auditsJSON = await getAudits.json();
      return auditsJSON.length - 1;
    };

    const resCard = await fetch(`http://localhost:3001/api/cards/${userID}`);
    const resCardJSON = await resCard.json();
    const date = new Date();
    const auditID = await getAuditsLength().then((length) => length + 1);
    const objAudit = {
      id: auditID,
      createdAt: date,
      type: "Status_changed",
      before: obj,
      after: {
        createdAt: resCardJSON.createdAt,
        id: resCardJSON.id,
        metadatas: {
          name: resCardJSON.metadatas.name,
          digits: resCardJSON.metadatas.digits,
        },
        digits: resCardJSON.metadatas.digits,
        name: resCardJSON.metadatas.name,
        status: resCardJSON.status,

        user_id: resCardJSON.user_id,
      },
      requestedBy: 11112,
    };

    return await fetch("http://localhost:3001/api/audits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objAudit),
    });
  };

  // Alterando status do Cartão
  const statusChange = async (cardJson: CardProps, id: number) => {
    const statusCardChange = cardJson;

    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(statusCardChange),
    };

    return await fetch(`http://localhost:3001/api/cards/${id}`, config);
  };

  // Tornar a leitura do useEffect funcional assim que rodar a aplicação
  function handleSideBar() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  //Tratando o CPF no formato 101.101.101-10
  function cpfMask(cpf: string) {
    cpf.toString().replace(/[^\d]/g, "");

    return cpf
      .toString()
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  // Pegando os Dados na API
  async function getInfos(info: string) {
    const response = await fetch(`${url}/${info}`);
    return await response.json();
  }
  useEffect(() => {
    getInfos("audits").then((data) => setAudits(data));
    getInfos("cards").then((data) => setCards(data));
    getInfos("users").then((data) => setUsers(data));
  }, [isActive]);

  useEffect(() => {
    getInfos("analysts").then((data) => setAnalysts(data));
  }, []);

  return (
    <FaciliStoneContext.Provider
      value={{
        users,
        cards,
        audits,
        handleSideBar,
        cpfMask,
        statusChange,
        registerAuditLog,
        email,
        password,
        inputEmail,
        inputPassword,
        authLogin,
        user,
        loginError,
        logout,
      }}
    >
      {props.children}
    </FaciliStoneContext.Provider>
  );
}
