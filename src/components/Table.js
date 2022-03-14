import React from "react";

export const Table = ({ Data }) => {
  const column = Object.keys(Data[0]);
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };
  const tdData = () => {
    return Data.map((data) => {
      return (
        <tr>
          {column.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>{ThData()}</tr>
      </thead>
      <tbody>{tdData()}</tbody>
    </table>
  );
};
