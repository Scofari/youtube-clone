import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ name, icon }) => (
        <button
          key={name}
          className="category-btn"
          onClick={() => setSelectedCategory(name)}
          style={{
            backgroundColor: name === selectedCategory ? "#fc1503" : "",
            color: "white",
          }}
        >
          <span
            style={{
              color: name === selectedCategory ? "white" : "red",
              marginRight: 15,
            }}
          >
            {icon}
          </span>
          <span
            style={{
              opacity: name === selectedCategory ? "1" : "0.8",
              marginRight: 15,
            }}
          >
            {name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
