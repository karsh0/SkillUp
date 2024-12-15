import { Button } from "./Button"

export const CourseCard = () =>{
    return <div>
        <div className="flex justify-center m-5 mb-10 text-3xl font-semibold">Discover the perfect online course</div>
    <div className="flex justify-center gap-12">
        <div className="rounded-xl max-w-80 border border-gray-300">
                <img className="rounded-t-2xl" src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="" />
                <div className="flex flex-col gap-2 p-2">
                    <h1 className="text-lg font-semibold text-wrap">Complete web development course</h1>
                    <span className="text-lg font-semibold">5999</span>
                    <Button title="View Details" full={true} background={true}/>
                </div>
        </div>
        <div className="rounded-xl max-w-80 border border-gray-300">
                <img className="rounded-t-2xl" src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="" />
                <div className="flex flex-col gap-2 p-2">
                    <h1 className="text-lg font-semibold text-wrap">Complete web development course</h1>
                    <span className="text-lg font-semibold">5999</span>
                    <Button title="View Details" full={true} background={true}/>
                </div>
        </div>
        <div className="rounded-xl max-w-80 border border-gray-300">
                <img className="rounded-t-2xl" src="https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" alt="" />
                <div className="flex flex-col gap-2 p-2">
                    <h1 className="text-lg font-semibold text-wrap">Complete web development course</h1>
                    <span className="text-lg font-semibold">5999</span>
                    <Button title="View Details" full={true} background={true}/>
                </div>
        </div>
    </div>
    </div> 
}