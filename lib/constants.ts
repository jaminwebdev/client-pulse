export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-brown.png",
    name: "David Brown",
  },
  {
    image: "/assets/images/dr-moran.png",
    name: "Lisa Moran",
  },
  {
    image: "/assets/images/dr-patel.png",
    name: "Saresh Patel",
  },
  {
    image: "/assets/images/dr-paulson.png",
    name: "Elliott Paulson",
  },
  {
    image: "/assets/images/dr-peterson.png",
    name: "Mary Peterson",
  },
  {
    image: "/assets/images/dr-ramirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-schultz.png",
    name: "Phyllis Schultz",
  },
  {
    image: "/assets/images/dr-williams.png",
    name: "Davis Williams",
  },
  {
    image: "/assets/images/dr-smith.png",
    name: "Wayne Smith",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};