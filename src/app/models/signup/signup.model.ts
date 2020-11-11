
class UserInfo{
    email: string;
    password:string
	fullName:string
	phoneNumber:string
	phoneCode:string;
}

export class Signup {
    user:UserInfo;
    userRoles:string[];

    constructor(){
        this.user=new UserInfo();
        this.userRoles=[];
    }
}
