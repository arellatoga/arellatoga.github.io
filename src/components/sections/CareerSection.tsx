import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Binary, Speech, Parentheses, Handshake, Wallet, HandCoins, Cat, Bot } from "lucide-react";

const careerData = [
  {
    id: 1,
    icon: Wallet,
    company: "Maya Bank, Inc (formerly PayMaya)",
    role: "Backend Engineer",
    period: "July 2017 to Dec 2020",
    location: "Metro Manila, the Philippines",
    description: (
        <div>
          Cash is king, and the peasant revolution has started.
          <br/>
          <br/>
          You wouldn't believe how hard it is to purchase anything in the Philippines.
          Apple Pay isn't even a thing yet.
          The entire world continues to evolve but the country remains backwards.
          <br/>
          <br/>
          Through my work, I've (indirectly) helped people integrate into today's highly digital age.
          I've done a bit of work on the referral systems, something on the API gateways, another thing on its money movement as well...
          <br/>
          <br/>
          So that shopping in Lazada or Shopee (these are like Amazon, but for South-east Asia) was no longer as
          gatekept.
        </div>
    )
  },
  {
    id: 2,
    icon: HandCoins,
    company: "Plentina Lending, Inc",
    role: "Senior Backend Engineer",
    period: "Jan 2021 to April 2022",
    location: "The Philippines and the United States, Remote",
    description: (
        <div>
            COVID-19 massively affected the Philippine livelihood by cutting off major sources of income.
            <br />
            Payday loans became prolific, targetting impoverished communities in vulnerable situations.
            <br />
            We fought this by providing humane loans through a mobile app. No exorbitant penalties. No threats of harm.
            <br />
            Our users were safe, reassured, and loyal.
        </div>
    ),
  },
  {
    id: 3,
    icon: Cat,
    company: "Horangi Cybersecurity (acquired by Bitdefender, Inc)",
    role: "Backend Engineer",
    period: "June 2022 to August 2023",
    location: "Singapore, Remote",
    description: (
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
  },
  {
    id: 4,
    icon: Bot,
    company: "AI First, Inc",
    role: "Backend Engineer and Product Owner",
    period: "June 2024 to January 2025",
    location: "The Philippines, Remote",
    description: (
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
  },
];

export function CareerSection() {
  return (
    <div className="space-y-8">
      {/* Title Card */}
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Arel's Career</h1>
          <p className="text-xl text-muted-foreground">
            What I've done through the years
          </p>
        </CardContent>
      </Card>

      {/* Career Table Card */}
      <Card className="bg-white border-border shadow-sm relative z-10 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="font-semibold">Company</TableHead>
              <TableHead className="font-semibold">Role</TableHead>
              <TableHead className="font-semibold">Period</TableHead>
              <TableHead className="font-semibold hidden md:table-cell">Location</TableHead>
              <TableHead className="font-semibold hidden lg:table-cell">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {careerData.map((job) => {
              const IconComponent = job.icon;
              return (
              <TableRow key={job.id}>
                <TableCell className="font-medium text-foreground">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-primary" />
                    {job.company}
                  </div>
                </TableCell>
                <TableCell className="text-foreground">{job.role}</TableCell>
                <TableCell className="text-muted-foreground">{job.period}</TableCell>
                <TableCell className="text-muted-foreground hidden md:table-cell">
                  {job.location}
                </TableCell>
                <TableCell className="text-muted-foreground hidden lg:table-cell">
                  {job.description}
                </TableCell>
              </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>

      {/* Education Card */}
      <Card className="bg-white border-border shadow-sm relative z-10 overflow-hidden">
        <CardContent className="p-6 pb-0">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Education</h2>
        </CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="font-semibold">Degree</TableHead>
              <TableHead className="font-semibold">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <Binary className="h-4 w-4 text-primary" />
                  Bachelor of Science in Computer Science
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                <p className="text-sm">University of the Philippines, 2013 to 2017</p>
                <p className="text-xs">For my thesis, I wrote about spiking neural P-systems with neuron division and dissolution</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <Speech className="h-4 w-4 text-primary" />
                  Master of Science in Data Science and Communication
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                <p className="text-sm">University of Liverpool, 2023 to 2024</p>
                <p className="text-sm">Distinction (does this even matter?!)</p>
                <p className="text-xs">For my dissertation, I wrote about perceptions of Generative AI Art in Reddit</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <Parentheses className="h-4 w-4 text-primary" />
                  Doctor of Philosophy in Computer Science
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                <p className="text-sm">Maybe someday.</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <Handshake className="h-4 w-4 text-primary" />
                  Master of Business Administration
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                <p className="text-sm">I can only dream further for now.</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
