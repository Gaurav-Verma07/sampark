export interface NgoType {
  name: string;
  location: string;
  contactInformation: {
    phone: string;
    website: string;
    email: string;
  };
  vision: string;
  focusAreas: string[];
  projects: { name: string; description: string }[];
  teamMembers: { name: string; designation: string }[];
  donations: { isDonations: boolean; contact: string };
  volunteering: { isVolunteer: boolean; contact: string };
  logo: string;
  testimonials: { name: string; testimony: string }[];
  socialMediaLinks: { twitter: string; linkedIn: string };
  license: string;
  funding: string;
}
