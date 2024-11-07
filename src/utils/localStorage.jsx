const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskNumber: {
      active: 3,
      new: 2,
      completed: 4,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Report",
        taskDescription: "Finish the quarterly report by end of the week",
        taskDate: "2024-11-10",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the team meeting for project updates",
        taskDate: "2024-11-01",
        category: "Meetings",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Conduct research on latest market trends",
        taskDate: "2024-11-12",
        category: "Research",
      },
    ],
  },
  {
    id: 2,
    firstName: "Vishal",
    email: "employee2@example.com",
    password: "123",
    taskNumber: {
      active: 2,
      new: 1,
      completed: 6,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Follow-Up",
        taskDescription: "Follow up with clients about pending issues",
        taskDate: "2024-10-30",
        category: "Client Service",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Presentation Prep",
        taskDescription: "Prepare the slides for the upcoming presentation",
        taskDate: "2024-11-08",
        category: "Preparation",
      },
    ],
  },
  {
    id: 3,
    firstName: "Kavya",
    email: "employee3@example.com",
    password: "123",
    taskNumber: {
      active: 4,
      new: 1,
      completed: 2,
      failed: 3,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Documentation Review",
        taskDescription: "Review the project documentation for updates",
        taskDate: "2024-11-07",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Budget Planning",
        taskDescription: "Plan budget for the upcoming quarter",
        taskDate: "2024-10-15",
        category: "Finance",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskNumber: {
      active: 1,
      new: 1,
      completed: 5,
      failed: 2,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Employee Training",
        taskDescription: "Conduct training for new employees",
        taskDate: "2024-10-18",
        category: "Training",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Project Planning",
        taskDescription: "Outline the project plan for approval",
        taskDate: "2024-11-05",
        category: "Project Management",
      },
    ],
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskNumber: {
      active: 5,
      new: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "System Upgrade",
        taskDescription: "Assist IT in system upgrades",
        taskDate: "2024-11-09",
        category: "IT Support",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Check inventory levels and report shortages",
        taskDate: "2024-11-10",
        category: "Inventory",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Ravi",
    email: "admin@me.com",
    password: "123",
    taskNumber: {
      active: 2,
      new: 1,
      completed: 3,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Approve Budget",
        taskDescription: "Review and approve the budget proposal",
        taskDate: "2024-11-11",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Evaluation",
        taskDescription: "Evaluate team performance for quarterly review",
        taskDate: "2024-10-25",
        category: "HR",
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
