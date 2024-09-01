import { Module } from "@nestjs/common";
import { TradingPositionModule } from "./tradingPosition/tradingPosition.module";
import { MarketScanModule } from "./marketScan/marketScan.module";
import { TradingScenarioModule } from "./tradingScenario/tradingScenario.module";
import { ChartDescriptionModule } from "./chartDescription/chartDescription.module";
import { SentimentAnalysisModule } from "./sentimentAnalysis/sentimentAnalysis.module";
import { UserFeedbackModule } from "./userFeedback/userFeedback.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    TradingPositionModule,
    MarketScanModule,
    TradingScenarioModule,
    ChartDescriptionModule,
    SentimentAnalysisModule,
    UserFeedbackModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
