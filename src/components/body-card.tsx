import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function BodyCard({ renderContent, renderTitle }: { renderTitle: React.FC, renderContent: React.FC }) {
    return (
        <Card className="h-fit bg-white border-black">
            <CardHeader>
                <CardTitle className="text-lg font-medium">
                    {renderTitle({})}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {renderContent({})}
            </CardContent>
        </Card>
    )
}