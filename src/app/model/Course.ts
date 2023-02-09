import { Cohort } from "./Cohort";

export class Course{
    courseId!:number;
    courseName!:string;
    courseBrief!:string;
    duration!:number;
    cohortList!:Cohort[];
}
