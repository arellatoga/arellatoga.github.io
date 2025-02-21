import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";
import {Briefcase, GraduationCap, Mailbox, User} from "lucide-react"

const items = [
    {
        title: "About Me",
        url: "/home",
        icon: User,
    },
    {
        title: "Education",
        url: "/credentials",
        icon: GraduationCap,
    },
    {
        title: "Career",
        url: "/career",
        icon: Briefcase,
    },
    {
        title: "Contact Info",
        url: "#",
        icon: Mailbox,
    }
]

export function AppSidebar({onNavigate} : {onNavigate: (url: string) => void}) {
    return (
        <Card className="h-fit bg-white border-black">
            <CardHeader>
                <CardTitle><div className="font-medium justify-end">Arel's Website</div></CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-full max-h-[calc(100vh-6rem)]">
                    <div className="space-y-1">
                        {items.map((item) => (
                            <Button
                                key={item.title}
                                variant="ghost"
                                className="w-full
                                justify-end
                                gap-10 text-black
                                bg-white
                                hover:text-black
                                hover:bg-white
                                whitespace-normal
                                text-start h-auto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate(item.url);
                                }}
                            >
                                <span>{item.title}</span>
                                <item.icon className="h-4 w-4 shrink-0" />
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
