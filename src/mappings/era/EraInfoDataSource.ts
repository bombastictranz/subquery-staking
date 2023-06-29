import Big from "big.js";

export interface EraInfoDataSource {

    era(): Promise<number>

    eraStakers(): Promise<StakeTarget[]>
}

export interface StakeTarget {

    address: string

    selfStake: bigint

    totalStake: Big

    others: Staker[]
}

export interface Staker {

    address: string

    amount: bigint
}