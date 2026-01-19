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
    company: "Tech Corp Inc.",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading development of enterprise web applications",
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
          <h1 className="text-4xl font-bold text-foreground">Career</h1>
          <p className="text-xl text-muted-foreground">
            My professional journey in software development
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
