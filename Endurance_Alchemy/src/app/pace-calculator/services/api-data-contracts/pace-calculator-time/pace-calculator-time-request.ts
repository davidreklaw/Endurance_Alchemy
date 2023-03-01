import { DistanceType } from "src/app/pace-calculator/store/enum/distance-type.enum";
import { PaceType } from "src/app/pace-calculator/store/enum/pace-type.enum";

export interface PaceCalculatorTimeRequest {
    paceHour: number;
    paceMinute: number;
    paceSecond: number;
    paceType: PaceType;
    distance: number;
    distanceType: DistanceType;
}