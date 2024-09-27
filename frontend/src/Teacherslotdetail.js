import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function Teacherslotdetails() {
  const [teacherdetail, setteacherdetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/slot/get-teacherslot")
      .then((res) => res.json())
      .then((result) => {
        setteacherdetail(result);
      });
  }, []);

  return (
    <div>
      <h1 style={{ fontFamily: "cursive" }}>Teachers Details</h1>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={9}>
            <Card elevation={7}>
              <Table>
                <TableHead>
                  <TableRow style={{ borderStyle: "solid" }}>
                    <TableCell
                      style={{ fontFamily: "cursive", borderStyle: "solid" }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "cursive", borderStyle: "solid" }}
                    >
                      Email
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "cursive", borderStyle: "solid" }}
                    >
                      Slot
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teacherdetail.map((show) => (
                    <TableRow style={{ borderStyle: "solid" }}>
                      <TableCell
                        style={{ fontFamily: "cursive", borderStyle: "solid" }}
                      >
                        {show.name}
                      </TableCell>
                      <TableCell
                        style={{ fontFamily: "cursive", borderStyle: "solid" }}
                      >
                        {show.email}
                      </TableCell>
                      <TableCell
                        style={{ fontFamily: "cursive", borderStyle: "solid" }}
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
      </Container>
    </div>
  );
}
