export class Patient {
  id: number;
  age: any;
  type: string;
  email: string;
  gender: string;
  ownerId: string;
  lastName: string;
  phoneCode: string;
  firstName: string;
  phoneNumber: string;
  dateOfBirth: string;
  socialSecurityNumber: string;
  medicalRecordNumber: string;
  name?: string;
  profileStatus?: string;

  constructor(age: string, email: string, gender: string, id: number, medicalRecordNumber: string,
    name: string, phoneCode: string, phoneNumber: string, profileStatus: string, socialSecurityNumber: string,
    type: string) {
      this.age = age;
      this.email = email;
      this.gender = gender;
      this.id = id;
      this.medicalRecordNumber = medicalRecordNumber;
      this.name = name;
      this.phoneCode = phoneCode;
      this.phoneNumber = phoneNumber;
      this.profileStatus = profileStatus;
      this.socialSecurityNumber = socialSecurityNumber;
      this.type = type;

  }
}
