import React, { Component } from "react";

import { map } from "underscore";
import Moment from "react-moment";

import "./Appointments.scss";

import Table from "../components/Table/Table";
import Header from "../components/Header/Header";

import { ReactComponent as Appointment } from "../images/appointment.svg";

import { appointments as data } from "../lib/MockData";

const TITLE = "Приёмы";

export default class Appointments extends Component {
  render() {
    return (
      <div className="Appointments">
        <Header
          title={TITLE}
          userName="Иванов Иван Иванович"
          className="Appointments-Header"
          renderIcon={() => <Appointment className="Header-Icon" />}
        />
        <div className="Appointments-Body">
          <Table
            data={data}
            columns={[
              {
                dataField: "date",
                text: "Дата",
                headerStyle: {
                  width: "200px",
                },
                formatter: (v, row) => {
                  return <Moment date={v} format="DD.MM.YYYY HH.mm" />;
                },
              },
              {
                dataField: "clientName",
                text: "Клиент",
              },
              {
                dataField: "status",
                text: "Статус",
              },
              {
                dataField: "holderName",
                text: "Принимающий",
              },
              {
                dataField: "compliences",
                text: "Жалобы",
              },
              {
                dataField: "diagnosis",
                text: "Диагноз",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
