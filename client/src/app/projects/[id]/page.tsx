"use client";

import React, { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Table from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";
import TimeLine from "../TimeLineView";

type Props = {
  params: { id: string } | Promise<{ id: string }>
};

const Project = ({ params }: Props) => {
  const { id } = params as { id: string };
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
        id={id}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "TimeLine" && (
        <TimeLine id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project as unknown as (props: { params: { id: string } }) => JSX.Element;
