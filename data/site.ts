import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Layers,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Taylor Frank",
  title: "Staff-Track Software Engineer",
  email: "taylor.frank@justrightreader.com",
  linkedin: "https://linkedin.com/in/taylorfrank03",
  location: "Ashburn, Virginia",
  heroTitle: "I build production platforms that turn ambiguity into durable systems.",
  heroDescription:
    "Staff-scope full stack engineer with deep execution across application architecture, event-driven workflows, distributed data design, and AWS infrastructure. I specialize in building systems that improve reliability, automation, and operational leverage.",
};

export const metrics = [
  { value: "2,000", label: "users supported" },
  { value: "6,000", label: "tenant contexts" },
  { value: "50K/day", label: "requests handled" },
  { value: "250K+/day", label: "queue jobs processed" },
  { value: "$2M+", label: "annual savings delivered" },
  { value: "70%", label: "faster deal-to-fulfillment" },
];

export type IconCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const expertise: IconCard[] = [
  {
    icon: Workflow,
    title: "Event-Driven Systems",
    text: "Designed resilient async workflows with SQS, Lambda, DynamoDB, and S3 for fulfillment, onboarding, and data processing.",
  },
  {
    icon: Database,
    title: "Distributed Data Architecture",
    text: "Led hybrid DynamoDB + Postgres designs that separate high-throughput lifecycle state from relational business workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "Owned AWS infrastructure end-to-end across ECS Fargate, ALB, Route53, IAM, KMS, Secrets Manager, and multi-environment delivery.",
  },
  {
    icon: GitBranch,
    title: "Platform Delivery",
    text: "Built GitLab CI/CD systems with promotion workflows, OIDC role assumption, container pipelines, and Terraform-based delivery.",
  },
];

export type Study = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  points: string[];
  tags: string[];
};

export const caseStudies: Study[] = [
  {
    title: "Take Everywhere Platform",
    subtitle: "Multi-service product platform",
    icon: Layers,
    points: [
      "Architected and owned a cloud-native platform serving thousands of users across thousands of tenant contexts.",
      "Built internal APIs, order flows, operations dashboards, uploads, reporting, and secure middleware patterns.",
      "Operated across application, data, and infrastructure layers with end-to-end ownership.",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "Postgres", "DynamoDB", "AWS"],
  },
  {
    title: "Fulfillment Lifecycle Pipeline",
    subtitle: "Event-driven orchestration on AWS",
    icon: Workflow,
    points: [
      "Designed asynchronous order and fulfillment pipelines using SQS → Lambda/services → DynamoDB/S3.",
      "Improved fault isolation, traceability, and operational visibility across downstream workflows.",
      "Accepted eventual consistency in exchange for resiliency, retries, and independent scaling.",
    ],
    tags: ["SQS", "Lambda", "DynamoDB", "S3", "Async Processing"],
  },
  {
    title: "Assessment File Processing Engine",
    subtitle: "Large-file ingestion and validation",
    icon: Cpu,
    points: [
      "Built ingestion workflows for CSV/XLSX uploads using object storage, queues, and worker-based processing.",
      "Handled validation, deduplication, dynamic mapping, staged writes, and operator feedback loops.",
      "Designed for throughput, retry safety, and clearer visibility into partial failures.",
    ],
    tags: ["S3", "SQS", "Lambda", "Prisma", "Postgres", "Data Pipelines"],
  },
  {
    title: "Infrastructure & Delivery Control Plane",
    subtitle: "Terraform + CI/CD architecture",
    icon: ShieldCheck,
    points: [
      "Standardized infrastructure across sandbox, staging, and production with Terraform-managed AWS resources.",
      "Implemented branch-based promotion, Docker/ECR pipelines, and OIDC-based deployment workflows.",
      "Improved consistency, delivery speed, and long-term maintainability of platform operations.",
    ],
    tags: ["Terraform", "GitLab CI/CD", "ECS", "ALB", "Route53", "OIDC"],
  },
];

export const decisions = [
  {
    title: "Hybrid DynamoDB + Postgres",
    why: "Separated high-throughput lifecycle state from relational assessment and workflow logic.",
    tradeoff:
      "Introduced additional operational complexity and consistency boundaries, but enabled each data model to optimize for the workload it served best.",
  },
  {
    title: "Async Pipeline over Synchronous Processing",
    why: "Improved throughput, fault isolation, and retryability for large operational workflows and file processing.",
    tradeoff:
      "Accepted eventual consistency and more operational components in exchange for resiliency and independent scaling.",
  },
  {
    title: "Terraform + GitLab Delivery Architecture",
    why: "Created reproducible environments, safer deployments, and infrastructure governance across teams and environments.",
    tradeoff:
      "Required more upfront systems investment, but paid off in speed, reliability, and repeatability.",
  },
];

export const timeline = [
  {
    company: "Just Right Reader",
    role: "Senior Full Stack Engineer (Staff Scope)",
    period: "Dec 2024 – Present",
    text: "Led architecture and roadmap for a multi-service platform spanning product, operations, data, and infrastructure. Delivered measurable business impact through automation, architecture simplification, and platform ownership.",
  },
  {
    company: "Edgio",
    role: "Software Development Engineer II",
    period: "Dec 2021 – Dec 2024",
    text: "Built full-stack observability and workflow platforms, improved client response and ticket flows, and helped drive reliability and deployment improvements across distributed systems.",
  },
  {
    company: "Yahoo / Verizon Media",
    role: "Software Developer / Support Engineering",
    period: "2018 – 2021",
    text: "Grew from operations and support engineering into software development, building automation, improving production reliability, and developing strong systems and infrastructure fundamentals.",
  },
];
