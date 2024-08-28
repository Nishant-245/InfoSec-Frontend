import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./remidiation_tickets.scss";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Badge,
} from "@mui/material";

export const Remidiationtickets = () => {
  const [activeView, setActiveView] = useState("active");

  const activeTickets = [
    { id: 1, vulnerability: "SQL Injection", dateCreated: "2024-08-15" },
    { id: 2, vulnerability: "Cross-Site Scripting", dateCreated: "2024-08-17" },
  ];

  const resolvedTickets = [
    {
      id: 3,
      vulnerability: "Buffer Overflow",
      dateCreated: "2024-07-12",
      dateResolved: "2024-08-20",
    },
    {
      id: 4,
      vulnerability: "Broken Authentication",
      dateCreated: "2024-07-20",
      dateResolved: "2024-08-22",
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <div className="flex flex-col min-h-screen bg-background">
          <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
              <Link href="#" prefetch={false} passHref>
                <Typography variant="h6" color="inherit" noWrap>
                  Remediation Tickets
                </Typography>
              </Link>
              <div style={{ marginLeft: "auto" }}>
                <Button
                  variant={activeView === "active" ? "contained" : "outlined"}
                  onClick={() => setActiveView("active")}
                  sx={{ marginRight: 2 }}
                >
                  Active Issues
                </Button>
                <Button
                  variant={activeView === "resolved" ? "contained" : "outlined"}
                  onClick={() => setActiveView("resolved")}
                >
                  Resolved Issues
                </Button>
              </div>
            </Toolbar>
          </AppBar>
          <Container sx={{ flexGrow: 1, py: 4 }}>
            <Grid container spacing={4}>
              {activeView === "active" ? (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #123"
                        subheader="Investigate high CPU usage on production server"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Active" color="secondary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #124"
                        subheader="Fix broken image links on the homepage"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Active" color="secondary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #125"
                        subheader="Upgrade database to latest version"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Active" color="secondary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #126"
                        subheader="Investigate slow response times on API endpoints"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Active" color="secondary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #101"
                        subheader="Fix broken image links on the homepage"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Resolved" color="primary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #102"
                        subheader="Upgrade database to latest version"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Resolved" color="primary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #103"
                        subheader="Investigate slow response times on API endpoints"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Resolved" color="primary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                      <CardHeader
                        title="Ticket #104"
                        subheader="Investigate high CPU usage on production server"
                      />
                      <CardContent>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Badge badgeContent="Resolved" color="primary" />
                          <Button size="small" variant="text">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              )}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};
