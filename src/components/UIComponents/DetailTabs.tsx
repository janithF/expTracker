import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ py: 3, px: 1 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export interface DetailTab {
  id: number;
  title: string;
  children: React.ReactNode;
}

interface Props {
  tabs: DetailTab[];
}

const DetailTabs = ({ tabs }: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map((tab, index) => (
            <Tab key={`tab-${index}`} label={tab.title} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={`tab-panel-${index}`} value={value} index={index} children={tab.children} />
      ))}
    </Box>
  );
};

export default DetailTabs;
