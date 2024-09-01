import { TradingScenario as TTradingScenario } from "../api/tradingScenario/TradingScenario";

export const TRADINGSCENARIO_TITLE_FIELD = "scenarioName";

export const TradingScenarioTitle = (record: TTradingScenario): string => {
  return record.scenarioName?.toString() || String(record.id);
};
