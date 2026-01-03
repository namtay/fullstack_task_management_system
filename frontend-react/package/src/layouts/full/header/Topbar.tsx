import { Icon } from "@iconify/react/dist/iconify.js";
import wrappixel_logo from "/src/assets/images/logos/logo-wrappixel.svg";
import { Link } from "react-router";
// import { Dropdown } from "flowbite-react/components/Dropdown";

// import img1 from "src/assets/images/svgs/react-cat-icon.svg";
// import img2 from "src/assets/images/svgs/angular-cat-icon.svg";
// import img3 from "src/assets/images/svgs/vue-cat-icon.svg";
// import img4 from "src/assets/images/svgs/nuxt-cat-icon.svg";
// import img5 from "src/assets/images/svgs/next-cat-icon.svg";
// import img6 from "src/assets/images/svgs/bt-cat-icon.svg";


const Topbar = () => {
    // const dropdownItems = [
    //     {
    //         id: 1,
    //         img: img1,
    //         title: "React Version",
    //         href: "https://www.wrappixel.com/templates/materialm-tailwind-react-admin-template/?ref=376#demos"
    //     },
    //     {
    //         id: 2,
    //         img: img2,
    //         title: "Angular Version",
    //         href: "https://www.wrappixel.com/templates/materialm-material-angular-dashboard-template/?ref=376#demos"
    //     },
    //     {
    //         id: 3,
    //         img: img3,
    //         title: "Vuejs Version",
    //         href: "https://www.wrappixel.com/templates/materialm-vuejs-vuetify-admin-template/?ref=376#demos"
    //     },
    //     {
    //         id: 4,
    //         img: img4,
    //         title: "Nuxtjs Version",
    //         href: "https://www.wrappixel.com/templates/materialm-vuetify-nuxt-js-admin-template/?ref=376#demos"
    //     },
    //     {
    //         id: 5,
    //         img: img5,
    //         title: "NextJs Version",
    //         href: "https://www.wrappixel.com/templates/materialm-next-js-tailwind-dashboard-template/?ref=376#demos"
    //     },

    //     {
    //         id: 6,
    //         img: img6,
    //         title: "Bootstrap Version",
    //         href: "https://www.wrappixel.com/templates/materialm-admin-dashboard-template/?ref=376#demos"
    //     },

    // ]
    return (
        <div className="py-[15px] px-6 z-40 sticky top-0 bg-[linear-gradient(90deg,_#0f0533_0%,_#1b0a5c_100%)]">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="md:flex hidden items-center gap-5">
                    <Link target="_black" to="https://www.wrappixel.com">
                        <img src={
                            wrappixel_logo
                        } alt="logo"  width={147}/> 
                    </Link>
                    <div className="xl:flex items-center gap-4 pl-5 border-l border-opacity-20 border-white hidden">
                      
                        <Link target="_black" to="https://support.wrappixel.com/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#714bff]">
                            <Icon icon="solar:question-circle-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#714bff]">Help</h4>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar