import MainSection from "./MainSection/MainSection";
import Explanation from "./Explanation/Explanation";
import Articles from "./Articles/Articles";

import classes from "./Content.module.scss";

export default function Content() {
  return (
    <main>
      <MainSection></MainSection>
      <Explanation></Explanation>
      <Articles></Articles>
    </main>
  );
}
