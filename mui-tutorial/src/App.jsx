/** @format */
// import Buttons from "./components/Buttons";
// import TypographyExamples from "./components/TypographyExamples";
// import TextFieldExamples from "./components/TextFieldExamples";
// import RadioGroupExamples from "./components/RadioGroupExamples";
// import CheckBoxExamples from "./components/CheckBoxExamples";
// import RatingExamples from "./components/RatingExamples";
// import SwitchExamples from "./components/SwitchExamples";
// import SelectExamples from "./components/SelectExamples";
// import AutoCompleteExamples from "./components/AutoCompleteExamples";
// import LayoutBox from "./layouts/LayoutBox";
// import LayoutStack from "./layouts/LayoutStack";
// import LayoutContainer from "./layouts/LayoutContainer";
// import LayoutGrid from "./layouts/LayoutGrid";
// import LayoutResponsive from "./layouts/LayoutResponsive";
// import LayoutAccordion from "./layouts/LayoutAccordion";
// import LayoutAppbar from "./layouts/LayoutAppbar";
// import LayoutComponentCard from "./layouts/LayoutComponentCard";
// import DarkMode from "./theming/DarkMode";
// import StyledUtility from "./theming/StyledUtility";
// import Theming from "./theming/Theming";

import Form from "./state-management/Form";
import StateOne from "./state-management/StateOne";
import TablePage from "./state-management/TablePage"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* <TypographyExamples /> */}
      {/* <Buttons /> */}
      {/* <TextFieldExamples /> */}
      {/* <RadioGroupExamples /> */}
      {/* <CheckBoxExamples /> */}
      {/* <SwitchExamples /> */}
      {/* <RatingExamples /> */}
      {/* <SelectExamples /> */}
      {/* <AutoCompleteExamples /> */}
      {/* <LayoutBox /> */}
      {/* <LayoutStack /> */}
      {/* <LayoutContainer /> */}
      {/* <LayoutGrid /> */}
      {/* <LayoutResponsive /> */}
      {/* <LayoutComponentCard /> */}
      {/* <LayoutAccordion /> */}
      {/* <LayoutAppbar /> */}
      {/* <Theming /> */}
      {/* <DarkMode /> */}
      {/* <StyledUtility /> */}
      {/* <StateOne /> */}
      <BrowserRouter>
        <Routes path='/'>
          <Route index element={<Form />} />
          <Route path='/state-one' element={<StateOne />} />
          <Route path='/table' element={<TablePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
