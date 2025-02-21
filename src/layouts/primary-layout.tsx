import {AppSidebar} from "@/components/app-sidebar"
import {motion, PanInfo, useAnimation} from "framer-motion"
import {useRef, useState} from "react";
import {HomePage} from "@/pages/HomePage.tsx";
import { CredentialsPage } from "@/pages/Credentials";
import { BodyCard } from "@/components/body-card";
import { CareerPage } from "@/pages/Career";
import { ContactPage } from "@/pages/ContactPage";

export default function PrimaryLayout({}: { children: React.ReactNode }) {
    const constraintsRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()
    const snapThreshold = 100
    const [currentPage, setCurrentPage] = useState<string>("home")

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const currentX = info.point.x

        if (currentX < snapThreshold) {
            controls.start({x: -200})
        } else {
            controls.start({x: 0})
        }
    }

    const handleNavigation = (url: string) => {
        switch (url) {
            case "/home":
                return setCurrentPage("home")
            case "/credentials":
                return setCurrentPage("credentials")
            case "/career":
                return setCurrentPage("career")
            case "/contact":
                return setCurrentPage("contact")
            default: 
                return setCurrentPage("home")
        }
    }

    const renderContent = () => {
        switch (currentPage) {
            case "home":
                return <HomePage />;
            case "credentials":
                return <CredentialsPage />
            case "career":
                return <CareerPage />
            case "contact":
                return <ContactPage />
            case "other":
            default:
                return <HomePage />;
        }
    }

    const renderTitle = () => {
        switch (currentPage) {
            case "home":
                return <div>Who is Arel</div>
            case "credentials":
                return <div>Continuous learning</div>
            case "career":
                return <div>I left an impact in the following</div>
            case "contact":
                return <div>Reach out to Arel</div>
            case "other":
                return <div>Other things</div>
            default:
                return <HomePage />;
        }
    }

    return (
        <div
            ref={constraintsRef}
            className="flex p-4 w-full h-screen relative overflow-hidden drag-area"
        >
            <motion.div
                className="w-64"
                drag
                dragConstraints={
                    {
                        top: 20,
                        left: -100,
                        right: 10,
                        bottom: 250
                    }
                }
                dragElastic={0.1}
                animate={controls}
                onDragEnd={handleDragEnd}
            >
                <AppSidebar onNavigate={handleNavigation}/>
            </motion.div>

            <motion.div
                drag
                className="w-fill"
                dragConstraints = {
                    {
                        top: 20,
                        left: 20,
                        right: 20,
                        bottom: 20
                    }
                }
                dragElastic={0.1}
                animate={controls}
                onDragEnd={handleDragEnd}
            >
                <div className="flex w-128 p-8">
                    <BodyCard
                        renderTitle={renderTitle}
                        renderContent={renderContent}
                    />
                </div>
            </motion.div>
        </div>
    )
}
