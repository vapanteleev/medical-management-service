import React, { Component } from "react";

import { map } from "underscore";

import "./Home.scss";

import Header from "../Header/Header";

// import { ReactComponent as User } from "../../images/emplo.svg"
// import { ReactComponent as Nurse } from "../images/nurse.svg";
import { ReactComponent as Star } from "../../images/star.svg";
import { ReactComponent as House } from "../../images/house.svg";
import { ReactComponent as Clients } from "../../images/clientssvg.svg";
import { ReactComponent as Messages } from "../../images/messages.svg";
import { ReactComponent as Broadcast } from "../../images/brodsvg.svg";
import { ReactComponent as Employees } from "../../images/emplo.svg";
import { ReactComponent as Appointment } from "../../images/appointment.svg";

const TITLE = "Домашняя";

const SECTIONS = [
  { title: "Приёмы", href: "/appointments", Icon: Appointment },
  { title: "События", href: "/events", Icon: Star },
  { title: "Оповещения", href: "/notifications", Icon: Broadcast },
  { title: "Сообщения", href: "/messages", Icon: Messages },
  { title: "Клиенты", href: "/clients", Icon: Clients },
  { title: "Сотрудники", href: "/employees", Icon: Employees },
];

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header
          title={TITLE}
          userName="Иванов Иван Иванович"
          className="Home-Header"
          renderIcon={() => <House className="Header-Icon" />}
        />
        <div className="Home-Body">
          <div className="SectionNavigation">
            {map(SECTIONS, ({ title, href, Icon }) => (
              <a className="SectionNavigation-Item Section" href="#">
                <Icon className="Section-Icon" />
                <span className="Section-Title">{title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
