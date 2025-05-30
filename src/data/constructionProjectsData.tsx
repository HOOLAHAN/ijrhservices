interface Project {
  company: string;
  website: string;
  projects: {
    projectName: string;
    image: string;
    startDate: string;
    endDate: string;
    location: string;
    details: string;
  }[];
}

const constructionProjects: Project[] = [
  {
    company: "PF Geomatics Ltd",
    website: "https://www.pfgeomatics.com/",
    projects: [
      {
        projectName: "105 Victoria Street",
        image: '/media/projects/victoria_street.png',
        startDate: "June 2024",
        endDate: "April 2025",
        location: "Westminster, London",
        details: "Surveying and setting out services for steel erection and precast plank installation. Responsible for checking embedded items, producing fin plate setting out drawings, conducting as-built surveys, and verifying steel alignments to ensure quality control on a major commercial development."
      },
      {
        projectName: "53 Clarendon Road",
        image: '/media/projects/clarendon_road.png',
        startDate: "November 2023",
        endDate: "February 2024",
        location: "Watford, London",
        details: "Supported the construction of a high-rise residential tower by providing critical pre-pour and post-pour surveys, rebar inspections, and setting out verifications to maintain strict construction tolerances for structural and facade installation."
      },
      {
        projectName: "41 Tower Hill",
        image: '/media/projects/tower_hill.png',
        startDate: "March 2024",
        endDate: "May 2024",
        location: "Tower Hill, London",
        details:
        "Delivered surveying and engineering support for a commercial refurbishment project in central London. Responsibilities included conducting level checks and establishing precise control for gridlines, datums, and structural openings. The work ensured accurate blockwork alignment and facilitated demolition activities through clear, well-defined setting out."
      },
      {
        projectName: "Piccadilly Pavillion",
        image: '/media/projects/piccadilly_pavillion.png',
        startDate: "April 2024",
        endDate: "July 2024",
        location: "Piccadilly Circus, London",
        details:
        "Provided setting out and engineering support for the Piccadilly Pavillion redevelopment. Key duties included establishing site control, setting out gridlines, wall positions, and screed stop ends. The work was carried out with a strong focus on accuracy and alignment, supporting the efficient delivery of the structural and architectural layout."
      },
      {
        projectName: "Gatwick Station Project",
        image: '/media/projects/gatwick_station.png',
        startDate: "April 2023",
        endDate: "November 2023",
        location: "Gatwick, London",
        details: "Delivered detailed setting out, site engineering, and surveying services for the installation of cladding, roofing, and glazing at Gatwick Station. Focused on achieving tight construction tolerances and resolving interface and layout challenges."
      }
    ]
  },
  {
    company: "Harbour Contractors Ltd",
    website: "https://www.harbourcontractors.co.uk/",
    projects: [
      {
        projectName: "Trippets",
        image: '/media/projects/trippets.png',
        startDate: "September 2020",
        endDate: "September 2022",
        location: "West Sussex, UK",
        details: "Provided technical site engineering support for a high-end residential new build, including setting out for piled foundations, structural framing, swimming pool installation, and landscaping works. Focused on precision and high-quality project delivery."
      },
      {
        projectName: "Java Sound",
        image: '/media/projects/java_sound.png',
        startDate: "November 2021",
        endDate: "September 2022",
        location: "West Sussex, UK",
        details: "Delivered setting out and site coordination services for a premium residential extension project. Involved in surveying works, layout verification, and quality inspections for key structural and architectural features."
      }
    ]
  },
  {
    company: "Laing O'Rourke",
    website: "https://www.laingorourke.com/",
    projects: [
      {
        projectName: "Hinkley Point C Nuclear Power Station",
        image: '/media/projects/hinkley.png',
        startDate: "April 2019",
        endDate: "September 2020",
        location: "Somerset, UK",
        details: "Supported major civil engineering activities by providing setting out and surveying services on critical elements of the Nuclear Island. Key responsibilities included quality control, material verification, and site safety compliance during one of the UK's largest concrete pours."
      },
      {
        projectName: "Crossrail: Liverpool Street Station",
        image: '/media/projects/crossrail.png',
        startDate: "September 2016",
        endDate: "April 2019",
        location: "Liverpool Street, London",
        details: "Delivered technical support and surveying input for fit-out works within Liverpool Street Station. Involved in layout verification, quality checks, and ensuring compliance with safety and engineering standards for major station infrastructure."
      }
    ]
  }
];

export default constructionProjects;
