import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from ".";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    position="sticky"
    zIndex={1}
    top={0}
    justifyContent="space-between"
    sx={{
      backgroundColor: "#000",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default NavBar;
