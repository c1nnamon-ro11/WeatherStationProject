// User class
export class User {
  uid: string;
  email: string;
  //displayName: string;
  photoURL: string;
  //emailVerified: boolean;
  roles: Roles;

  constructor(authData: any) {
    this.uid = authData.uid
    this.email = authData.email
    this.photoURL = authData.photoURL
    this.roles = authData.roles
  }
}

// Security user roles
export interface Roles {
  [key: string]: any;
  reader: boolean;
  admin?: boolean;
}
