import { DistanceType } from "../enum/distance-type.enum";
import { PaceType } from "../enum/pace-type.enum";

export class PaceCalculator {
    timeHour: number;
    timeMinute: number;
    timeSecond: number;
    paceHour: number;
    paceMinute: number;
    paceSecond: number;
    paceType: PaceType;
    distance: number;
    distanceType: DistanceType;
}