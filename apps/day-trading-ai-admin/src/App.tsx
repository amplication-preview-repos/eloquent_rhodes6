import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TradingPositionList } from "./tradingPosition/TradingPositionList";
import { TradingPositionCreate } from "./tradingPosition/TradingPositionCreate";
import { TradingPositionEdit } from "./tradingPosition/TradingPositionEdit";
import { TradingPositionShow } from "./tradingPosition/TradingPositionShow";
import { MarketScanList } from "./marketScan/MarketScanList";
import { MarketScanCreate } from "./marketScan/MarketScanCreate";
import { MarketScanEdit } from "./marketScan/MarketScanEdit";
import { MarketScanShow } from "./marketScan/MarketScanShow";
import { TradingScenarioList } from "./tradingScenario/TradingScenarioList";
import { TradingScenarioCreate } from "./tradingScenario/TradingScenarioCreate";
import { TradingScenarioEdit } from "./tradingScenario/TradingScenarioEdit";
import { TradingScenarioShow } from "./tradingScenario/TradingScenarioShow";
import { ChartDescriptionList } from "./chartDescription/ChartDescriptionList";
import { ChartDescriptionCreate } from "./chartDescription/ChartDescriptionCreate";
import { ChartDescriptionEdit } from "./chartDescription/ChartDescriptionEdit";
import { ChartDescriptionShow } from "./chartDescription/ChartDescriptionShow";
import { SentimentAnalysisList } from "./sentimentAnalysis/SentimentAnalysisList";
import { SentimentAnalysisCreate } from "./sentimentAnalysis/SentimentAnalysisCreate";
import { SentimentAnalysisEdit } from "./sentimentAnalysis/SentimentAnalysisEdit";
import { SentimentAnalysisShow } from "./sentimentAnalysis/SentimentAnalysisShow";
import { UserFeedbackList } from "./userFeedback/UserFeedbackList";
import { UserFeedbackCreate } from "./userFeedback/UserFeedbackCreate";
import { UserFeedbackEdit } from "./userFeedback/UserFeedbackEdit";
import { UserFeedbackShow } from "./userFeedback/UserFeedbackShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DayTradingAI"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TradingPosition"
          list={TradingPositionList}
          edit={TradingPositionEdit}
          create={TradingPositionCreate}
          show={TradingPositionShow}
        />
        <Resource
          name="MarketScan"
          list={MarketScanList}
          edit={MarketScanEdit}
          create={MarketScanCreate}
          show={MarketScanShow}
        />
        <Resource
          name="TradingScenario"
          list={TradingScenarioList}
          edit={TradingScenarioEdit}
          create={TradingScenarioCreate}
          show={TradingScenarioShow}
        />
        <Resource
          name="ChartDescription"
          list={ChartDescriptionList}
          edit={ChartDescriptionEdit}
          create={ChartDescriptionCreate}
          show={ChartDescriptionShow}
        />
        <Resource
          name="SentimentAnalysis"
          list={SentimentAnalysisList}
          edit={SentimentAnalysisEdit}
          create={SentimentAnalysisCreate}
          show={SentimentAnalysisShow}
        />
        <Resource
          name="UserFeedback"
          list={UserFeedbackList}
          edit={UserFeedbackEdit}
          create={UserFeedbackCreate}
          show={UserFeedbackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
