export interface OrphanageType {
  name: string;
  location: string;
  contactInformation: string;
  vision: string;
  description: string;
  capacity: number;
  servicesProvided: string[];
  startAge: number;
  endAge: number;
  logo: string;
  operatingHours: number;
  license: string;
  staffInformation: { name: string; qualification: string }[];
  donationInformation: { isDonations: boolean; contact: string };
  testimonials?: { name: string; testimony: string }[];
}
