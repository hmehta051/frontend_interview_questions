import TabsComponent from "../components/TabsComponent";

const Tabs = () => {
  const tabsData = [
    { title: "First", content: <h3>Content One</h3> },
    { title: "Second", content: <h3>Content Two</h3> },
    { title: "Third", content: <h3>Content Three</h3> },
    { title: "Four", content: <h3>Content Four</h3> },
    { title: "Five", content: <h3>Content Five</h3> },
  ];
  return (
    <TabsComponent
      tabsData={tabsData}
      orientation={"Horizontal"}
      initialActiveTab={1}
      disabledTabs={[1, 2]}
    />
  );
};

export default Tabs;
