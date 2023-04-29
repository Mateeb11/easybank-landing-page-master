import MainSection from "./MainSection/MainSection";
import Explanation from "./Explanation/Explanation";
import Articles from "./Articles/Articles";

import classes from "./Content.module.scss";

export default function Content() {
  return (
    <main>
      <h1 className={classes.h1}>Content</h1>
      <MainSection></MainSection>
      <Explanation></Explanation>
      <Articles></Articles>
    </main>
  );
}
