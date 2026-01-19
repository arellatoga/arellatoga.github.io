import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const careerData = [
  {
    id: 1,
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
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    location: "Remote",
    description: "Built and maintained e-commerce platform serving 100k+ users",
  },
  {
    id: 3,
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    period: "2018 - 2020",
    location: "New York, NY",
    description: "Developed responsive web applications for various clients",
  },
  {
    id: 4,
    company: "WebDev Solutions",
    role: "Junior Developer",
    period: "2017 - 2018",
    location: "Boston, MA",
    description: "Started career building WordPress sites and learning React",
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
            {careerData.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium text-foreground">{job.company}</TableCell>
                <TableCell className="text-foreground">{job.role}</TableCell>
                <TableCell className="text-muted-foreground">{job.period}</TableCell>
                <TableCell className="text-muted-foreground hidden md:table-cell">
                  {job.location}
                </TableCell>
                <TableCell className="text-muted-foreground hidden lg:table-cell">
                  {job.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Education Card */}
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Education</h2>
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground">B.S. in Computer Science</h3>
            <p className="text-muted-foreground">University of California, Berkeley</p>
            <p className="text-sm text-muted-foreground">2013 - 2017</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
