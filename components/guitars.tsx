"use client";
import React, { useState, memo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

// React.Memo: Useful when props in components are always the same

const Guitars = function () {
  const guitars = [
    {
      id: 1,
      brand: "Fender",
      model: "American Professional II Mercury Telecaster",
      color: "Mercury",
      country: "United States of America",
      imgUrl: "https://i.ebayimg.com/images/g/kpwAAOSwHvRlEjXF/s-l1600.jpg",
    },
    {
      id: 2,
      brand: "Fender",
      model: "Player Plus Stratocaster",
      color: "Olympic Pearl",
      country: "Mexico",
      imgUrl: "https://i.ebayimg.com/images/g/HT4AAOSwQMVhlnRZ/s-l1600.jpg",
    },
    {
      id: 3,
      brand: "Fender",
      model: "Player Plus Nashville Telecaster",
      color: "Aged Candy Apple Red",
      country: "Mexico",
      imgUrl: "https://i.ebayimg.com/images/g/8D0AAOSw~H1lkCfI/s-l1600.jpg",
    },
    {
      id: 4,
      brand: "Fender",
      model: "JV Modified '60s Custom Telecaster",
      color: "Firemist Gold",
      country: "Japan",
      imgUrl: "https://i.ebayimg.com/images/g/LaYAAOSwXPxiI2av/s-l1600.jpg",
    },
    {
      id: 5,
      brand: "Squier",
      model: "Classic Vibe '60s Custom Telecaster",
      color: "3-Color Sunburst",
      country: "Indonesia",
      imgUrl: "https://i.ebayimg.com/images/g/wb0AAOSwoJNlizlA/s-l1600.jpg",
    },
    {
      id: 5,
      brand: "Squier",
      model: " Classic Vibe Starcaster",
      color: "Natural",
      country: "Indonesia",
      imgUrl: "https://i.ebayimg.com/images/g/dWMAAOSwA7hjU83A/s-l1600.jpg",
    },
  ];

  const columns = [
    {
      key: 1,
      label: "Brand",
    },
    {
      key: 2,
      label: "Model",
    },
    {
      key: 3,
      label: "Color",
    },
    {
      key: 4,
      label: "Country",
    },
    {
      key: 5,
      label: "Photo",
    },
  ];

  const [guitarList, setGuitarList] = useState(guitars);

  return (
    <Table removeWrapper aria-label="Example static collection table">
      <TableHeader>
        {columns.map((column, key) => {
          return <TableColumn key={column.key}>{column.label}</TableColumn>;
        })}
      </TableHeader>
      <TableBody>
        {guitarList.map((guitar, key) => {
          return (
            <TableRow key={guitar.id}>
              <TableCell>{guitar.brand}</TableCell>
              <TableCell>{guitar.model}</TableCell>
              <TableCell>{guitar.color}</TableCell>
              <TableCell>{guitar.country}</TableCell>
              <TableCell>
                <Avatar src={guitar.imgUrl} className="w-20 h-20 text-large" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

const GuitarsMemo = memo(Guitars);
export default GuitarsMemo;
