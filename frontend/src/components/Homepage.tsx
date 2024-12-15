import { Appbar } from "./Appbar"
import { Banner } from "./Banner"
import { CourseCard } from "./ui/CourseCard"

export const Homepage = () =>{
    return   <div className="w-full h-full">
        <Appbar/>
        <Banner/>
        <CourseCard/>
    </div>
}