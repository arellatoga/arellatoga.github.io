import { Bot, Cat, HandCoins, Wallet } from "lucide-react";

const items = [
    {
        icon: Bot,
        title: "AI First, Inc",
        position: "Backend Engineer and Product Owner",
        dates: "June 2024 to Present",
        content: (
            <div>
                Following whatever happened to cryptocurrencies, the grifting has since moved to the use of AI.
                <br />
                Perhaps it's cost-cutting. All the scalped, stolen, and hoarded RTX 3070s needed to be used somewhere.
                <br />
                This is not it. I'm in the business of making use of AI for software that actually makes sense.
                <br />
                We use AI to solve real problems. Augment solutions to existing problems.
                <br />
                And not invent solutions to problems that don't exist.
                <br />
            </div>
        ),
        buzzwords: [
            "generative ai", "node.js", "edutech", "llms", "python", "google cloud platform"
        ]
    }, 
    {
        icon: Cat,
        title: "Horangi Cybersecurity (acquired by Bitdefender, Inc)",
        position: "Backend Engineer",
        dates: "June 2022 to June 2023",
        content: (
            <div>
            </div>
        )
    }, 
    {
        icon: HandCoins,
        title: "Plentina Lending, Inc",
        position: "Senior Backend Engineer",
        dates: "Jan 2021 to April 2022",
        content: (
            <div>
                COVID-19 massively affected the Philippine livelihood by cutting off major sources of income.
                <br />
                Payday loans became prolific, targetting impoverished communities in vulnerable situations.
                <br />
                We fought this by providing humane loans through a mobile app. No exorbitant penalties. No threats of harm.
                <br />
                All of these so that our customers can go back to us confident. 
            </div>
        ),
        buzzwords: [
            "financial inclusion", "financial technology", "microlending", "node.js", "firebase", "google cloud platform", "data science"
        ]
    }, 
    {
        icon: Wallet,
        title: "PayMaya Philippines, Inc (now Maya Bank, Inc)",
        position: "Backend Engineer",
        dates: "July 2017 to Dec 2020",
        content: (
            <div>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue sapien massa, in porttitor lorem tempus id. <br/></p>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue sapien massa, in porttitor lorem tempus id. <br/></p>
            </div>
        )
    }, 
]

export const CareerPage = () => {
    return (
        <p className="space-y-4">
            {items.map(item => (
                <div className="flex gap-4 space-y-2">
                    <div className="flex items-center">
                        <item.icon className="h-full w-auto"/>
                    </div>
                    <div>
                        <div>
                            {item.title}
                        </div>
                        <div className="flex justify-between">
                            <div className="text-sm">
                                {item.position}
                            </div>
                            <div className="text-sm">
                                {item.dates}
                            </div>
                        </div>
                        <div className="text-xs sm:text-justify text-left">
                            {item.content}
                        </div>
                        <div className="text-xs italic">
                            Buzzwords: {item.buzzwords?.join(", ")}
                        </div>
                    </div>
                    <br/>
                </div>
            ))}
        </p>
    );
};