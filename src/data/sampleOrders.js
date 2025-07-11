const sampleData = [
  {
    id: "IN1001",
    company: "Infosys Pvt Ltd",
    state: "Karnataka",
    orderDate: "Apr 10, 2024",
    expectedDate: "Apr 15, 2024",
    completionDate: "Apr 15, 2024",
    serviceLevel: "Same Day Service",
    email: "ravi.kumar@infosys.com",
    status: "In Progress",
    stateFiling: 210,
    agentFee: 95,
    contact: {
      name: "Ravi Kumar",
      role: "Primary",
      phone: "9876543210",
      email: "ravi.kumar@infosys.com",
      address: "Electronic City, Bangalore, Karnataka - 560100",
    },
    history: {
      orderMessage: "Order created by Ravi Kumar",
      oDate: "Apr 10, 2024",
      stateMessage: "Submitted to Karnataka ROC",
      stateDate: "Apr 15, 2024",
    },
  },
  {
    id: "IN1002",
    company: "Tata Consultancy Services",
    state: "Maharashtra",
    orderDate: "Apr 02, 2024",
    expectedDate: "Apr 08, 2024",
    completionDate: "Apr 08, 2024",
    serviceLevel: "Standard",
    email: "neha.sharma@tcs.com",
    status: "Complete",
    stateFiling: 180,
    agentFee: 90,
    contact: {
      name: "Neha Sharma",
      role: "Primary",
      phone: "9765432180",
      email: "neha.sharma@tcs.com",
      address: "Powai, Mumbai, Maharashtra - 400076",
    },
    history: {
      orderMessage: "Order created by Neha Sharma",
      oDate: "Apr 02, 2024",
      stateMessage: "Documents submitted",
      stateDate: "Apr 08, 2024",
    },
  },
  {
    id: "IN1003",
    company: "Wipro Ltd",
    state: "Telangana",
    orderDate: "Mar 28, 2024",
    expectedDate: "Apr 03, 2024",
    completionDate: "Apr 03, 2024",
    serviceLevel: "Same Day Service",
    email: "arjun.reddy@wipro.com",
    status: "Submitted",
    stateFiling: 200,
    agentFee: 105,
    contact: {
      name: "Arjun Reddy",
      role: "Secondary",
      phone: "9001234567",
      email: "arjun.reddy@wipro.com",
      address: "Hitech City, Hyderabad, Telangana - 500081",
    },
    history: {
      orderMessage: "Order created by Arjun",
      oDate: "Mar 28, 2024",
      stateMessage: "Filed with Telangana ROC",
      stateDate: "Apr 03, 2024",
    },
  },
  {
    id: "IN1004",
    company: "Reliance Retail",
    state: "Gujarat",
    orderDate: "Mar 15, 2024",
    expectedDate: "Mar 21, 2024",
    completionDate: "Mar 21, 2024",
    serviceLevel: "Express",
    email: "meera.patel@reliance.com",
    status: "Complete",
    stateFiling: 250,
    agentFee: 120,
    contact: {
      name: "Meera Patel",
      role: "Primary",
      phone: "9911223344",
      email: "meera.patel@reliance.com",
      address: "SG Highway, Ahmedabad, Gujarat - 380015",
    },
    history: {
      orderMessage: "Order placed by Meera Patel",
      oDate: "Mar 15, 2024",
      stateMessage: "Completed filing",
      stateDate: "Mar 21, 2024",
    },
  },
  {
    id: "IN1005",
    company: "Flipkart India Pvt Ltd",
    state: "Karnataka",
    orderDate: "Apr 01, 2024",
    expectedDate: "Apr 07, 2024",
    completionDate: "Apr 07, 2024",
    serviceLevel: "Same Day Service",
    email: "rahul.jain@flipkart.com",
    status: "Approval Pending",
    stateFiling: 190,
    agentFee: 89,
    contact: {
      name: "Rahul Jain",
      role: "Primary",
      phone: "9988776655",
      email: "rahul.jain@flipkart.com",
      address: "Koramangala, Bangalore, Karnataka - 560095",
    },
    history: {
      orderMessage: "Submitted for approval",
      oDate: "Apr 07, 2024",
      stateMessage: "Completed filing",
      stateDate: "jun 21, 2024",
    },
  },
  {
    id: "IN1006",
    company: "Zomato Ltd",
    state: "Delhi",
    orderDate: "Mar 30, 2024",
    expectedDate: "Apr 05, 2024",
    completionDate: "Apr 05, 2024",
    serviceLevel: "Express",
    email: "ananya.mehta@zomato.com",
    status: "Draft",
    stateFiling: 175,
    agentFee: 82,
    contact: {
      name: "Ananya Mehta",
      role: "Secondary",
      phone: "9123456789",
      email: "ananya.mehta@zomato.com",
      address: "Saket, New Delhi - 110017",
    },
    history: {
      orderMessage: "Order saved as draft",
      oDate: "Mar 30, 2024",
      stateMessage: "Completed filing",
      stateDate: "oct 22, 2024",
    },
  },
  {
    id: "IN1007",
    company: "Byju's Pvt Ltd",
    state: "Kerala",
    orderDate: "Apr 03, 2024",
    expectedDate: "Apr 09, 2024",
    completionDate: "Apr 09, 2024",
    serviceLevel: "Standard",
    email: "divya.krishnan@byjus.com",
    status: "Review",
    stateFiling: 160,
    agentFee: 77,
    contact: {
      name: "Divya Krishnan",
      role: "Primary",
      phone: "9345612870",
      email: "divya.krishnan@byjus.com",
      address: "MG Road, Kochi, Kerala - 682035",
    },
    history: {
      orderMessage: "Order under internal review",
      oDate: "Apr 05, 2024",
      stateMessage: "Completed filing",
      stateDate: "sept 11, 2021",
    },
  },
  {
    id: "IN1008",
    company: "Paytm Services Pvt Ltd",
    state: "Uttar Pradesh",
    orderDate: "Mar 25, 2024",
    expectedDate: "Mar 31, 2024",
    completionDate: "Mar 31, 2024",
    serviceLevel: "Same Day Service",
    email: "alok.verma@paytm.com",
    status: "Created",
    stateFiling: 220,
    agentFee: 100,
    contact: {
      name: "Alok Verma",
      role: "Primary",
      phone: "8822113344",
      email: "alok.verma@paytm.com",
      address: "Sector 18, Noida, Uttar Pradesh - 201301",
    },
    history: {
      orderMessage: "Order created by Alok Verma",
      oDate: "Mar 25, 2024",
      stateMessage: "Completed filing",
      stateDate: "jul 09, 2024",
    },
  },
  {
    id: "IN1009",
    company: "OYO Rooms",
    state: "Haryana",
    orderDate: "Apr 05, 2024",
    expectedDate: "Apr 10, 2024",
    completionDate: "Apr 10, 2024",
    serviceLevel: "Standard",
    email: "isha.singh@oyo.com",
    status: "Submitted",
    stateFiling: 205,
    agentFee: 91,
    contact: {
      name: "Isha Singh",
      role: "Secondary",
      phone: "8899776655",
      email: "isha.singh@oyo.com",
      address: "Golf Course Road, Gurgaon, Haryana - 122002",
    },
    history: {
      orderMessage: "Documents submitted to ROC",
      oDate: "Apr 10, 2024",
      stateMessage: "Completed filing",
      stateDate: "april 21, 2024",
    },
  },
  {
    id: "IN1010",
    company: "Swiggy India Pvt Ltd",
    state: "Tamil Nadu",
    orderDate: "Mar 29, 2024",
    expectedDate: "Apr 04, 2024",
    completionDate: "Apr 04, 2024",
    serviceLevel: "Same Day Service",
    email: "suresh.babu@swiggy.com",
    status: "Query Raised",
    stateFiling: 195,
    agentFee: 85,
    contact: {
      name: "Suresh Babu",
      role: "Primary",
      phone: "9090909090",
      email: "suresh.babu@swiggy.com",
      address: "T Nagar, Chennai, Tamil Nadu - 600017",
    },
    history: {
      orderMessage: "Query raised by Tamil Nadu ROC",
      oDate: "Apr 04, 2024",
      stateMessage: "Completed filing",
      stateDate: "may 2, 2024",
    },
  },
  {
    id: "IN1011",
    company: "HCL Technologies",
    state: "Uttar Pradesh",
    orderDate: "Apr 06, 2024",
    expectedDate: "Apr 12, 2024",
    completionDate: "Apr 12, 2024",
    serviceLevel: "Standard",
    email: "rahul.verma@hcl.com",
    status: "In Progress",
    stateFiling: 210,
    agentFee: 88,
    contact: {
      name: "Rahul Verma",
      role: "Primary",
      phone: "9988776655",
      email: "rahul.verma@hcl.com",
      address: "Noida Sector 62, UP - 201309",
    },
    history: {
      orderMessage: "Order created by Rahul",
      oDate: "Apr 06, 2024",
      stateMessage: "Under state review",
      stateDate: "Apr 09, 2024",
    },
  },
  {
    id: "IN1012",
    company: "Tech Mahindra",
    state: "Maharashtra",
    orderDate: "Apr 01, 2024",
    expectedDate: "Apr 05, 2024",
    completionDate: "Apr 05, 2024",
    serviceLevel: "Express",
    email: "meena.das@techm.com",
    status: "Review",
    stateFiling: 215,
    agentFee: 94,
    contact: {
      name: "Meena Das",
      role: "Secondary",
      phone: "9091234567",
      email: "meena.das@techm.com",
      address: "Hinjewadi, Pune, Maharashtra - 411057",
    },
    history: {
      orderMessage: "Documents uploaded",
      oDate: "Apr 02, 2024",
      stateMessage: "Review by internal team",
      stateDate: "Apr 04, 2024",
    },
  },
  {
    id: "IN1013",
    company: "Amazon India",
    state: "Karnataka",
    orderDate: "Apr 03, 2024",
    expectedDate: "Apr 07, 2024",
    completionDate: "Apr 07, 2024",
    serviceLevel: "Same Day Service",
    email: "amit.shah@amazon.in",
    status: "Submitted",
    stateFiling: 250,
    agentFee: 120,
    contact: {
      name: "Amit Shah",
      role: "Primary",
      phone: "9871234560",
      email: "amit.shah@amazon.in",
      address: "Outer Ring Road, Bangalore - 560103",
    },
    history: {
      orderMessage: "Submitted to ROC Karnataka",
      oDate: "Apr 07, 2024",
      stateMessage: "Completed filing",
      stateDate: "Mar 21, 2024",
    },
  },
  {
    id: "IN1014",
    company: "Google India",
    state: "Telangana",
    orderDate: "Apr 04, 2024",
    expectedDate: "Apr 08, 2024",
    completionDate: "Apr 08, 2024",
    serviceLevel: "Standard",
    email: "deepa.reddy@google.com",
    status: "Created",
    stateFiling: 180,
    agentFee: 90,
    contact: {
      name: "Deepa Reddy",
      role: "Primary",
      phone: "9321002345",
      email: "deepa.reddy@google.com",
      address: "Gachibowli, Hyderabad - 500032",
    },
    history: {
      orderMessage: "Order created in system",
      oDate: "Apr 04, 2024",
      stateMessage: "Completed filing",
      stateDate: "aug 8, 2024",
    },
  },
  {
    id: "IN1015",
    company: "Microsoft India",
    state: "Haryana",
    orderDate: "Apr 05, 2024",
    expectedDate: "Apr 11, 2024",
    completionDate: "Apr 11, 2024",
    serviceLevel: "Express",
    email: "anil.malhotra@microsoft.com",
    status: "Approval Pending",
    stateFiling: 230,
    agentFee: 110,
    contact: {
      name: "Anil Malhotra",
      role: "Secondary",
      phone: "9811234567",
      email: "anil.malhotra@microsoft.com",
      address: "DLF Cyber City, Gurgaon - 122002",
    },
    history: {
      orderMessage: "Approval awaited from ROC",
      oDate: "Apr 10, 2024",
      stateMessage: "Completed filing",
      stateDate: "Mar 21, 2024",
    },
  },
];

export default sampleData;
