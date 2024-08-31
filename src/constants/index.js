
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


import image from "../assets/projects/image.png";

export const HERO_CONTENT = `Experienced IT Application Analyst with over two years of expertise in providing comprehensive application support, custom report generation, and troubleshooting in fast-paced environments. Adept at working both independently and collaboratively, I possess strong problem-solving abilities and a passion for leveraging technology to assist others. I have a proven track record of working closely with business users to identify and document business problems, recommending technology or process changes to effectively address those challenges. Proficient in multi-cloud environments (Azure, AWS) with hands-on experience in automating and managing cloud architecture and skilled in designing and maintaining CI/CD pipelines, integrating tools like Jenkins, Ansible, and Git to enhance collaboration and efficiency. Strong leadership skills in managing cross-functional teams and driving business outcomes through strategic cloud adoption.`
export const ABOUT_TEXT = "As a master's student in applied computing at the University of Windsor, I am passionate about learning and applying the latest technologies and skills in the fields of cloud computing, DevOps, and data analytics. I have completed multiple courses and certifications in these areas, such as Microsoft Certifications AZ-900, AZ-204, AZ-104 and AWS Solution Architect and Introduction to Career Skills in Data Analytics. Prior to pursuing my master's degree, I worked as a programmer analyst at Cognizant Technology Solutions, where I developed and deployed software solutions for a leading banking client, Credit-Suisse, using Temenos t24, Transact, AWS, Azure, Jenkins, Docker, Ansible, Kubernetes, Puppet, Git, and Jira. I contributed to the successful delivery of several projects, such as a large-scale data migration, a core banking system upgrade, and a cloud-based application development. I also collaborated with cross-functional teams and stakeholders, ensuring high-quality standards and customer satisfaction."
export const experience = [
  {
    year: "2021 - 2023",
    role: "Cloud Administrator (Azure Cloud Automation ) - Internship",
    company: "Research Tech Solutions, Chatman RPO Southside, Ontario, Canada",
    description:"•	Developed and implemented automation for provisioning and decommissioning Azure VMs based on Microsoft Entra ID user group membership, reducing manual intervention and streamlining resource management.Managed Azure SharePoint, Storage, and Active Directory, ensuring seamless integration and optimal performance.	Created and managed Azure VM base images using SysPrep and Azure Compute Gallery, ensuring consistent and scalable deployments.	Designed and deployed Azure Automation Runbooks with PowerShell, increasing efficiency and reducing downtime by 20%.	Integrated Azure Logic Apps to automate workflows and resource allocation, cutting provisioning time by 50%.	Directed end-to-end migration of on-premises applications to Microsoft Azure, optimizing services like Azure VMs and SQL Database, achieving a 30% reduction in infrastructure costs.	Implemented role-based access controls (RBAC) and encryption, adhering to security policies and enhancing data protection.",
     technologies: [
      "Microsoft Entra ID (formerly Azure AD)",
      "Azure Virtual Machines (VMs)",
      "Azure SharePoint",
      "Azure Storage",
      "Azure Active Directory",
      "SysPrep",
      "Azure Compute Gallery",
      "Azure Automation", 
      "PowerShell",
      "Azure Logic Apps",
      "SQL Database (Azure SQL Database)",
      "Role-Based Access Control (RBAC)",
      "Encryption",
      "On-Premises to Cloud Migration",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Program Analyst/IT Application Analyst",
    company: "Cognizant Technology Solution(Client – Credit Suisse (Singapore)), Chennai, India.",
    description:"Customized and improved T24 banking functionality using Java and JBASE commands, optimizing user banking practices through componentization.Built and maintained CI/CD pipelines with DevOps tools, automating software delivery and resolving production issues to minimize downtime.Led multiple cross-functional projects, reducing backlog by 40% using Atlassian JIRA, Git, and Confluence for effective project tracking and documentation.Utilized Jenkins for CI/CD and implemented Infrastructure as Code (IAAC) with Terraform to automate AWS cloud resource provisioning and management.Conducted Temenos User Testing (TUT) to identify and resolve issues early, cutting bug tickets by 20% and enhancing overall product quality.Documented business objectives in Functional Specification Documents (FSDs) and translated them into Technical Specification Documents (TSDs), improving communication between business and technical teams and driving a 30% increase in continuous improvement.",
    technologies: [
      "Java",
      "Temenos- T24 Transact",
      "Bsnking - Funtional/Technical",
      "JBASE/ SQL",
      "CI/CD pipelines",
      "DevOps tools- Jenkins, Ansible",
      "Atlassian JIRA",
      "Git",
      "Confluence",
      "Infrastructure as Code (IaC)",
      "Terraform",
      "AWS Cloud",
      "Temenos User Testing (TUT)",
      "Functional Specification Document Reporting (FSDs)",
      "Technical Specification Documents Reporting (TSDs)",
    ],
  },
  
  
];
export const education = [
  {
    year: "2024 - Present",
    role: "Masters in Applied Computing",
    company: "The University of windsor,Canada.",
    description:
      "Master of Applied Computing is a professional program that  provided me with a solid foundation of the industry oriented practical aspects of computer science. It provides a solid background in the foundation of computing and business",
    technologies: [
      "Java",
      "C++",
      "Python",
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
      "Mobile Development",
      "Cloud Computing",
      "Big Data",
      "Machine Learning",
      "Artificial Intelligence",
      "Cybersecurity",
      "Human-Computer Interaction",
      "Project Management",
      "Business Analysis",
    ],
  },
  
  {
    year: "2017 - 2021",
    role: "Bachelor of Technology in Information  Technology",
    company: "Anna University,Chennai, India",
    description:
      "The Bachelor of Technology in Information Technology is a four-year undergraduate program that provides me with a solid foundation in Technology. The program covers a wide range of topics, including programming, data structures, algorithms, and computer networks. I learnt how to design and develop software applications, manage IT projects, and solve complex problems using technology.",
    technologies: [
      "Data Structure",
      "Artificial Intelligence ",
      "Software Engineering",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Paving Concepts",
    image: image,
    description:
      "The website was built to address the growing demand for reliable and professional paving services. It was designed to attract new customers, provide them with detailed information about available services, and establish a strong online presence for the business",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "React JS",
      "Google Domains",
      "GCP",
    ],
  },
  {
    title: "BeAware",
    image: project2,
    description:"Developed BeAware, a web application that automates and enhances live stream management with real-time captioning using ReactJS and Firebase. Implemented user-friendly features for creating, managing, and monitoring live streams and account settings.Architected REST-based web services using Spring Boot in a microservice architecture, ensuring scalable and efficient data handling.	Enhanced accessibility and compliance with accessibility standards by automating real-time captioning, broadening the reach of live streams to diverse audiences and increasing user engagement by 30%.",
    technologies: ["React JS"," Spring Boot", "Firebase"," REST-based Web Services"],
  },
  {
    title: "Automated Cloud Infrastructure",
    image: project3,
    description:"Designed and implemented a robust CI/CD pipeline leveraging Terraform for provisioning AWS resources (EC2, RDS, ELB), Jenkins for automation, and Amazon EKS for container orchestration.Integrated Prometheus and Grafana for real-time monitoring and metrics visualization, establishing comprehensive alerting mechanisms for proactive issue resolution.	Achieved a 50% reduction in deployment time and a significant boost in system reliability and resource management, leading to a 40% decrease in downtime and a 25% increase in operational efficiency",
    technologies: [
      "Terraform", "Jenkins", "Kubernetes"," Prometheus"," Grafana", "AWS EC2",
    ],
  },
  
];

export const CONTACT = {
  address: "Windsor, Ontario, Canada",

  email: "govindmonika2000@gmail.com",
};
