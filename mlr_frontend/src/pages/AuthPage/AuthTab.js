import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Signup from "./Signup";
import Signin from "./Signin";

const AuthTab = () => (
  <Tabs>
    <TabList>
      <Tab>Sign In</Tab>
      <Tab>Sign Up</Tab>
    </TabList>

    <TabPanel>
      <Signin />
    </TabPanel>
    <TabPanel>
      <Signup />
    </TabPanel>
  </Tabs>
);

export default AuthTab;

