export interface Subject {
  id: number;
  courseCode: string;
  name: string;
  department: string;
  description: string;
}

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Fundamentals of programming, algorithms, and computational thinking using Python.",
  },
  {
    id: 2,
    courseCode: "CS201",
    name: "Data Structures & Algorithms",
    department: "Computer Science",
    description:
      "Study of arrays, linked lists, trees, graphs, sorting, and searching algorithms.",
  },
  {
    id: 3,
    courseCode: "CS301",
    name: "Database Systems",
    department: "Computer Science",
    description:
      "Relational databases, SQL, normalization, transactions, and NoSQL concepts.",
  },
  {
    id: 4,
    courseCode: "MATH101",
    name: "Calculus I",
    department: "Mathematics",
    description:
      "Limits, derivatives, integrals, and the fundamental theorem of calculus.",
  },
  {
    id: 5,
    courseCode: "MATH201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Vectors, matrices, linear transformations, eigenvalues, and eigenvectors.",
  },
  {
    id: 6,
    courseCode: "MATH301",
    name: "Discrete Mathematics",
    department: "Mathematics",
    description:
      "Logic, set theory, combinatorics, graph theory, and proof techniques.",
  },
  {
    id: 7,
    courseCode: "ENG101",
    name: "Academic Writing",
    department: "English",
    description:
      "Essay structure, research writing, citations, and academic communication skills.",
  },
  {
    id: 8,
    courseCode: "ENG201",
    name: "Technical Writing",
    department: "English",
    description:
      "Writing technical documents, reports, manuals, and professional correspondence.",
  },
  {
    id: 9,
    courseCode: "PHY101",
    name: "General Physics I",
    department: "Physics",
    description:
      "Classical mechanics, kinematics, Newton's laws, energy, and momentum.",
  },
  {
    id: 10,
    courseCode: "PHY201",
    name: "Electromagnetism",
    department: "Physics",
    description:
      "Electric fields, magnetic fields, Maxwell's equations, and electromagnetic waves.",
  },
  {
    id: 11,
    courseCode: "BUS101",
    name: "Principles of Management",
    department: "Business",
    description:
      "Organizational theory, leadership, planning, and managerial decision-making.",
  },
  {
    id: 12,
    courseCode: "BUS201",
    name: "Microeconomics",
    department: "Business",
    description:
      "Supply and demand, market structures, consumer behavior, and pricing strategies.",
  },
];