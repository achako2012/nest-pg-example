import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ITimeSlot} from "../../types";

@Entity()
export default class TimeSlotModel implements ITimeSlot {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    doctorId: number;

    @Column('int')
    userId: number;

    @Column('timestamp')
    timeStart: Date;

    @Column('timestamp')
    timeEnd: Date;
}
