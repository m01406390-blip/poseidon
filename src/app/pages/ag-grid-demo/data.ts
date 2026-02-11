/**
 * AG Grid Advanced Demo – Synthetic data generator
 * Produces realistic enterprise-grade datasets for the demo grids.
 */

// ─── Employee / HR Dataset ───────────────────────────────────────────────────
export interface Employee {
    id: number;
    avatar: string;
    name: string;
    email: string;
    department: string;
    role: string;
    level: 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Manager' | 'Director';
    status: 'Active' | 'On Leave' | 'Remote' | 'Terminated';
    salary: number;
    performance: number; // 0-100
    joinDate: string;
    country: string;
    countryCode: string;
    skills: string[];
    projects: number;
    satisfaction: number; // 1-5
    lastReview: string;
}

const DEPARTMENTS = ['Engineering', 'Design', 'Marketing', 'Sales', 'Finance', 'HR', 'Operations', 'Legal', 'Product', 'Data Science'];
const ROLES: Record<string, string[]> = {
    Engineering: ['Frontend Engineer', 'Backend Engineer', 'DevOps Engineer', 'Full-Stack Engineer', 'QA Engineer', 'Mobile Developer', 'Architect'],
    Design: ['UI Designer', 'UX Researcher', 'Product Designer', 'Brand Designer', 'Motion Designer'],
    Marketing: ['Content Strategist', 'SEO Specialist', 'Growth Marketer', 'Campaign Manager', 'Social Media Manager'],
    Sales: ['Account Executive', 'Sales Engineer', 'BDR', 'Sales Manager', 'Customer Success'],
    Finance: ['Financial Analyst', 'Accountant', 'Controller', 'Treasury Analyst', 'Auditor'],
    HR: ['Recruiter', 'HR Business Partner', 'L&D Specialist', 'Compensation Analyst', 'HR Coordinator'],
    Operations: ['Operations Manager', 'Supply Chain Analyst', 'Logistics Coordinator', 'Process Engineer'],
    Legal: ['Corporate Counsel', 'Compliance Officer', 'Contract Manager', 'IP Attorney'],
    Product: ['Product Manager', 'Product Analyst', 'Scrum Master', 'Product Owner', 'Technical PM'],
    'Data Science': ['Data Scientist', 'ML Engineer', 'Data Analyst', 'BI Developer', 'Research Scientist']
};
const LEVELS: Employee['level'][] = ['Junior', 'Mid', 'Senior', 'Lead', 'Manager', 'Director'];
const STATUSES: Employee['status'][] = ['Active', 'Active', 'Active', 'Active', 'On Leave', 'Remote', 'Remote', 'Terminated'];
const COUNTRIES = [
    { name: 'United States', code: 'us' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'Germany', code: 'de' },
    { name: 'France', code: 'fr' },
    { name: 'Canada', code: 'ca' },
    { name: 'Japan', code: 'jp' },
    { name: 'Australia', code: 'au' },
    { name: 'Brazil', code: 'br' },
    { name: 'India', code: 'in' },
    { name: 'UAE', code: 'ae' },
    { name: 'Iraq', code: 'iq' },
    { name: 'Egypt', code: 'eg' },
    { name: 'Turkey', code: 'tr' },
    { name: 'South Korea', code: 'kr' },
    { name: 'Netherlands', code: 'nl' },
    { name: 'Sweden', code: 'se' },
    { name: 'Singapore', code: 'sg' },
    { name: 'Spain', code: 'es' },
    { name: 'Italy', code: 'it' },
    { name: 'Poland', code: 'pl' }
];
const SKILLS = ['Angular', 'React', 'Vue', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'SQL', 'AWS', 'Azure', 'Docker', 'K8s', 'GraphQL', 'Node.js', 'Figma', 'Tableau', 'Power BI', 'Terraform', 'CI/CD'];
const FIRST_NAMES = ['Ahmed', 'Sara', 'Omar', 'Fatima', 'Ali', 'Noor', 'Hassan', 'Layla', 'Yusuf', 'Maryam', 'James', 'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Lucas', 'Mia', 'Ethan', 'Sofia', 'Kenji', 'Yui', 'Wei', 'Mei', 'Ravi', 'Priya', 'Carlos', 'Maria', 'Hans', 'Anna', 'Pierre', 'Claire', 'Boris', 'Elena', 'Marco', 'Julia', 'Lars', 'Ingrid', 'Tomasz', 'Kasia'];
const LAST_NAMES = ['Al-Rashid', 'Johnson', 'Williams', 'Müller', 'Tanaka', 'Singh', 'García', 'Kim', 'Chen', 'Brown', 'Smith', 'Davis', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Martin', 'Lee', 'Hassan', 'Dubois', 'Petrov', 'Rossi', 'Berg', 'Kowalski', 'Sato', 'Nakamura', 'Gupta', 'Patel', 'Silva'];

function rnd(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(arr: T[]): T {
    return arr[rnd(0, arr.length - 1)];
}

function pickN<T>(arr: T[], n: number): T[] {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}

function randomDate(yearStart: number, yearEnd: number): string {
    const y = rnd(yearStart, yearEnd);
    const m = rnd(1, 12);
    const d = rnd(1, 28);
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

export function generateEmployees(count: number = 200): Employee[] {
    const employees: Employee[] = [];
    for (let i = 1; i <= count; i++) {
        const dept = pick(DEPARTMENTS);
        const rolesForDept = ROLES[dept] || ['Specialist'];
        const firstName = pick(FIRST_NAMES);
        const lastName = pick(LAST_NAMES);
        const country = pick(COUNTRIES);
        const level = pick(LEVELS);
        const salaryBase: Record<string, number> = { Junior: 45000, Mid: 65000, Senior: 90000, Lead: 110000, Manager: 130000, Director: 160000 };

        employees.push({
            id: 1000 + i,
            avatar: `https://i.pravatar.cc/40?u=${i}`,
            name: `${firstName} ${lastName}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase().replace(/[^a-z]/g, '')}@company.com`,
            department: dept,
            role: pick(rolesForDept),
            level,
            status: pick(STATUSES),
            salary: salaryBase[level] + rnd(-10000, 25000),
            performance: rnd(25, 100),
            joinDate: randomDate(2016, 2025),
            country: country.name,
            countryCode: country.code,
            skills: pickN(SKILLS, rnd(2, 6)),
            projects: rnd(1, 25),
            satisfaction: rnd(1, 5),
            lastReview: randomDate(2024, 2025)
        });
    }
    return employees;
}

// ─── Financial Transactions Dataset ─────────────────────────────────────────
export interface Transaction {
    txId: string;
    date: string;
    type: 'Credit' | 'Debit' | 'Transfer' | 'Refund';
    category: string;
    merchant: string;
    amount: number;
    currency: string;
    status: 'Completed' | 'Pending' | 'Failed' | 'Cancelled';
    account: string;
    reference: string;
    risk: 'Low' | 'Medium' | 'High';
}

const TX_CATEGORIES = ['Payroll', 'Office Supplies', 'Software License', 'Travel', 'Marketing', 'Consulting', 'Infrastructure', 'Insurance', 'Legal', 'Training'];
const MERCHANTS = ['AWS', 'Google Cloud', 'Microsoft', 'Slack', 'Figma', 'Adobe', 'GitHub', 'Atlassian', 'Salesforce', 'HubSpot', 'Zoom', 'Notion', 'Vercel', 'Stripe', 'SendGrid'];
const CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'AED'];
const TX_STATUSES: Transaction['status'][] = ['Completed', 'Completed', 'Completed', 'Completed', 'Pending', 'Failed', 'Cancelled'];
const TX_TYPES: Transaction['type'][] = ['Credit', 'Debit', 'Debit', 'Debit', 'Transfer', 'Refund'];
const TX_RISKS: Transaction['risk'][] = ['Low', 'Low', 'Low', 'Medium', 'Medium', 'High'];

export function generateTransactions(count: number = 150): Transaction[] {
    const txs: Transaction[] = [];
    for (let i = 1; i <= count; i++) {
        txs.push({
            txId: `TX-${String(rnd(100000, 999999))}`,
            date: randomDate(2024, 2026),
            type: pick(TX_TYPES),
            category: pick(TX_CATEGORIES),
            merchant: pick(MERCHANTS),
            amount: +(rnd(50, 50000) + Math.random()).toFixed(2),
            currency: pick(CURRENCIES),
            status: pick(TX_STATUSES),
            account: `ACC-${rnd(1000, 9999)}`,
            reference: `REF-${rnd(10000, 99999)}`,
            risk: pick(TX_RISKS)
        });
    }
    return txs;
}

// ─── Server / Infrastructure Dataset ────────────────────────────────────────
export interface ServerNode {
    hostname: string;
    ip: string;
    region: string;
    provider: string;
    type: string;
    cpu: number;    // usage %
    memory: number; // usage %
    disk: number;   // usage %
    uptime: number; // hours
    status: 'Running' | 'Stopped' | 'Maintenance' | 'Error';
    os: string;
    cost: number;   // monthly $
    tags: string[];
    lastPing: number; // ms
}

const REGIONS = ['us-east-1', 'us-west-2', 'eu-west-1', 'eu-central-1', 'ap-southeast-1', 'ap-northeast-1', 'me-south-1', 'sa-east-1'];
const PROVIDERS = ['AWS', 'Azure', 'GCP'];
const SERVER_TYPES = ['t3.micro', 't3.large', 'm5.xlarge', 'c5.2xlarge', 'r5.4xlarge', 'p3.2xlarge', 'Standard_B2s', 'Standard_D4s', 'n1-standard-4', 'e2-medium'];
const OS_LIST = ['Ubuntu 22.04', 'Amazon Linux 2', 'CentOS Stream 9', 'Debian 12', 'Windows Server 2022', 'RHEL 9'];
const SERVER_STATUSES: ServerNode['status'][] = ['Running', 'Running', 'Running', 'Running', 'Stopped', 'Maintenance', 'Error'];
const SERVER_TAGS = ['production', 'staging', 'dev', 'frontend', 'backend', 'database', 'cache', 'monitoring', 'ml', 'api', 'gateway', 'worker'];

export function generateServers(count: number = 80): ServerNode[] {
    const servers: ServerNode[] = [];
    for (let i = 1; i <= count; i++) {
        servers.push({
            hostname: `srv-${pick(['web', 'api', 'db', 'cache', 'queue', 'ml', 'proxy', 'worker'])}-${rnd(1, 99).toString().padStart(2, '0')}`,
            ip: `${rnd(10, 192)}.${rnd(0, 255)}.${rnd(0, 255)}.${rnd(1, 254)}`,
            region: pick(REGIONS),
            provider: pick(PROVIDERS),
            type: pick(SERVER_TYPES),
            cpu: rnd(5, 98),
            memory: rnd(10, 95),
            disk: rnd(15, 92),
            uptime: rnd(1, 8760),
            status: pick(SERVER_STATUSES),
            os: pick(OS_LIST),
            cost: +(rnd(10, 2500) + Math.random()).toFixed(2),
            tags: pickN(SERVER_TAGS, rnd(1, 4)),
            lastPing: rnd(1, 250)
        });
    }
    return servers;
}
