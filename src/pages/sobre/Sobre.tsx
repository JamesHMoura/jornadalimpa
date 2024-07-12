import React, { useState } from "react";
import "./Sobre.css";
import urso from '../../assets/Sage_green_bear_desktop_wallpaper_3_-removebg-preview.png';

interface TeamMember {
  name: string;
  imgSrc: string;
  description: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Carol Cruz",
    imgSrc: "https://avatars.githubusercontent.com/u/145583444?v=4",
    description: "Carol Cruz é uma desenvolvedora dedicada com experiência em frontend.",
    role: "Desenvolvedora Frontend"
  },
  {
    name: "Ericles Piana",
    imgSrc: "https://avatars.githubusercontent.com/u/64580059?v=4",
    description: "Ericles Piana é especialista em backend, focado em soluções escaláveis.",
    role: "Especialista Backend"
  },
  {
    name: "Gabriella",
    imgSrc: "https://avatars.githubusercontent.com/u/56032518?v=4",
    description: "Gabriella é uma engenheira de software com paixão por design e UX.",
    role: "Engenheira de Software"
  },
  {
    name: "James",
    imgSrc: "https://avatars.githubusercontent.com/u/165435440?v=4",
    description: "James tem forte habilidade em DevOps e infraestrutura de TI.",
    role: "Especialista em DevOps"
  },
  {
    name: "Kelton",
    imgSrc: "https://avatars.githubusercontent.com/u/85134493?v=4",
    description: "Kelton é um desenvolvedor full-stack com grande interesse em novas tecnologias.",
    role: "Desenvolvedor Full-Stack"
  },
  {
    name: "Weslley",
    imgSrc: "https://avatars.githubusercontent.com/u/146263785?v=4",
    description: "Weslley é um talentoso desenvolvedor de software com foco em segurança.",
    role: "Desenvolvedor de Software"
  },
  {
    name: "Nathalia",
    imgSrc: "https://avatars.githubusercontent.com/u/148877585?v=4",
    description: "Nathalia é uma front-end de grande respeito com foco em design UX.",
    role: "Desenvolvedora Frontend"
  }
];

function Sobre() {
  return (
    <>
      <div className="justificando">
        <div className="pl-14 text-4xl mb-4">
          <h2>Sobre nós</h2>
        </div>
        <div className="pl-14 pr-14 flex">
          <div className="w-1/2 text-justify">
            <p>
              O projeto "Jornada Limpa" é uma iniciativa voltada para os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, com o objetivo de conscientizar as pessoas sobre a importância de reduzir a dependência de substâncias nocivas. Nosso foco é estabelecer uma conexão mais significativa entre usuários e provedores de serviços de e-commerce, promovendo um ambiente online seguro e educacional.
            </p>
            <br />
            <p>
              Em geral, buscamos trazer com a tecnologia soluções para problemas nacionais e mundiais com apoio nosso e da comunidade. Desse modo, nosso time busca constantemente crescer e se unir cada vez mais no combate contra as dependências e vícios.
            </p>
          </div>
          <div className="imagem">
            <img src={urso} alt="Bear" />
          </div>
        </div>
      </div>

      <section className="segunda">
        <div className="w-1/2 mb-4">
          <h2 className="text-white text-4xl">Quem somos?</h2>
        </div>

        <div className="avatar">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="avatar-item"
            >
              <img src={member.imgSrc} alt={member.name} />
              <div className="member-info">
                <h3 className="name">{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Sobre;
