const careerData = [
  {
    company: "DoorFeed Inc",
    role: "Backend Engineer · DevOps · Applied AI",
    period: "June 2025 — Present",
    location: "London, UK",
    description: (
      <>
        I will not pretend I know a lot about real estate, but I do know that a lot of money is involved here.
        <br /><br />
        Perhaps a building here needs some valuations, a rental property over there needs comparables, or maybe you
        want to have a bird&apos;s-eye view of a general area.
        <br /><br />
        We have it here.
      </>
    ),
  },
  {
    company: "AI First, Inc",
    role: "Backend Engineer and Product Owner",
    period: "June 2024 — June 2025",
    location: "Philippines · Remote · Part-time",
    description: (
      <>
        Following whatever happened to cryptocurrencies, the grifting has since moved to the use of AI.
        <br /><br />
        Perhaps it&apos;s cost-cutting. All the scalped, stolen, and hoarded RTX 3070s needed to be used somewhere.
        <br /><br />
        This is not it. I&apos;m in the business of making use of AI for software that actually makes sense.
        <br /><br />
        We use AI to solve real problems. Augment solutions to existing problems.
        <br /><br />
        And not invent solutions to problems that don&apos;t exist.
      </>
    ),
  },
  {
    company: "Horangi Cybersecurity",
    role: "Backend Engineer",
    period: "June 2022 — August 2023",
    location: "Singapore · Remote",
    description: (
      <>
        Did you know that most breaches come from misconfigurations? [citation needed]
        <br /><br />
        There is merit in protecting your websites. Backend servers. Cloud platforms.
        <br /><br />
        Ensuring that your infrastructure is safe gives confidence to users that you know what you&apos;re doing.
        <br /><br />
        And that you absolutely do not take them for granted.
      </>
    ),
  },
  {
    company: "Plentina Lending, Inc",
    role: "Senior Backend Engineer",
    period: "January 2021 — April 2022",
    location: "Philippines & United States · Remote",
    description: (
      <>
        COVID-19 massively affected the Philippine livelihood by cutting off major sources of income.
        <br /><br />
        Payday loans became prolific, targetting impoverished communities in vulnerable situations.
        <br /><br />
        We fought this by providing humane loans through a mobile app. No exorbitant penalties. No threats of harm.
        <br /><br />
        Our users were safe, reassured, and loyal.
      </>
    ),
  },
  {
    company: "Maya Bank, Inc",
    role: "Backend Engineer",
    period: "July 2017 — December 2020",
    location: "Metro Manila, Philippines",
    description: (
      <>
        Cash is king, and the peasant revolution has started.
        <br /><br />
        You wouldn&apos;t believe how hard it is to purchase anything in the Philippines.
        Apple Pay isn&apos;t even a thing yet.
        The entire world continues to evolve but the country remains backwards.
        <br /><br />
        Through my work, I&apos;ve (indirectly) helped people integrate into today&apos;s highly digital age.
        I&apos;ve done a bit of work on the referral systems, something on the API gateways, another thing on its money movement as well...
        <br /><br />
        So that shopping in Lazada or Shopee (these are like Amazon, but for South-east Asia) was no longer as gatekept.
      </>
    ),
  },
];

const educationData = [
  {
    degree: "MSc Data Science and Communication",
    institution: "University of Liverpool",
    period: "2023 — 2024",
    note: "Distinction · Dissertation on perceptions of generative AI art on Reddit.",
  },
  {
    degree: "BSc Computer Science",
    institution: "University of the Philippines",
    period: "2013 — 2017",
    note: "Thesis on spiking neural P-systems with neuron division and dissolution.",
  },
];

export function CareerSection() {
  return (
    <article>
      <header className="section-opener">
        <p className="ui-label">Work, through the years</p>
        <h2>A career spent making complicated systems more useful.</h2>
        <p>From financial inclusion in Manila to property technology in London, the connecting thread is responsible, product-minded backend work.</p>
      </header>

      <div className="career-list" aria-label="Career history">
        {careerData.map((job, index) => (
          <article className="career-entry" key={job.company}>
            <div className="career-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="career-meta">
              <p>{job.period}</p>
              <span>{job.location}</span>
            </div>
            <div className="career-copy">
              <h3>{job.company}</h3>
              <p className="career-role">{job.role}</p>
              <p>{job.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="education-section" aria-labelledby="education-title">
        <div className="section-heading-row">
          <p className="ui-label">Study</p>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="education-list">
          {educationData.map((item) => (
            <article key={item.degree}>
              <p className="education-period">{item.period}</p>
              <h3>{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
        <p className="future-study">Future margin notes: perhaps a PhD in Computer Science, perhaps an MBA. There is time.</p>
      </section>
    </article>
  );
}
