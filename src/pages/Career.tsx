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
            "generative ai", "node.js", "edutech", "llm", "python", "google cloud platform"
        ]
    }, 
    {
        icon: Cat,
        title: "Horangi Cybersecurity (acquired by Bitdefender, Inc)",
        position: "Backend Engineer",
        dates: "June 2022 to June 2023",
        content: (
            <div>

                Did you know that most breaches come from misconfigurations? [citation needed]
                <br />
                There is merit in protecting your websites. Backend servers. Cloud platforms.
                <br />
                Ensuring that your infrastructure is safe gives confidence to users that you know what you're doing.
                <br />
                And that you absolutely do not take them for granted.

            </div>
        ),
        buzzwords: [
            "cloud security posture management", "python", "compiler and interpreter design", "domain-specific languages"
        ]
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
                All of these so that our users can go back to us confident. 
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
                Cash is king, and the peasant revolution has started.
                <br />
                Making purchases, both online and offline, has been riddled with bureaucracies that prevented lower socio-economic strata from
                puppeteered by the invisible hand.
                <br />
                Kidding aside, failure of the local banks to make cash flow easy (either due to antiquated rituals or what not) has led to inaccessibility of purchasing,
                <br />
                preventing the unbanked from participating in a modern technological world.
                <br />
                Through my work, I've (indirectly) helped people integrate into today's highly digital age.
                <br />
                So that shopping in Lazada or Shopee (these are like Amazon, but for South-east Asia) was no longer as gatekept.
            </div>
        ),
        buzzwords: [
            "financial inclusion", "financial technology", "java", "javascript", "scala", "microservices", "amazon web services", "python", "behave"
        ]
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