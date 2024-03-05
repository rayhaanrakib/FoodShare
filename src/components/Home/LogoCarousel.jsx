import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

const LogoCarousel = () => {
    useEffect(() => {
        const slider = new Glide(".glide-09", {
            type: "carousel",
            autoplay: 1,
            animationDuration: 4500,
            animationTimingFunc: "linear",
            perView: 3,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 1,
                },
                640: {
                    perView: 1,
                    gap: 36,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])
    return (
        <div className="grid items-center grid-cols-12 container mx-auto overflow-hidden">
            <div className="col-span-3 flex flex-col items-center justify-center bg-slate-50 h-20 z-50">
                <h2 className="font-semibold text-xl text-primary">Our Partners</h2>
                <h4 className="text-gray-400 text-sm">Trusted by the world’s most innovative teams</h4>
            </div>
            <div className="glide-09 relative w-full h-20 col-span-9 ">
                <div data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li className="flex h-20 items-center justify-center">
                            <img
                                src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_06.png"
                                className="h-10"
                            />
                        </li>
                        <li className="flex h-20 items-center justify-center">
                            <img
                                src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_05.png"
                                className="h-10"
                            />
                        </li>
                        <li className="flex h-20 items-center justify-center">
                            <img
                                src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_04.png"
                                className="h-10"
                            />
                        </li>
                        <li className="flex h-20 items-center justify-center">
                            <img
                                src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/partners_02.png"
                                className="h-10"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;

