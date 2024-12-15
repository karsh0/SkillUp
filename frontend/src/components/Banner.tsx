import SimpleImageSlider from "react-simple-image-slider";
import { Button } from "./ui/Button";

export const Banner = () => {
    const images = [
        { url: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png" },
        { url: "https://100x-b-mcdn.akamai.net.in/images/adhoc.jpeg" },
        { url: "https://appxcontent.kaxa.in/paid_course3/2024-07-09-0.27031454992467685.png" }
    ];

    return (
        <div className="flex justify-center gap-14 items-center bg-blue-50 h-96 max-h-96">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-semibold text-wrap pb-6">Online coaching that delivers results</h1>
                <span className="text-gray-700">Explore our online courses</span>
                <Button title="Visit Live" background={true}/>
            </div>
                <div className="w-[400px] h-[225px] overflow-hidden rounded-xl">
                    <SimpleImageSlider
                        width={400}
                        height={225}
                        images={images}
                        showBullets={true}
                        showNavs={false}
                        autoPlay={true}
                    />  
                </div>
        </div>
    );
};
