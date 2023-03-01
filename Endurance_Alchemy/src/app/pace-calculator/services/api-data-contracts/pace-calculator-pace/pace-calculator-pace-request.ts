import { DistanceType } from "src/app/pace-calculator/store/enum/distance-type.enum";
import { PaceType } from "src/app/pace-calculator/store/enum/pace-type.enum";

export interface PaceCalculatorPaceRequest {
    timeHour: number;
    timeMinute: number;
    timeSecond: number;
    distance: number;
    distanceType: DistanceType;
    paceType: PaceType;
}