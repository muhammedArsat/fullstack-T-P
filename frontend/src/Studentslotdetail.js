import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export default function StudentSlotDetail() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/slot/get-studentdetail")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <div>
      <h1 style={{ fontFamily: "cursive" }}>Student Details</h1>
      <br></br>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={9} md={9}>
          <Card elevation={7}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                      borderStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                      borderStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    Roll No
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                      borderStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                      borderStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    Project Id
                  </TableCell>
                  <TableCell
                    style={{
                      fontFamily: "cursive",
                      borderStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    Slot
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ borderStyle: "solid" }}>
                {students.map((show) => (
                  <TableRow>
                    <TableCell
                      style={{
                        fontFamily: "cursive",
                        borderStyle: "solid",
                        textAlign: "center",
                      }}
                    >
                      {show.name}
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "cursive",
                        borderStyle: "solid",
                        textAlign: "center",
                      }}
                    >
                      {show.rollno}
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "cursive",
                        borderStyle: "solid",
                        textAlign: "center",
                      }}
                    >
                      {show.email}
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "cursive",
                        borderStyle: "solid",
                        textAlign: "center",
                      }}
                    >
                      {show.pid}
                    </TableCell>
                    <TableCell
                      style={{
                        fontFamily: "cursive",
                        borderStyle: "solid",
                        textAlign: "center",
                      }}
                    >
                      {show.slot}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
