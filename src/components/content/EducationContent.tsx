import { Binary, Handshake, Parentheses, Speech } from "lucide-react";

const items = [
    {
        icon: Binary,
        title: "Bachelor of Science in Computer Science",
        content: (
            <div>
                <p className="text-sm">University of the Philippines, 2013 to 2017<br/></p>
                <p className="text-xs">For my thesis, I wrote about spiking neural P-systems with neuron division and dissolution<br/></p>
            </div>
        )
    }, 
    {
        icon: Speech,
        title: "Master of Science in Data Science and Communication",
        content: (
                <div>
                <p className="text-sm">University of Liverpool, 2023 to 2024<br/></p>
                <p className="text-sm">Distinction (does this even matter?!)<br/></p>
                <p className="text-xs">For my dissertation, I wrote about perceptions of Generative AI Art in Reddit<br/></p>
                </div>
        )
    }, 
    {
        icon: Parentheses,
        title: "Doctor of Philosophy in Computer Science",
        content: (
            <div>
                <p className="text-sm">Maybe someday. <br/></p>
            </div>
        )
    }, 
    {
        icon: Handshake,
        title: "Master of Business Administration",
        content: (
            <div>
                <p className="text-sm">I can only dream further for now. <br/></p>
            </div>
        )
    }, 
]

export const EducationContent = () => {
    return (
        <p className="space-y-4">
            {items.map(item => (
                <div className="flex gap-4">
                    <div className="flex items-center">
                        <item.icon className="h-full w-auto"/>
                    </div>
                    <div>
                        {item.title}
                        {item.content}
                    </div>
                    <br/>
                </div>
            ))}
        </p>
    );
};

export default EducationContent;



