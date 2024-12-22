import { Appbar } from "../components/Appbar"
import { Banner } from "../components/Banner"
import { CourseCard } from "../components/ui/CourseCard"

export const Homepage = () =>{
    return   <div className="w-full h-full">
        <Appbar/>
        <Banner/>
        <CourseCard/>
    </div>
}