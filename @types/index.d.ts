export interface IEducation {
  id: string;
  title: string;
  major: string;
  year: number;
  country: string;
  institution: string;
}

export interface ICertification {
  id: string;
  title: string;
  institution: string;
  year: number;
}

export interface IProfile {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  phoneVerified: boolean;
  emailVerified: boolean;
  profilePhoto: string;
  address: string;
  businessName: string;
  banner: string;
  website: string;
  bio: string;
  state: string;
  city: string;
  accountType: string;
  occupation: string;
  experienceLevel: number;
  skills: string[];
  certifications: ICertification[];
  education: IEducation[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserProjects {
  id: string;
  title: string;
  category: string;
  tags: string[];
  colors: string[];
  year: number;
  city: string;
  state: string;
  media: string;
  description: string;
}

export interface IVendor {
  id: string;
  businessName: string;
  phoneNumber: string;
  website: string;
  email: string;
  phoneVerified: boolean;
  emailVerified: boolean;
  profilePhoto: string;
  banner: string;
  address: string;
  bio: string;
  state: string;
  city: string;
  accountType: string;
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProfessional {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  banner: string;
  businessName: string;
  email: string;
  phoneVerified: boolean;
  emailVerified: boolean;
  profilePhoto: string;
  address: string;
  bio: string;
  state: string;
  city: string;
  accountType: string;
  occupation: string;
  experienceLevel: number;
  skills: string[];
  education: IEducation[];
  certifications: ICertification[];
  createdAt: Date;
  updatedAt: Date;
}