export interface EventType {
  eventName: string;
  eventType: [string];
  eventDate: Date;
  eventLocation: string;
  description: string;
  organizingOrganization: string;
  targetAudience: string;
  activities: { name: string; description: string }[];
  volunteering?: { isVolunteer: boolean; contact: string };
  donations?: { isDonations: boolean; contact: string };
  logo: string;
  contactInformation: {
    phone: string;
    website: string;
    email: string;
  };
  socialMediaLinks?: {
    twitter: string;
    linkedIn: string;
  };
  registrationLink: {
    isRegistration: boolean;
    link: string;
  };
}
