import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function DrawerSideBar({ handleSelectedCategory }) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  async function getCat() {
    try {
      const res = await axios.get(url, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA3YTcxNTUzMmMxYTk2ODRmZDRjNTYxMDk1Y2NhYSIsIm5iZiI6MTcyNzg2MjY5OS43NTgwMDAxLCJzdWIiOiI2NmZkMTdhYjZjMzY1OTg1YzhmMjNmMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aR2TSz0MCOlXSMoLjZClgfD_fcGz_Wf1Sf74gnFcD94",
        },
      });

      setCategories(res.data.genres);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    getCat();
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["All Movies", "Top Rated", "Upcoming"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {categories.map((genre, index) => (
          <ListItem key={genre.id} disablePadding>
            <ListItemButton onClick={() => { handleSelectedCategory(genre.id); toggleDrawer(false) }}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={genre.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: "#FFC107", pt: 7, pl: 3, fontSize: "1rem" }}>
        <ArrowBackIosIcon sx={{ color: "white" }} />
        Choose a Category
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
