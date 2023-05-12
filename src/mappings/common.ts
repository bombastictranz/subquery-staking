import {RewardCalculator} from "./rewards/RewardCalculator";
import {StakingApy} from "../types";
import {EraInfoDataSource} from "./era/EraInfoDataSource";
import {StakingStats} from "./stats/StakingStats";

export async function handleNewEra(
    eraInfoDataSource: EraInfoDataSource,
    rewardCalculator: RewardCalculator,
): Promise<void> {
    const stakingStats = new StakingStats(
        rewardCalculator,
        eraInfoDataSource,
        chainId
    )

    await stakingStats.indexEraStats()
}

export const unboundedQueryOptions = { limit: 1_000_000 }